import type { NextPage } from "next";
import { FaFile, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoTableau } from "react-icons/io5";
import { Section } from "../components";
import { useTheme } from "../contexts/ThemeContext";

const LINKS = [
  {
    icon: MdEmail,
    link: "mailto:lisapatel1998@gmail.com",
  },
  {
    icon: FaGithub,
    link: "https://github.com/LISAPATEL98",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/lisaapatel",
  },
  {
    icon: IoLogoTableau,
    link: "https://public.tableau.com/app/profile/lisa7954#!/",
  },
  {
    icon: FaMedium,
    link: "https://lisaapatel.medium.com/",
  },
  {
    icon: FaFile,
    link: "https://drive.google.com/file/d/1ZMFkTSLvxA1lSpF5tMa0iZjD5kby_XI7/view?usp=sharing",
  },
];

const Contact: NextPage = () => {
  const { theme } = useTheme();
  
  // Consistent color variables
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  
  // Set appropriate colors for the contact section
  const sectionBgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const sectionTextColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const iconColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  
  return (
    <div className={`${bgColor} ${textColor} min-h-screen transition-colors duration-300`}>
      <div className="container py-12">
        <h1 className="page-title text-center">Contact Me</h1>
        
        <div className={`rounded-2xl shadow-soft-lg py-16 px-8 ${sectionBgColor} transition-colors duration-300 max-w-3xl mx-auto`}>
          <p className={`text-center body-text mb-12 ${sectionTextColor}`}>
            I enjoy meeting new people and collaborating or even just talking over
            some good coffee, so please feel free to reach out!
          </p>
          
          <div className="flex justify-center items-center mt-12 flex-wrap">
            {LINKS.map(({ link, icon }, i) => {
              const Comp = icon;
              return (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mx-5 mb-6 ${iconColor} hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-300 transform hover:scale-110`}
                >
                  <Comp size={36} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
