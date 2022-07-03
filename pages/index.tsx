import type { NextPage } from "next";
import { Layout, Card, Section, TextBlock } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Section type="light">
        <TextBlock
          header="Hey 👋, I'm Lisa"
          subtext="Full Stack Developer, React Groupie and GraphQL Enthusiast"
        />
      </Section>
      <div className="container">
        <h2 className="mt-10 text-xl font-bold">Projects</h2>
        <Section type="dark" className="grid-cols-cards mt-5 grid gap-10">
          {/* {projects?.map((project) => (
            <Card key={project._id}>
              <div className="grid min-h-[300px] grid-cols-2 items-center gap-4">
                {project?.featuredImage?.asset?.url && (
                  <img
                    src={project.featuredImage.asset?.url}
                    alt={project.featuredImage.alt || ""}
                  />
                )}
                <span>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p>{project.featuredDescription}</p>
                </span>
              </div>
              <Link href={`/project/${project.slug?.current}`}>
                <a>View Details</a>
              </Link>
            </Card>
          ))} */}
        </Section>
      </div>
    </>
  );
};

export default Home;
