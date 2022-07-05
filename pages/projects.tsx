import { Card } from "../components";

const PROJECTS = [
  {
    title: "E-Commerce Customer Segmentation & Behavior Analysis",
    link: "https://github.com/LISAPATEL98/EcommerceCustomers",
    body: [
      "Predicted product recommendations depending on past 259k customer transactions; used K-means Clustering to aggregate frequently bought items together, which lead to a strategy for promoting market basket sales improving revenue on retail",
      "Performed RFM Analysis, to segment customers based on value from past transactions and Trend analysis to find purchase patterns over time",
    ],
  },

  {
    title: "ARTICULATE : Article Summarizer",
    link: "https://github.com/LISAPATEL98/Articlesummarizer",
    body: [
      "Web-Scraped data using Selenium to fetch articles from NY Times, summarized article lengths using techniques like TextRank, Similarity matrix",
      "Classified the comments on articles to positive/negative and truthful/deceptive using Sentimental analysis and Text analysis",
      "Predicted NYT’s best pick comment using Logistic regression with 72% ROC; built an automatic comment generator using Tensorflow and LSTM",
    ],
  },

  {
    title: "Moderation System for Hate Speech Detection",
    link: "https://github.com/LISAPATEL98/HateSpeech-moderationSystem",
    body: [
      "Designed an interface that identifies abusive content which alerts users, and provides a timer to rethink before publishing hate content using BERT",
      "Performed data cleaning using Lemmatization, Stemming and did feature extraction with techniques like TF-IDF vectors, Lime Text Explainer",
      "Used oversampling- SMOTE and RandomOversampling on the imbalance data to achieve the accuracy of 95%",
    ],
  },

  {
    title: "A/B test on Mobile Game Players",
    link: "https://github.com/LISAPATEL98/AB_testing-",
    body: [
      "Conducted A/B test on mobile game data with ~90k players to determine the intensity of obstacles in-game level to increase player retention",
      "Implemented the hypothesis testing using statistical techniques like Chi-Square test, degree of freedom, p-value",
    ],
  },
  {
    title: "HR Employee Management",
    link: "",
    body: [
      "Applied HR Analytics using ML on IBM’s dataset, created a strategic plan for employee churn model & retention rate",
      "Reduced attrition rate by determining KPI’s & flagging employees at risk; Logistic regression, SVM with 82% accuracy",
    ],
  },

  {
    title: "LinkedIn Messages & Connection Analysis",
    link: "https://github.com/LISAPATEL98/LinkdeIn-Analysis",
    body: [
      "Performed analysis on my current LinkedIn Messages and connections for detecting language & to determine the tone of msgs I've been getting.",
    ],
  },
];

const TABLEAU_PROJECTS = [
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

const Projects = () => {
  return (
    <>
      <h2 className="container text-2xl text-center font-bold my-6">
        Data Visualization Projects
      </h2>
      <h3 className="container text-xl text-center font-bold my-4">
        You can find all the vizzes in my{" "}
        <a
          href="https://public.tableau.com/app/profile/lisa7954#!/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-yellow-400"
        >
          Tableau Gallery.
        </a>
      </h3>

      <div className="container flex flex-wrap justify-center">
        {TABLEAU_PROJECTS.map((p) => (
          <Card key={p.title} className="m-4 w-80 !p-0">
            <img src={p.img} alt={p.title} className="rounded object-contain" />
            <h3 className="text-xl font-bold text-center my-6 mx-4">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-700"
                >
                  {p.title}
                </a>
              ) : (
                <>{p.title}</>
              )}
            </h3>
          </Card>
        ))}
      </div>

      <h2 className="container text-2xl text-center font-bold my-6">
        Data Science Projects
      </h2>

      <div className="container flex flex-wrap justify-center">
        {PROJECTS.map((p) => (
          <Card key={p.title} className="m-4 w-80">
            <h3 className="text-xl font-bold">
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-700"
                >
                  {p.title}
                </a>
              ) : (
                <>{p.title}</>
              )}
            </h3>
            <ul className="list-disc ml-4 mt-2">
              {p.body.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <h2 className="container text-2xl text-center font-bold my-6">
        Case Studies
      </h2>

      <div className="container flex flex-wrap justify-center">
        <Card className="m-4 w-80">
          <h3 className="text-xl font-bold">
            <a
              href="https://github.com/LISAPATEL98/CaseStudies-/blob/main/Virtualization%20In%20Retail%20Compaines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-700"
            >
              Virtualization adoption in Retail Sector | Digital Strategy
              Consulting
            </a>
          </h3>
          <p>
            <span className="font-bold">Scenario</span>: The CIO of
            Abacus(hypothetical online retail store) has decided that the
            company will adopt common virtualization across all of its data
            centers. The CIO’s main objectives for virtualizing are:
          </p>
          <ul className="list-disc ml-4">
            <li>To reduce overall capital equipment and operating expenses</li>
            <li>To improve IT responsiveness to its internal customers</li>
          </ul>
          <p>
            <span className="font-bold">Product Studied</span>: VMware vSphere &
            Microsoft Hyper-v
          </p>
          <p>Steps done to accomplish the Objective:</p>
          <ul className="list-disc ml-4">
            <li>
              Identified challenges faced in the current state of IT
              Infrastructure for a hypothetical retail company called Abacus
              Inc.
            </li>
            <li>
              Evaluated Microsoft & VMware cloud services based on their
              ecosystem, feature comparison, cost structure, ROI, TCO, and risk
              factors
            </li>
            <li>
              Delivered virtualization implementation strategy, business
              benefits, and future state of the company
            </li>
          </ul>
        </Card>

        <Card className="m-4 w-80">
          <h3 className="text-xl font-bold">
            <a
              href="https://github.com/LISAPATEL98/CaseStudies-/blob/main/eBay'%20digital%20transformation%20-%20Helpbot.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-700"
            >
              Ebay&apos;s Digital Strategy & Transformation: HelpBot | Digital
              Strategy Consulting
            </a>
          </h3>
          <p>
            Analyzed the current user experience of eBay for understanding user
            pain points. Did User Surveys, and Affinity Mapping to come up with
            MVP features that would keep eBay updated in terms of the
            offer&apos;s in comparison to e-commerce like Amazon
          </p>
          <ul className="list-disc ml-4">
            <li>
              Formulated digital capabilities leveraging AI and Automation that
              helped drive the strategy and deliver value (Improved CX,
              Efficiency, Retention, and Loyalty, etc.)
            </li>
            <li>
              Performed capability assessment of current State (AI & automation
              capabilities), GAP Analysis, SWOT Analysis
            </li>
            <li>
              Designed Future State Design – customer journey maps, process map,
              digital systems/architecture, roadmap
            </li>
            <li>
              Laid out risks involved in undertaking this initiative and
              recommended mitigation of these risk
            </li>
          </ul>
          <p>
            <span className="font-bold">Business Goals</span>:
          </p>
          <ul className="list-disc ml-4">
            <li>Ease in Customer Service</li>
            <li>Customer Retention</li>
          </ul>
        </Card>

        <Card className="m-4 w-80">
          <h3 className="text-xl font-bold">
            <a
              href="https://github.com/LISAPATEL98/BioTechCompaniesComparision"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-700"
            >
              BioTech Companies Comparison | Finance Analysis
            </a>
          </h3>
          <p>BioGen Vs Bristol Myers Squibb</p>
          <p>
            Conducted a comparative study by performing quantitative and
            qualitative analysis of both companies. Here, the two companies are
            chosen from the Pharmaceutical market segment. This analysis was
            conducted on the following elements:
          </p>

          <ul className="list-disc ml-4">
            <li>Key competitors & key drivers/challenges</li>
            <li>
              Most recent Earnings call, latest SEC filing & executive
              compensation structure
            </li>
            <li>Horizontal & Vertical Analysis</li>
            <li>Key ratios that are formative for each company</li>
          </ul>
          <p>
            Based on the analysis, each company was valued for investors. Used
            data visualization tools for in-depth analysis.
          </p>
        </Card>

        <Card className="m-4 w-80">
          <h3 className="text-xl font-bold">
            Hassle-Free Travel Planner | New Product Development
          </h3>
          <ul className="list-disc ml-4">
            <li>
              Creating scheduler syncing calendars for group travels, providing
              plan recommendations upon the user selections
            </li>
            <li>
              Conducting user interviews, journey mapping & affinity mapping;
              deducing problems from user pain points
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
};

export default Projects;
