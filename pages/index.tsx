import type { NextPage } from "next";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Section, TextBlock } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Section type="light">
        <div className="container">
          <TextBlock
            header="Hey 👋, I'm Lisa"
            subtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
        </div>
      </Section>
      <div className="container mt-4">
        <Section
          type="dark"
          className="sm:grid sm:grid-cols-3 sm:gap-14 sm:h-[500px] items-center"
        >
          <div
            style={{
              backgroundImage: `url('${process.env.BASE_PATH}/lisa_patel.jpeg')`,
            }}
            className="bg-no-repeat bg-contain h-full min-h-[300px] mb-6 sm:mb-0 sm:min-h-full"
          />
          <div className="col-span-2">
            <h2 className="mb-5 text-2xl font-bold">
              Welcome to my corner on the internet.
            </h2>
            <h4 className="text-lg font-bold">Nice to e-meet you!</h4>
            <p className="my-4">
              Currently working in the gaming world at a start-up called Blitz.
              I help different teams in making impactful data-driven decisions.
              My passion revolves around three core tenets: strategy, analytics,
              and innovation. I am an avid learner who enjoys exciting
              challenges. I presume it is to accept what life throws at me and
              mould it in the best possible way while enjoying small wins on the
              way.
            </p>
            <p className="my-4">
              You can also catch me binge-watching on Netflix, daydreaming,
              baking, trying out new recipes or blogging about my travels and
              experiences. You can find my blog here.
            </p>
            <p className="my-4">
              Besides this, I am also interested in smart mobility, and
              sustainability!
            </p>
          </div>
        </Section>
      </div>

      <div className="container">
        <Section type="dark">
          <h4 className="text-lg font-bold mb-4">
            A peek into my life right now
          </h4>
          <ul>
            <li>
              <strong>Life goal:</strong> Enjoy all of nature&apos;s beautiful
              experiences
            </li>
            <li>
              <strong>Learning:</strong> Yoga
            </li>
            <li>
              <strong>Reading:</strong>{" "}
            </li>
            <li>
              <strong>Listening to:</strong> Below the Line BY James Beshera
            </li>
            <li>
              <strong>Watching:</strong>
            </li>
            <li>
              <strong>Celebrating:</strong> & all the little joys in Life!
            </li>
          </ul>
          <p>Thanks for stopping by!</p>
        </Section>
      </div>

      <div className="container">
        <h2 className="mt-10 text-center text-xl font-bold">Contact Me</h2>
        <Section type="dark">
          <p className="text-center">
            I enjoy meeting new people and collaborating or even just talking
            over some good coffee, so please feel free to reach out!
          </p>
          <div className="flex justify-center items-center mt-8">
            <MdEmail size={50} className="mr-5" />
            <FaGithub size={50} className="mr-5" />
            <FaLinkedin size={50} />
          </div>
        </Section>
      </div>
    </>
  );
};

export default Home;
