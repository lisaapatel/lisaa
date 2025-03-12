import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { useTheme } from "../contexts/ThemeContext";
import Head from 'next/head';

const Travel: NextPage = () => {
  const { theme } = useTheme();
  const textColorSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  
  return (
    <Layout title="Travel - Lisa Patel">
      <Head>
        <title>Travel - Lisa Patel</title>
        <meta name="description" content="Lisa Patel's travel adventures and experiences" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight mb-8">
          Travel
        </h1>
        
        <p className="text-sm leading-relaxed mb-10 max-w-3xl">
          I love exploring new places and cultures! Here's a collection of some of my travel adventures.
          My passion for travel has taken me around the world, capturing memories and experiencing diverse cultures.
        </p>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-12">
          <h3 className="text-base font-medium mb-2">Food Adventures</h3>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            One of the best parts of traveling is experiencing local cuisines. From street food markets in Bangkok to fresh pasta in Italy, food is central to understanding a culture's identity and traditions.
          </p>
        </div>
        
        <div className="text-center">
          <p className={`text-sm ${textColorSecondary}`}>
            Find more travel stories on my <a 
              href="https://www.instagram.com/thehattales/" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Travel; 