import type { NextPage } from "next";
import { Section } from "../components";
import { useTheme } from "../contexts/ThemeContext";

const Travel: NextPage = () => {
  const { theme } = useTheme();
  
  // Consistent color variables
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textColorSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  
  return (
    <div className={`${bgColor} ${textColor} transition-colors duration-300`}>
      <Section type="light">
        <div className="container max-w-4xl mx-auto">
          <h1 className="page-title">Travel Recommendations</h1>
          
          <div className="my-16">
            <p className={`body-text ${textColorSecondary} text-lg`}>
              Coming soon! I&apos;ll be sharing my favorite travel destinations, hidden gems, and travel tips from my 
              adventures around the world.
            </p>
          </div>
          
          {/* Placeholder for future travel content */}
          <div className="min-h-[30vh]"></div>
        </div>
      </Section>
    </div>
  );
};

export default Travel; 