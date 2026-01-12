import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { useTheme } from "../contexts/ThemeContext";
import Head from 'next/head';

const EXPERIENCES = [
  // Upgrade PM2
  {
    company: "Upgrade, Inc.",
    url: "https://www.upgrade.com",
    title: "Product Manager 2",
    timePeriod: "June 2025 - Present",
    location: "San Francisco, CA",
    description: [
      "Cross-Sell Strategy & Execution: Co-led a company-wide cross-sell initiative to convert existing Personal Loan and BNPL customers into Home Improvement Loans by defining customer qualification criteria across credit, behavior, and risk signals, partnering with data science, marketing, and leadership to deliver targeted offers across in-app and lifecycle channels, driving a material increase in products per customer and revenue per user",
      "Monetization & Partner Enablement: Designed cross-sell flows that route qualified customers to third-party partners while maintaining compliance and risk thresholds, unlocking a new revenue stream and establishing a scalable framework for future product expansion",
      "OCR-Driven Application Optimization: Led integration of OCR into the loan application funnel to reduce borrower friction and manual entry errors by extracting identity data from government-issued IDs, decreasing application completion time and downstream verification steps while improving data accuracy",
      "Channel Expansion – Apply by Phone: Owned development of an apply-by-phone experience to expand market reach for less tech-savvy customers, aligning product strategy with competitive landscape and operational constraints to support assisted application flows",
      "Bidirectional SMS Decisioning: Delivered a secure bidirectional SMS flow enabling customers to approve or decline offers directly via text, reducing funnel friction and abandonment while enforcing fraud checks and eligibility controls at each step",
      "Roadmap & Executive Collaboration: Influenced shared team roadmap planning by prioritizing high-impact initiatives across growth, risk, and user experience, presenting progress and tradeoffs to VP-level stakeholders and influencing prioritization through end-to-end ownership of initiatives"
    ],
    
  },
  // Upgrade PM1
  {
    company: "Upgrade, Inc.",
    url: "https://www.upgrade.com",
    title: "Product Manager 1",
    timePeriod: "Jan 2024 - June 2025",
    location: "San Francisco, CA",
    description: [
      "Streamlined Authentication Flow: Redesigned the customer onboarding experience by simplifying authentication flows, eliminating redundant verification steps, and integrating platform links, resulting in 35% faster signups and improved funnel conversion",
      "Disputes and Refunds Platform: Owned the design and delivery of a scalable disputes and refunds resolution workflow, introducing real-time audit logs, structured documentation, and compliance-ready processes that materially reduced resolution time and improved investor transparency",
      "Customer Self-Service Capabilities: Delivered high-impact self-service features including hardship program enrollment, payment due date changes, auto-pay enrollment, and an interactive interest savings calculator, improving customer satisfaction while significantly reducing support ticket volume",
      "Risk-Based Fraud Detection: Partnered with data science to implement risk-based fraud detection rules that intelligently routed suspicious transactions for manual review, reducing fraud losses while maintaining a frictionless experience for trusted customers",
      "Cross-Functional Product Execution: Drove alignment across engineering, design, legal, compliance, operations, and sales to execute product initiatives, providing clear stakeholder communication and executive-ready updates that accelerated decision-making and delivery"
    ],
  },
  // Upgrade APM
  {
    company: "Upgrade, Inc.",
    url: "https://www.upgrade.com",
    title: "APM/Product Analyst",
    timePeriod: "Aug 2022 - Jan 2024",
    location: "San Francisco, CA",
    description: [
      "Led cross-functional collaboration with engineering and product teams to streamline customer experience through feature development, vendor selection, and detailed product specifications, resulting in measurable improvements in user satisfaction metrics",
      "Spearheaded comprehensive analytics for Home Improvement Loans portfolio by defining key performance indicators, developing data models, and implementing automated reporting systems that provided actionable insights, improving product health monitoring and driving better user experience"
    ],
  },
  // Blitz App
  {
    company: "Blitz App, Inc.",
    url: "#",
    title: "Product Data Analyst",
    timePeriod: "Sept 2021 - July 2022",
    location: "San Francisco, CA",
    description: [
      "Cohort Analysis: Analyzed acquisition and behavioral cohorts to identify early retention risks and churn drivers, enabling targeted interventions that improved user retention",
      "Subscription Analytics: Automated reporting for subscription metrics including MRR, LTV, CAC, and churn, empowering the product team to optimize pricing and increase customer lifetime value",
      "Data-Driven Product Strategy: Partnered with product teams to compare pro vs non-pro engagement patterns, driving feature improvements that increased pro-tier conversion",
      "Ad Revenue Optimization: Defined KPIs linking ad revenue to user journey stages, delivering insights that improved ad placement effectiveness and revenue per user",
      "Executive Reporting & Dashboards: Built executive-facing dashboards that provided real-time visibility into growth and revenue trends, supporting faster and more informed decision-making",
      "Cross-Functional Analytics Collaboration: Worked across product, engineering, and data teams using SQL, Python, and BI tools to deliver scalable analytics solutions"
    ],
  },
  // Okta
  {
    company: "Okta, Inc.",
    url: "#",
    title: "Data Science Analyst, Intern",
    timePeriod: "Mar 2021 - Sept 2021",
    location: "San Francisco, CA",
    description: [
      "Generated comprehensive reports and dashboards analyzing user search behaviors and product engagement patterns using machine learning models and product analytics tools, identifying content gaps and shaping product strategy",
      "Implemented efficient pipelines for data cleaning and manipulation using Python and SQL, enabling high-value ad-hoc analyses that uncovered actionable business insights",
      "Supported successful feature launches by developing real-time Tableau analytics dashboards that captured internal and customer interactions, providing visibility into adoption metrics and enabling rapid optimization"
    ],
  },
  // Gilead
  {
    company: "Gilead Sciences, Inc.",
    url: "#",
    title: "Data Scientist, Intern",
    timePeriod: "Apr 2020 - Dec 2020",
    location: "Foster City, CA",
    description: [
      "Collaborated with data engineers to develop ETL workflows in Azure Data Factory to analyze over 2 million patient health claims",
      "Built machine learning models to identify target patients likely to switch to a new drug and predict drug market potential",
      "Created data visualization dashboards with Tableau and Matplotlib providing business insights to the sales team for product promotion strategies"
    ],
  },
  // BioMarin
  {
    company: "BioMarin Pharmaceutical, Inc.",
    url: "#",
    title: "Data Science Analyst, Intern",
    timePeriod: "Jun 2020 - Sept 2020",
    location: "San Rafael, CA",
    description: [
      "Led cleaning and processing of data with SQL and Python from multiple sources to a data warehouse",
      "Implemented PowerBI dashboards to advise leadership on promotions, workforce diversity, employee engagement, office capacity planning, and attrition",
      "Designed KPIs on operational metrics to analyze gender and ethnicity pay gaps"
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

        {/* Upgrade Summary */}
        <div className="mb-12 bg-white dark:bg-dark-card shadow-sm rounded-lg p-6">
          <p className={`text-sm leading-relaxed mb-3 ${textColorSecondary}`}>
            I have spent the last four years at Upgrade, growing from Product Analyst to Product Manager 2,
            driving initiatives across onboarding, cross-sell, fraud, and customer experience in lending and BNPL products.
          </p>
          <p className={`text-sm leading-relaxed ${textColorSecondary}`}>
            Key highlights include leading a company-wide CrossSell initiative, implementing OCR and SMS flows to reduce friction, 
            and scaling customer servicing, disputes, and fraud workflows with auditability and compliance at the core.
          </p>
        </div>

        {/* Full Experiences */}
        <div className="space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="bg-white dark:bg-dark-card shadow-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium">{experience.title}</h3>
                  <a 
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
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

