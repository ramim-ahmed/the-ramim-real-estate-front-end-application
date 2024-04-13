import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import OurService from "@/components/OurService";
import Statistic from "@/components/Statistic";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <AboutUs />
      <WhyChoose />
      <Statistic />
      <OurService />
      <Testimonials />
    </div>
  );
}
