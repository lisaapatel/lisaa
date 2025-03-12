import type { NextPage } from "next";
import { Section } from "../components";
import { useTheme } from "../contexts/ThemeContext";

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
    title: "Analyst, Intern",
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
    institution: "Santa Clara University",
    degree: "Master of Science, Information Systems",
    timePeriod: "2019 - 2021",
    location: "Santa Clara, CA",
    description: [
      "GPA: 3.9/4.0",
      "Teaching Assistant for Big Data Analysis",
      "Student Mentor for MSIS Incoming Students",
    ],
  },
  {
    institution: "Gujarat Technological University",
    degree: "Bachelor of Engineering, Computer Engineering",
    timePeriod: "2015 - 2019",
    location: "Gujarat, India",
    description: ["GPA: 9.0/10.0"],
  },
];

const Experience: NextPage = () => {
  const { theme } = useTheme();
  
  // Consistent color variables
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textColorSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  
  return (
    <div className={`${bgColor} ${textColor} transition-colors duration-300`}>
      <Section type="light">
        <div className="container max-w-5xl mx-auto">
          <h1 className="page-title">Experience</h1>
          
          <h2 className="section-subtitle text-left mb-8">Work Experience</h2>
          <div className="space-y-10 mb-16">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className={`${cardBg} rounded-xl shadow-soft p-6 transition-colors duration-300`}>
                <div className="mb-4">
                  <h3 className="card-title">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="font-medium text-accent-light dark:text-accent-dark">{exp.company}</p>
                    <p className={`${textColorSecondary} small-text mt-1 sm:mt-0`}>{exp.timePeriod} • {exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, j) => (
                    <li key={j} className={`${textColorSecondary} body-text`}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Education</h2>
          <div className="space-y-10">
            {EDUCATION.map((edu, i) => (
              <div key={i} className={`${cardBg} rounded-xl shadow-soft p-6 transition-colors duration-300`}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <p className="font-medium text-accent-light dark:text-accent-dark">{edu.institution}</p>
                    <p className={`${textColorSecondary} text-sm mt-1 sm:mt-0`}>{edu.timePeriod} • {edu.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {edu.description.map((item, j) => (
                    <li key={j} className={`${textColorSecondary}`}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Experience;
