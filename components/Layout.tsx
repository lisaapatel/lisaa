import { Footer, Navigation, NavLinks } from "./";
import React, { ReactNode } from "react";

const links: NavLinks[] = [
  {
    text: "Home",
    link: "",
  },
  {
    text: "Experience",
    link: "/experience",
  },
  {
    text: "Projects",
    link: "/projects",
  },
];

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navigation title="Lisa Patel" links={links} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
