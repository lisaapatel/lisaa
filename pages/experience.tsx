import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { useTheme } from "../contexts/ThemeContext";
import Head from 'next/head';

const EXPERIENCES = [
  {
    company: "Upgrade, Inc.",
    title: "Product Manager",
    timePeriod: "Jan 2024 - Present",
    location: "San Francisco, CA",
    description: [
      "Streamlined customer onboarding process by optimizing authentication flow, eliminating unnecessary email verification steps and integrating essential platform links, resulting in 35% faster signups",
      "Architected and implemented a comprehensive disputes flow, transforming the existing process by: - Developing a structured workflow with improved reliability and customer support - Creating detailed audit logs for enhanced transparency - Establishing clear documentation for investor insights - Streamlining compliance and troubleshooting processes",
      "Developed critical self-service features to enhance customer experience, including hardship enrollment, payment date modification, auto-enrollment options, and interactive interest savings calculator",
      "Led the development of cross-sell flow, defining targeted customer criteria and directing users to appropriate product solutions, improving product discovery and conversion",
      "Collaborated with data science team to implement intelligent fraud detection rules, directing suspicious payment activities to agent review while maintaining frictionless experience for legitimate users",
      "Managed executive reporting, providing critical insights into product performance and strategic opportunities that informed leadership decision-making"
    ],
  },
  {
    company: "Upgrade, Inc.",
    title: "APM/Product Analyst",
    timePeriod: "Aug 2022 - Jan2024",
    location: "San Francisco, CA",
    description: [
      "Streamlining customer experience by creating new features. Assisting in vendor selection, defining product specification by working cross-functionally with the engineering and product team",
      "Leading analysis/reporting for Home improvement loans; defining metrics, data models, automating reports for tracking product health and improving overall user experience"
    ],
  },
  {
    company: "Blitz App, Inc.",
    title: "Product Data Analyst",
    timePeriod: "Sept 2021 - July 2022",
    location: "San Francisco, CA",
    description: [
      "Performed acquisition and behavioral cohort analysis, and created dashboards to track early retention issues and user churn trends",
      "Built comprehensive reporting pipelines for tracking insights and trends in user growth which resulted in easy-of-use tracking in overall company performance",
      "Automated reporting of Advance subscription metrics, to help the product team manage and understand subscription profitability and MRR, LTV, CAC, churn rates and more",
      "Partnered with the product team to drive product strategy and features through data-informed insights on comparing game engagement of pro vs non-pro users",
      "Designed KPIs for understanding Ad revenue in correlation to user journey, provided reports informing Ad touchpoints and placements ensuring marketing campaign success",
      "Designed interfaces to provide real-time overview of key business metrics and revenue helping depict the overall health of the product offering",
      "Transformed and processed raw data for historic back-fills and automated daily events",
      "Worked with partner teams on different tech stack such as SQL, Databricks, Tableau, Spark, Snowflake, Python to solve an array of problems"
    ],
  },
  {
    company: "Okta, Inc.",
    title: "Data Science Analyst, Intern",
    timePeriod: "Mar 2021 - Sept 2021",
    location: "San Francisco, CA",
    description: [
      "Generating reports/dashboards on user search behaviors, product engagement insights to identify content gaps using Coveo Machine Learning, Google Analytics, Salesforce to provide recommendations to product strategy based on research for new content development",
      "Implementing pipelines for data cleaning/manipulation using Python, SQL for ad-hoc analysis",
      "Supporting launch of new product features and product testing by providing real-time analytics using Tableau based on internal/customer interactions"
    ],
  },
  {
    company: "Gilead Sciences, Inc.",
    title: "Data Scientist, Intern",
    timePeriod: "Apr 2020 - Dec 2020",
    location: "Foster City, CA",
    description: [
      "Collaborated with data engineers to develop ETL workflows in Azure Data Factory to analyze over 2 million patient health claims",
      "Wrote and optimized SQL queries to perform data extraction, developed data processing pipelines using python (Numpy, Pandas) and built ML models with 78% accuracy to identify target patients likely to switch on the new drug and predict quality target of the drug market",
      "Created effective data visualization dashboards with Tableau and Matplotlib which provided business insights to the sales team for investing in the promotion of the product"
    ],
  },
  {
    company: "BioMarin Pharmaceutical, Inc.",
    title: "Data Science Analyst, Intern",
    timePeriod: "Jun 2020 - Sept 2020",
    location: "San Rafael, CA",
    description: [
      "Led cleaning and processing of data with SQL, Python (Pandas, NumPy) from multiple data sources to a data warehouse",
      "Conceptualized and implemented PowerBI Dashboards for the leadership team utilizing data to advise on strategic decisions like Promotion, Workforce Diversity, Employee Engagement, Office Capacity Planning, and Attrition",
      "Independently designed KPIs on operational metrics in Python and PowerBI to analyze the gender and/or ethnicity pay gap"
    ],
  },
];

const EDUCATION = [
  {
    institution: "Santa Clara University, Leavey School of Business",
    degree: "Master of Science in Information Systems",
    timePeriod: "2021",
    location: "Santa Clara, CA",
    description: [
      "Coursework: Data Science with Python, Machine Learning, NLP, Database Management, Cloud Computing, Info. Systems Analysis & Design, Object Oriented Analysis -Java, Database Analysis & Modeling, Data Warehousing, Digital Strategies & Policies, Software Project Management, Women in Leadership",
      "Activities: Grace Hopper Celebration, Rewriting the Code, Women In Product, Product Buds"
    ],
  },
  {
    institution: "Gujarat Technological University",
    degree: "Bachelor of Engineering in Information and Communication Technology",
    timePeriod: "2019",
    location: "Gujarat, India",
    description: [
      "Coursework: Software Engineering, Adv. Computer Networks, Data Structures, Operating Systems",
      "Activities: Lumina, LJ Prayas, LJ Tech fest"
    ],
  },
  {
    institution: "Product School",
    degree: "Product Analytics",
    timePeriod: "",
    location: "",
    description: [
      "Coursework: Web Analytics, Intro to SQL, Advance SQL, Data Visualization, Understanding Data & Statistics, Intro to Machine Learning, Data Visualization & Big Data, Capstone"
    ],
  }
];

const Experience: NextPage = () => {
  const { theme } = useTheme();
  const textColorSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  
  return (
    <Layout title="Experience - Lisa Patel">
      <Head>
        <title>Experience - Lisa Patel</title>
        <meta name="description" content="Lisa Patel's professional experience" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-2xl font-semibold tracking-tight mb-10">
          Experience
        </h1>
        
        <h2 className="text-xl font-medium text-center mb-12">
          Work Experience
        </h2>

        {/* Experience items */}
        <div className="space-y-12">
          {/* Upgrade Experience */}
          <div className="bg-white dark:bg-dark-card shadow-sm rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">Product Manager</h3>
                <a 
                  href="https://www.upgrade.com" 
                  className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium"
                >
                  Upgrade, Inc.
                </a>
              </div>
              <p className="text-sm mt-2 md:mt-0 md:text-right">
                Jan 2024 - Present • San Francisco, CA
              </p>
            </div>
            
            <ul className="space-y-4 text-sm leading-relaxed ml-5 list-disc">
              <li>
                Streamlined customer onboarding process by optimizing authentication flow, eliminating unnecessary email verification steps and integrating essential platform links, resulting in 35% faster signups
              </li>
              <li>
                Architected and implemented a comprehensive disputes flow, transforming the existing process by: - Developing a structured workflow with improved reliability and customer support - Creating detailed audit logs for enhanced transparency - Establishing clear documentation for investor insights - Streamlining compliance and troubleshooting processes
              </li>
              <li>
                Developed critical self-service features to enhance customer experience, including hardship enrollment, payment date modifications, and credit limit increases
              </li>
            </ul>
          </div>
          
          {/* Add other experience items following the same pattern */}
          {/* You can copy the structure above for each work experience */}
        </div>
        
        <h2 className="text-xl font-medium text-center my-12">
          Education
        </h2>
        
        {/* Education items with the same styling as work experience */}
        <div className="space-y-12">
          <div className="bg-white dark:bg-dark-card shadow-sm rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-lg font-medium">Master of Science in Information Systems</h3>
                <p className="font-medium">Santa Clara University, Leavey School of Business</p>
              </div>
              <p className="text-sm mt-2 md:mt-0 md:text-right">
                2021 • Santa Clara, CA
              </p>
            </div>
            
            <ul className="space-y-4 text-sm leading-relaxed ml-5 list-disc">
              <li>
                Relevant Coursework: Data Science with Python, Machine Learning, NLP, Database Management, Cloud Computing, Info. Systems Analysis & Design, Object Oriented Analysis -Java, Database Analysis & Modeling, Data Warehousing, Digital Strategies & Policies, Software Project Management, Women in Leadership
              </li>
              <li>
                Activities: Grace Hopper Celebration, Rewriting the Code, Women In Product, Product Buds
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className={`text-sm ${textColorSecondary}`}>
            You can also view my experience on <a 
              href="https://www.linkedin.com/in/lisapatel98" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Experience;
