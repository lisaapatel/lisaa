import type { NextPage } from "next";
import { Section } from "../components";
import { useTheme } from "../contexts/ThemeContext";
import Head from 'next/head'

const Home: NextPage = () => {
  const { theme } = useTheme();
  
  // Consistent color variables
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textColorSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  
  return (
    <div className={`${bgColor} ${textColor} transition-colors duration-300`}>
      <Head>
        <title>Lisa Patel</title>
        <meta name="description" content="Lisa Patel's Portfolio" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
      </Head>

      <Section type="light">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="page-title">
              Welcome to my corner on the internet.
            </h2>
            <h3 className="text-2xl text-gray-500 dark:text-gray-300 font-light">
              Nice to e-meet you!
            </h3>
          </div>
          
          <div className="space-y-8">
            <p className={`body-text ${textColorSecondary}`}>
              I am an SCU alumnus with a Master&apos;s in Information Systems,
              currently based out of the Bay Area. I am passionate about using
              the data to help and build better products for users.
              Currently working at a fintech unicorn start-up{" "}
              <a 
                href="https://www.upgrade.com" 
                className={`modern-link ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
              >
                Upgrade
              </a>
              , I help different teams in making impactful data-driven decisions.
            </p>
            
            <p className={`body-text ${textColorSecondary}`}>
              My passion revolves around three core tenets: strategy, analytics, and innovation. I am an avid learner who enjoys
              exciting challenges. I presume it is to accept what life throws at me and mould it in the best possible way while enjoying small wins on the way.
            </p>
            
            <p className={`body-text ${textColorSecondary}`}>
              You can also catch me binge-watching on Netflix, daydreaming,
              baking, trying out new recipes or blogging about my travels and
              experiences. You can find my blog{" "}
              <a 
                href="https://www.instagram.com/thehattales/" 
                className={`modern-link ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
              >
                here
              </a>.
            </p>
            
            <p className={`body-text ${textColorSecondary}`}>
              Besides this, I am also interested in smart mobility, and
              sustainability!
            </p>
          </div>
          
          <div className="mt-24 mb-8">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              A peek into my life right now
            </h3>
            <ul className={`space-y-4 ${textColorSecondary}`}>
              <li>
                <span className="font-bold">Life goal:</span> Enjoy all of
                nature&apos;s beautiful experiences
              </li>
              <li>
                <span className="font-bold">Learning:</span> Yoga
              </li>
              <li>
                <span className="font-bold">Reading:</span> The Midnight
                library, Hacking Growth by Sean Ellis
              </li>
              <li>
                <span className="font-bold">Listening:</span> No Stupid
                Questions, Below the Line by James Beshera
              </li>
              <li>
                <span className="font-bold">Watching:</span> The watcher, house
                of dragons
              </li>
              <li>
                <span className="font-bold">Celebrating:</span> Highschool
                friends reunion &amp; all the little joys in Life!
              </li>
            </ul>
            <p className={`mt-8 ${textColorSecondary}`}>Thanks for stopping by!</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
