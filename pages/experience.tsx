import type { NextPage } from "next";

const EXPERIENCES = [
  {
    company: "Blitz App, Inc",
    title: "Product Data Analyst",
    location: "San Francisco, CA",
    timeRange: "Sept 2021 - Present",
    body: [
      "Created BI reports enabling transparent and fast insights into business metrics, including operational efficiency, financial health and bug reporting.",
      "Built data dashboards that measure company performance + player resonance",
      "Guided future product strategy by discovering insights into player behaviour",
      "Improving operational excellence by learning insights into product quality",
      "Informing business strategy with insights about competitors and the market landscape",
    ],
  },
  {
    company: "Okta, Inc",
    title: "Analyst, Intern",
    location: "San Francisco, CA",
    timeRange: "Mar 2021 - Sept 2021",
    body: [
      "Generating reports/dashboards on user search behaviors, product engagement insights to identify content gaps using Coveo Machine Learning, Google Analytics, Salesforce and providing recommendations to product strategy based on research for new content development",
      "Implementing pipelines for data cleaning/manipulation using Python, SQL for ad-hoc analysis; Supporting launch of new product features and product testing by providing real-time analytics using Tableau based on internal/customer interactions",
    ],
  },
  {
    company: "Gilead Sciences, Inc.",
    title: "Data Scientist, Intern",
    location: "Foster City, CA",
    timeRange: "Apr 2020 - Dec 2020",
    body: [
      "Analyzed over 2 million patient health claims, worked with data engineers to develop ETL workflows using Data Factory in Ms Azure",
      "Wrote and optimized SQL queries to perform data extraction, developed data processing pipelines using python (Numpy, Pandas) and built ML models with 78% accuracy to identify target patients likely to switch on the new drug and predict quality target of drug market",
      "Created effective data visualization dashboards used to model data with Tableau and Matplotlib and provided business insights to the Sales team for investing in the promotion of the product",
    ],
  },
  {
    company: "BioMarin Pharmaceutical, Inc",
    title: "Data Science Analyst, Intern",
    location: "San Rafael, CA",
    timeRange: "Jun 2020 - Sept 2020",
    body: [
      "Owned cleaning and processing of data with SQL, Excel, and Python (Pandas, NumPy) from multiple data sources to a data warehouse",
      "Conceptualized and implemented PowerBI Dashboards for leadership team utilizing data to advise on strategic decisions on key business metrics like Promotion, Workforce Diversity, Employee Engagement, Office Capacity Planning, and Attrition",
      "Independently designed KPIs on operational metrics in Python, PowerBI to analyze the gender and/or ethnicity pay gap",
    ],
  },
];

const Experience: NextPage = () => {
  return (
    <div className="container">
      {EXPERIENCES.map((e) => (
        <div className="mb-6 border-b pb-6" key={e.company}>
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-xl font-bold flex flex-col">
              <span>{e.title}</span>
              <span>{e.company}</span>
            </h3>
            <h3 className="text-lg flex flex-col items-end">
              <span>{e.timeRange}</span>
              <span>{e.location}</span>
            </h3>
          </div>
          <ul className="list-disc ml-4">
            {e.body.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
