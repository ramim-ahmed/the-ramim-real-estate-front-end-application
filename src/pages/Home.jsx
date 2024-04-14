import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import OurService from "@/components/OurService";
import Properties from "@/components/Properties";
import Statistic from "@/components/Statistic";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>THE RAMIM-REAL ESTATE | Home</title>
      </Helmet>
      <Banner />
      <AboutUs />
      <WhyChoose />
      <Properties data={data} />
      <Statistic />
      <OurService />
      <Testimonials />
    </div>
  );
}
