/* eslint-disable jsx-a11y/anchor-is-valid */
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";

export interface NavLinks {
  text: string;
  link: string;
}

export interface UiProps {
  links: NavLinks[];
  title?: string;
}

export function Navigation({ links, title }: UiProps) {
  const [navOpen, setNavOpen] = useState(false);
  const { asPath } = useRouter();
  const { theme, toggleTheme } = useTheme();

  const onClick = () => setNavOpen((prev) => !prev);

  const linkClasses = classnames("hover:underline", "hover:text-yellow-400");

  // Use these specific dark colors for consistency
  const darkBgColor = "bg-gray-900"; // Same as Layout's dark bg
  const darkTextColor = "text-white";
  
  // Light mode colors
  const lightBgColor = "bg-white";
  const lightTextColor = "text-gray-900";

  const isActive = (path: string) => {
    return asPath === path 
      ? "text-accent-light dark:text-accent-dark font-semibold" 
      : (theme === 'light' ? lightTextColor : darkTextColor) + " hover:text-accent-light dark:hover:text-accent-dark";
  };

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
        <div className="container">
          <div className={`flex h-20 w-full items-center transition-colors duration-300 sm:h-24 ${
            theme === 'light' 
              ? lightBgColor + ' ' + lightTextColor
              : darkBgColor + ' ' + darkTextColor
          }`}>
            <h2 className="flex-1 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
            <div className="hidden sm:block">
              <ul className="flex items-center">
                {links?.map((navLink) => {
                  const { text, link } = navLink;
                  const href = `/${link}`;

                  return (
                    <li key={href} className="px-4">
                      <Link href={href}>
                        <a className={`text-base modern-link ${isActive(href)}`}>{text}</a>
                      </Link>
                    </li>
                  );
                })}
                <li className="ml-6">
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition-colors ${
                      theme === 'light'
                        ? 'hover:bg-gray-100 ' + lightTextColor
                        : 'hover:bg-gray-800 ' + darkTextColor
                    }`}
                    aria-label="Toggle theme"
                  >
                    {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                  </button>
                </li>
              </ul>
            </div>
            <button
              onClick={onClick}
              className="flex items-center justify-center sm:hidden"
            >
              {navOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      <ul
        className={classnames(
          "flex",
          "flex-col",
          "items-center",
          "sm:hidden",
          "transition-all",
          theme === 'light'
            ? lightBgColor + ' ' + lightTextColor
            : darkBgColor + ' ' + darkTextColor,
          {
            "max-h-60": navOpen === true,
            "pb-6": navOpen === true,
            "max-h-0": navOpen === false,
          }
        )}
      >
        {navOpen &&
          links?.map((navLink) => {
            const { text, link } = navLink;
            const href = `/${link}`;

            return (
              <li key={href} className={`py-3 ${linkClasses} ${isActive(href)}`}>
                <Link href={href}>
                  <a className="text-lg">{text}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Navigation;
