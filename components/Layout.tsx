import { Navigation } from "./Navigation/Navigation";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useState } from "react";

const links = [
  {
    text: "About",
    link: "",
  },
  {
    text: "Experience",
    link: "experience",
  },
  {
    text: "Travel",
    link: "travel",
  },
  {
    text: "Projects + Explorations",
    link: "projects",
  },
  {
    text: "Contact",
    link: "contact",
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  
  // First useEffect - handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Second useEffect - handle theme changes
  useEffect(() => {
    if (mounted) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.style.backgroundColor = '#111827'; // bg-gray-900
        document.body.style.color = '#f3f4f6'; // text-gray-100
      } else {
        document.documentElement.classList.remove('dark');
        document.body.style.backgroundColor = '#ffffff'; // white
        document.body.style.color = '#111827'; // text-gray-900
      }
    }
  }, [theme, mounted]);
  
  // Render based on mount state
  if (!mounted) {
    return (
      <div className="min-h-screen">
        <Navigation links={links} title="Lisa Patel" />
        <main>{children}</main>
      </div>
    );
  }
  
  const bgClass = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-gray-900';
  
  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-200`}>
      <Navigation links={links} title="Lisa Patel" />
      <main className="min-h-screen transition-colors duration-200">{children}</main>
    </div>
  );
}

export default Layout;
