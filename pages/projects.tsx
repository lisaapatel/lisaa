import { Card } from "../components";
import { useState } from "react";
import { useTheme } from '../contexts/ThemeContext';
import type { NextPage } from "next";
import { Section } from "../components";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// Add interfaces for the project types
interface Project {
  title: string;
  link: string;
  body: string[];
  technologies: string[];
}

interface TableauProject {
  title: string;
  link: string;
  img: string;
}

interface CaseStudy {
  title: string;
  link?: string;
  subtitle?: string;
  scenario?: string;
  objectives?: string[];
  productStudied?: string;
  steps?: string[];
  body?: string[];
  analysis?: string[];
  businessGoals?: string[];
}

const PROJECTS: Project[] = [
  {
    title: "E-Commerce Customer Segmentation & Behavior Analysis",
    link: "https://github.com/LISAPATEL98/EcommerceCustomers",
    body: [
      "Predicted product recommendations depending on past 259k customer transactions; used K-means Clustering to aggregate frequently bought items together, which lead to a strategy for promoting market basket sales improving revenue on retail",
      "Performed RFM Analysis, to segment customers based on value from past transactions and Trend analysis to find purchase patterns over time",
    ],
    technologies: ["Python", "Machine Learning", "K-means", "RFM Analysis"]
  },

  {
    title: "ARTICULATE : Article Summarizer",
    link: "https://github.com/LISAPATEL98/Articlesummarizer",
    body: [
      "Web-Scraped data using Selenium to fetch articles from NY Times, summarized article lengths using techniques like TextRank, Similarity matrix",
      "Classified the comments on articles to positive/negative and truthful/deceptive using Sentimental analysis and Text analysis",
      "Predicted NYT's best pick comment using Logistic regression with 72% ROC; built an automatic comment generator using Tensorflow and LSTM",
    ],
    technologies: ["NLP", "Machine Learning", "Python", "Tensorflow"]
  },

  {
    title: "Moderation System for Hate Speech Detection",
    link: "https://github.com/LISAPATEL98/HateSpeech-moderationSystem",
    body: [
      "Designed an interface that identifies abusive content which alerts users, and provides a timer to rethink before publishing hate content using BERT",
      "Performed data cleaning using Lemmatization, Stemming and did feature extraction with techniques like TF-IDF vectors, Lime Text Explainer",
      "Used oversampling- SMOTE and RandomOversampling on the imbalance data to achieve the accuracy of 95%",
    ],
    technologies: ["BERT", "NLP", "Python", "Machine Learning"]
  },

  {
    title: "A/B test on Mobile Game Players",
    link: "https://github.com/LISAPATEL98/AB_testing-",
    body: [
      "Conducted A/B test on mobile game data with ~90k players to determine the intensity of obstacles in-game level to increase player retention",
      "Implemented the hypothesis testing using statistical techniques like Chi-Square test, degree of freedom, p-value",
    ],
    technologies: ["Statistical Analysis", "Python", "A/B Testing", "Chi-Square"]
  },
  {
    title: "HR Employee Management",
    link: "",
    body: [
      "Applied HR Analytics using ML on IBM's dataset, created a strategic plan for employee churn model & retention rate",
      "Reduced attrition rate by determining KPI's & flagging employees at risk; Logistic regression, SVM with 82% accuracy",
    ],
    technologies: ["Machine Learning", "Python", "Logistic Regression", "SVM"]
  },

  {
    title: "LinkedIn Messages & Connection Analysis",
    link: "https://github.com/LISAPATEL98/LinkdeIn-Analysis",
    body: [
      "Performed analysis on my current LinkedIn Messages and connections for detecting language & to determine the tone of msgs I've been getting.",
    ],
    technologies: ["Data Analysis", "Python", "NLP"]
  },
];

const TABLEAU_PROJECTS: TableauProject[] = [
  {
    title: "The Earth is heating up, What are you doing for saving the Planet?",
    link: "https://public.tableau.com/views/TheEarthisheatingupWhatareyoudoingforsavingthePlanet/TheEarthisgettingwarmer?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Th/TheEarthisheatingupWhatareyoudoingforsavingthePlanet/TheEarthisgettingwarmer/4_3.png",
  },
  {
    title: "Perceived Obstacles to Gender Equality",
    link: "https://public.tableau.com/views/PerceivedObstaclestoGenderEquality_16128250632890/PerceivedObstaclestoGenderEquality?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Pe/PerceivedObstaclestoGenderEquality_16128250632890/PerceivedObstaclestoGenderEquality/4_3.png",
  },
  {
    title: "The Race Towards Sustainability",
    link: "https://public.tableau.com/views/TheRaceTowardsSustainability/RenewablesovertakeFossils?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Th/TheRaceTowardsSustainability/RenewablesovertakeFossils/4_3.png",
  },
  {
    title: "Coal Production in India",
    link: "https://public.tableau.com/views/CoalProductioninIndia_16116160336180/CoalProductioninIndia?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Co/CoalProductioninIndia_16116160336180/CoalProductioninIndia/4_3.png",
  },
  {
    title: "Gender Inequality and HIV-AIDS among Adolescents",
    link: "https://public.tableau.com/views/GenderInequalityandHIV-AIDSamongAdolescents/GenderInequalityandHIVAIDS?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Ge/GenderInequalityandHIV-AIDSamongAdolescents/GenderInequalityandHIVAIDS/4_3.png",
  },
  {
    title: "San Francisco's Airbnb Listings Analysis",
    link: "https://public.tableau.com/views/SanFranciscosAirbnbListingsAnalysis/Airbnb?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Sa/SanFranciscosAirbnbListingsAnalysis/Airbnb/4_3.png",
  },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "BioTech Companies Comparison | Finance Analysis",
    link: "https://github.com/LISAPATEL98/BioTechCompaniesComparision",
    subtitle: "BioGen Vs Bristol Myers Squibb",
    body: [
      "Conducted a comparative study by performing quantitative and qualitative analysis of both companies. Here, the two companies are chosen from the Pharmaceutical market segment. This analysis was conducted on the following elements:",
    ],
    analysis: [
      "Key competitors & key drivers/challenges",
      "Most recent Earnings call, latest SEC filing & executive compensation structure",
      "Horizontal & Vertical Analysis",
      "Key ratios that are formative for each company",
      "Based on the analysis, each company was valued for investors. Used data visualization tools for in-depth analysis."
    ]
  },
  {
    title: "Virtualization adoption in Retail Sector | Digital Strategy Consulting",
    link: "https://github.com/LISAPATEL98/CaseStudies-/blob/main/Virtualization%20In%20Retail%20Compaines.pdf",
    scenario: "The CIO of Abacus(hypothetical online retail store) has decided that the company will adopt common virtualization across all of its data centers.",
    objectives: [
      "To reduce overall capital equipment and operating expenses",
      "To improve IT responsiveness to its internal customers"
    ],
    productStudied: "VMware vSphere & Microsoft Hyper-v",
    steps: [
      "Identified challenges faced in the current state of IT Infrastructure for a hypothetical retail company called Abacus Inc.",
      "Evaluated Microsoft & VMware cloud services based on their ecosystem, feature comparison, cost structure, ROI, TCO, and risk factors",
      "Delivered virtualization implementation strategy, business benefits, and future state of the company"
    ]
  },
  {
    title: "Ebay's Digital Strategy & Transformation: HelpBot | Digital Strategy Consulting",
    link: "https://github.com/LISAPATEL98/CaseStudies-/blob/main/eBay'%20digital%20transformation%20-%20Helpbot.pdf",
    body: [
      "Analyzed the current user experience of eBay for understanding user pain points. Did User Surveys, and Affinity Mapping to come up with MVP features that would keep eBay updated in terms of the offer's in comparison to e-commerce like Amazon"
    ],
    steps: [
      "Formulated digital capabilities leveraging AI and Automation that helped drive the strategy and deliver value (Improved CX, Efficiency, Retention, and Loyalty, etc.)",
      "Performed capability assessment of current State (AI & automation capabilities), GAP Analysis, SWOT Analysis",
      "Designed Future State Design – customer journey maps, process map, digital systems/architecture, roadmap",
      "Laid out risks involved in undertaking this initiative and recommended mitigation of these risk"
    ],
    businessGoals: [
      "Ease in Customer Service",
      "Customer Retention"
    ]
  },
  {
    title: "Hassle-Free Travel Planner | New Product Development",
    body: [
      "Creating scheduler syncing calendars for group travels, providing plan recommendations upon the user selections",
      "Conducting user interviews, journey mapping & affinity mapping; deducing problems from user pain points"
    ]
  }
];

type ProjectCategory = "data-science" | "tableau" | "case-studies";

const Projects: NextPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("data-science");
  const { theme } = useTheme();
  
  // Consistent color variables
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textColorSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  // Simplified category toggle buttons with modern styling
  const renderToggleButtons = () => (
    <div className="flex flex-col sm:flex-row justify-center mb-12 gap-4">
      <button
        onClick={() => setActiveCategory("data-science")}
        className={`px-5 py-2.5 rounded-lg transition-all duration-300 ${
          activeCategory === "data-science"
            ? "bg-gradient-to-r from-accent-light to-accent-dark text-white font-medium shadow-md"
            : `${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} hover:shadow-md`
        }`}
      >
        Data Science
      </button>
      <button
        onClick={() => setActiveCategory("tableau")}
        className={`px-5 py-2.5 rounded-lg transition-all duration-300 ${
          activeCategory === "tableau"
            ? "bg-gradient-to-r from-accent-light to-accent-dark text-white font-medium shadow-md"
            : `${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} hover:shadow-md`
        }`}
      >
        Visualizations
      </button>
      <button
        onClick={() => setActiveCategory("case-studies")}
        className={`px-5 py-2.5 rounded-lg transition-all duration-300 ${
          activeCategory === "case-studies"
            ? "bg-gradient-to-r from-accent-light to-accent-dark text-white font-medium shadow-md"
            : `${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} hover:shadow-md`
        }`}
      >
        Case Studies
      </button>
    </div>
  );

  const renderDataScienceProjects = () => (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
      {PROJECTS.map((p: Project) => (
        <Card 
          key={p.title} 
          className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} rounded-lg shadow-lg p-8 transition-colors`}
        >
          <h3 className="text-2xl font-bold mb-4 dark:text-white">
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-${theme === 'dark' ? 'blue-400' : 'blue-600'}`}
              >
                {p.title}
              </a>
            ) : (
              <>{p.title}</>
            )}
          </h3>
          <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
            {p.body.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-auto">
            {p.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );

  const renderTableauProjects = () => (
    <>
      <h3 className="container text-xl text-center font-bold my-4">
        You can find all the vizzes in my{" "}
        <a
          href="https://public.tableau.com/app/profile/lisa7954#!/"
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-${theme === 'dark' ? 'blue-400' : 'yellow-400'}`}
        >
          Tableau Gallery.
        </a>
      </h3>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {TABLEAU_PROJECTS.map((p) => (
          <Card key={p.title} className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} rounded-lg shadow-lg overflow-hidden`}>
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-center">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                    className={`hover:text-${theme === 'dark' ? 'blue-400' : 'blue-600'}`}
                >
                  {p.title}
                </a>
              ) : (
                <>{p.title}</>
              )}
            </h3>
            </div>
          </Card>
        ))}
      </div>
    </>
  );

  const renderCaseStudies = () => (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
      {CASE_STUDIES.map((study) => (
        <Card key={study.title} className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} rounded-lg shadow-lg p-8`}>
          <h3 className="text-2xl font-bold mb-4">
            {study.link ? (
              <a
                href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                className={`hover:text-${theme === 'dark' ? 'blue-400' : 'blue-600'}`}
                >
                {study.title}
                </a>
              ) : (
              study.title
              )}
            </h3>

          {study.subtitle && <p className="mb-4 text-gray-600">{study.subtitle}</p>}

          {study.scenario && (
            <div className="mb-4">
              <span className="font-bold">Scenario: </span>
              <span className="text-gray-600">{study.scenario}</span>
            </div>
          )}

          {study.objectives && (
            <div className="mb-4">
              <p className="font-bold mb-2">Objectives:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                {study.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
          )}

          {study.productStudied && (
            <div className="mb-4">
              <span className="font-bold">Product Studied: </span>
              <span className="text-gray-600">{study.productStudied}</span>
            </div>
          )}

          {study.body && (
            <div className="mb-4">
              {study.body.map((text, i) => (
                <p key={i} className="text-gray-600 mb-2">{text}</p>
              ))}
            </div>
          )}

          {study.steps && (
            <div className="mb-4">
              <p className="font-bold mb-2">Steps:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                {study.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          )}

          {study.analysis && (
            <div className="mb-4">
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                {study.analysis.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {study.businessGoals && (
            <div className="mb-4">
              <p className="font-bold mb-2">Business Goals:</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                {study.businessGoals.map((goal, i) => (
                  <li key={i}>{goal}</li>
              ))}
            </ul>
            </div>
          )}
          </Card>
        ))}
      </div>
  );

  return (
    <div className={`${bgColor} ${textColor} transition-colors duration-300`}>
      <Section type="light">
        <div className="container max-w-4xl mx-auto">
          <h1 className="page-title">Projects + Explorations</h1>
          
          {/* Exploration & Creativity Section */}
          <div className="mb-24">
            <h2 className="section-title">Exploration &amp; Creativity</h2>
            <p className={`${textColorSecondary} text-center body-text mb-8 max-w-3xl mx-auto`}>
              This is where I&apos;ll be sharing some of my latest experiments, creative projects, and cool finds! 
              First up is an article I recently wrote about building a 0-to-1 web app with Cursor. 
              It&apos;s a quick dive into how I built Spectogo Live in just 2 hours—check it out!
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://medium.com/@lisaapatel/building-a-0to1-web-app-with-cursor-product-spectogo-live-in-2hrs-5de4c9fc03c7" 
                className="group inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="text-lg font-medium mr-2">Read: Building a 0to1 web app with Cursor</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Previous Projects Introduction */}
          <div className="mb-16">
            <h2 className="section-title">Previous Projects</h2>
            <p className={`${textColorSecondary} text-center body-text mb-12 max-w-3xl mx-auto`}>
              Here&apos;s a collection of projects I worked on during grad school, organized into three sections: 
              Data Science, Data Visualization, and Case Studies. It&apos;s a mix of hands-on work and creative 
              problem-solving from that time!
            </p>
            
            {renderToggleButtons()}
          </div>
          
          <h3 className="section-subtitle mb-10">
            {activeCategory === "data-science" && "Data Science Projects"}
            {activeCategory === "tableau" && "Data Visualization Projects"}
            {activeCategory === "case-studies" && "Case Studies"}
          </h3>

          {activeCategory === "data-science" && renderDataScienceProjects()}
          {activeCategory === "tableau" && renderTableauProjects()}
          {activeCategory === "case-studies" && renderCaseStudies()}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
