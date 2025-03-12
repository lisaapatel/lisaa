import { Navigation } from "./Navigation/Navigation";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useState } from "react";
import Head from 'next/head';

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
  title?: string;
}

export const Layout = ({ children, title = 'Lisa Patel' }: LayoutProps) => {
  const { theme } = useTheme();
  
  const bgColor = theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg';
  const textColor = theme === 'dark' ? 'text-gray-50' : 'text-gray-900';

  return (
    <div className={`min-h-screen ${bgColor} transition-colors duration-300`}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation links={links} title="Lisa Patel" />
      
      <div className={`${textColor}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
