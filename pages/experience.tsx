import type { NextPage } from "next";

const Experience: NextPage = () => {
  return (
    <div className="container">
      <div className="mb-6">
        <h3 className="text-xl font-bold grid grid-cols-4 my-4">
          <span>Product Data Analyst</span>
          <span>Blitz App Inc.</span>
          <span>San Francisco, CA</span>
          <span>September 2021 - Present</span>
        </h3>
        <ul className="list-disc">
          <li>
            Created BI reports enabling transparent and fast insights into
            business metrics, including operational efficiency, financial health
            and bug reporting.{" "}
          </li>
          <li>
            Built data dashboards that measure company performance + player
            resonance
          </li>
          <li>
            Guided future product strategy by discovering insights into player
            behaviour
          </li>
          <li>
            Improving operational excellence by learning insights into product
            quality
          </li>
          <li>
            Informing business strategy with insights about competitors and the
            market landscape
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold grid grid-cols-4 my-4">
          <span>Analyst, Intern</span>
          <span>Okta, Inc.</span>
          <span>San Francisco, CA</span>
          <span>March 2021 - Present</span>
        </h3>
        <ul className="list-disc">
          <li>
            Generating reports/dashboards on user search behaviours, and product
            engagement insights to identify content gaps using Coveo Machine
            Learning, Google Analytics, Salesforce and providing recommendations
            to product strategy based on research for new content development
          </li>
          <li>
            Implementing pipelines for data cleaning/manipulation using Python,
            SQL for ad-hoc analysis; Supporting the launch of new product
            features and product testing by providing real-time analytics using
            Tableau based on internal/customer interactions
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold grid grid-cols-4 my-4">
          <span>Data Scientist, Intern</span>
          <span>Gilead Sciences, Inc.</span>
          <span>Foster City, CA</span>
          <span>April 2020 - December 2020</span>
        </h3>
        <ul className="list-disc">
          <li>
            Analyzed over 2 million patient health claims, worked with data
            engineers to develop ETL workflows using Data Factory in Ms Azure
          </li>
          <li>
            Wrote and optimized SQL queries to perform data extraction,
            developed data processing pipelines using python (Numpy, Pandas) and
            built ML models with 78% accuracy to identify target patients likely
            to switch on the new drug and predict the quality target of the drug
            market
          </li>
          <li>
            Created effective data visualization dashboards used to model data
            with Tableau and Matplotlib and provided business insights to the
            Sales team for investing in the promotion of the product
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold my-4 grid grid-cols-4">
          <span>Data Science Analyst, Intern</span>
          <span>BioMarin Pharmaceutical, Inc.</span>
          <span>San Rafael, CA</span>
          <span>June 2020 - September 2020</span>
        </h3>
        <li>
          Owned cleaning and processing of data with SQL, Excel, and Python
          (Pandas, NumPy) from multiple data sources to a data warehouse
        </li>
        <li>
          Conceptualized and implemented PowerBI Dashboards for leadership team
          utilizing data to advise on strategic decisions on key business
          metrics like Promotion, Workforce Diversity, Employee Engagement,
          Office Capacity Planning, and Attrition
        </li>
        <li>
          Independently designed KPIs on operational metrics in Python, PowerBI
          to analyze the gender and/or ethnicity pay gap
        </li>
      </div>
    </div>
  );
};

export default Experience;
