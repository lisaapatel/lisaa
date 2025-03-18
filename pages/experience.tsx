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
      "Streamlined Authentication Flow: Redesigned customer onboarding by optimizing authentication flow, eliminating redundant verification steps and strategically integrating platform links, resulting in 35% faster signups and improved conversion rates",
      "Disputes and Refunds Flow: Created the disputes resolution process by architecting and implementing a comprehensive workflow system featuring real-time audit logs, structured documentation for investor transparency, and streamlined compliance protocols, reducing resolution time by X%",
      "Self-Service Features: Engineered mission-critical self-service features including hardship program enrollment, payment due date modifications, auto-pay enrollment capabilities, and an interactive interest savings calculator, increasing customer satisfaction scores by X% and reducing support ticket volume by X%",
      "Cross-Sell Implementation: Designed and implemented a strategic cross-sell flow that created a new revenue stream and increased products-per-customer metrics company-wide by establishing sophisticated user qualification criteria and directing users to tailored product solutions, resulting in a X% increase in cross-product adoption",
      "Fraud Detection: Partnered with data science team to implement risk-based fraud detection rules, creating an intelligent system that routes suspicious transactions for manual review while maintaining seamless experiences for verified users, reducing fraud losses by X% while preserving conversion rates",
      "Managed executive reporting, providing critical insights into product performance and strategic opportunities that informed leadership decision-making"
    ],
  },
  {
    company: "Upgrade, Inc.",
    title: "APM/Product Analyst",
    timePeriod: "Aug 2022 - Jan 2024",
    location: "San Francisco, CA",
    description: [
      "Led cross-functional collaboration with engineering and product teams to streamline customer experience through feature development, vendor selection, and detailed product specifications, resulting in X% improvement in user satisfaction metrics",
      "Spearheaded comprehensive analytics for Home Improvement Loans portfolio by defining key performance indicators, developing data models, and implementing automated reporting systems that provided actionable insights, improving product health monitoring and driving a X% enhancement in user experience metrics"
    ],
  },
  {
    company: "Blitz App, Inc.",
    title: "Product Data Analyst",
    timePeriod: "Sept 2021 - July 2022",
    location: "San Francisco, CA",
    description: [
      "Cohort Analysis: Performed acquisition and behavioral cohort analysis, creating interactive dashboards to identify early retention issues and user churn trends, enabling proactive intervention strategies that improved retention by X%",
      "Reporting Pipelines: Built comprehensive reporting pipelines tracking user growth insights and trends, simplifying company performance monitoring and providing executives with actionable metrics that informed strategic decision-making",
      "Subscription Analytics: Automated reporting of Advanced subscription metrics including MRR, LTV, CAC, and churn rates, empowering the product team to optimize subscription profitability and increase customer lifetime value by X%",
      "Data-Driven Product Strategy: Partnered with product teams to drive feature development through comparative analysis of pro vs non-pro user game engagement metrics, resulting in targeted enhancements that increased pro-tier conversions by X%",
      "Ad Revenue Optimization: Designed KPIs correlating ad revenue to user journey stages, delivering critical insights on ad touchpoints and placements that increased marketing campaign effectiveness by X% and optimized revenue per user",
      "Business Intelligence Dashboards: Designed intuitive interfaces providing real-time visualization of key business metrics and revenue streams, enabling stakeholders to monitor product health and make data-informed decisions that increased profitability by X%",
      "Data Processing: Transformed and processed raw data for historic back-fills while implementing automated daily event tracking, ensuring data integrity and providing consistent analytics for longitudinal analysis",
      "Cross-Functional Technical Collaboration: Collaborated with cross-functional partner teams across diverse technology stacks including SQL, Databricks, Tableau, Spark, Snowflake, and Python to solve complex data challenges and implement enterprise-wide analytics solutions"
    ],
  },
  {
    company: "Okta, Inc.",
    title: "Data Science Analyst, Intern",
    timePeriod: "Mar 2021 - Sept 2021",
    location: "San Francisco, CA",
    description: [
      "Generated comprehensive reports and dashboards analyzing user search behaviors and product engagement patterns using Coveo Machine Learning, Google Analytics, and Salesforce, identifying critical content gaps and delivering data-backed recommendations that shaped product strategy and new content development initiatives",
      "Implemented efficient pipelines for data cleaning and manipulation using Python and SQL, enabling high-value ad-hoc analyses that uncovered actionable business insights and supported data-driven decision making across departments",
      "Supported successful feature launches and product testing cycles by developing real-time Tableau analytics dashboards that captured internal and customer interactions, providing immediate visibility into adoption metrics and enabling rapid optimization of new capabilities"
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

        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="bg-white dark:bg-dark-card shadow-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">{experience.title}</h3>
                  <a 
                    href={`https://${experience.company.toLowerCase().replace(' ', '')}.com`} 
                    className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-medium"
                  >
                    {experience.company}
                  </a>
                </div>
                <p className="text-sm mt-2 md:mt-0 md:text-right">
                  {experience.timePeriod} • {experience.location}
                </p>
              </div>

              <ul className="space-y-4 text-sm leading-relaxed ml-5 list-disc">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-medium text-center my-12">
          Education
        </h2>

        <div className="space-y-12">
          {EDUCATION.map((education, index) => (
            <div key={index} className="bg-white dark:bg-dark-card shadow-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">{education.degree}</h3>
                  <p className="font-medium">{education.institution}</p>
                </div>
                <p className="text-sm mt-2 md:mt-0 md:text-right">
                  {education.timePeriod} • {education.location}
                </p>
              </div>

              <ul className="space-y-4 text-sm leading-relaxed ml-5 list-disc">
                {education.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Experience;