import AgentItem from "@/components/AgentItem";
import { Helmet } from "react-helmet-async";
import agentImageOne from "../assets/a1.jpg";
import agentImageTwo from "../assets/a2.jpg";
import agentImageThree from "../assets/a3.jpg";
import agentImageFour from "../assets/a4.jpg";
export default function OurAgents() {
  return (
    <>
      <Helmet>
        <title>Agents</title>
      </Helmet>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="max-w-[1120px] mx-auto py-10 px-3"
      >
        <div className="text-center bg-primary text-white p-6 rounded-md">
          <h2 className="text-xl font-medium mb-3">Agents Nearby</h2>
          <p>
            Conenct with a qualified and skill real estate agent to <br />
            Help you achive your property goals
          </p>
        </div>
        <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <AgentItem name="Stive Smith" img={agentImageOne} />
          <AgentItem name="Liam Dawson" img={agentImageTwo} />
          <AgentItem name="Joe Root" img={agentImageThree} />
          <AgentItem name="Jason Holder" img={agentImageFour} />
        </div>
      </div>
    </>
  );
}
