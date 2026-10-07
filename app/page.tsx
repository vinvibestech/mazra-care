import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CompleteSolutions from "@/components/home/CompleteSolutions";
import FromIdeaToHarvest from "@/components/home/FromIdeaToHarvest";
import GrowWhereYouAre from "@/components/home/GrowWhereYouAre";
import Hero from "@/components/home/Hero";
import OurProjects from "@/components/home/OurProjects";
import SmartSolutions from "@/components/home/SmartSolutions";
import SustainabilityBenefits from "@/components/home/SustainabilityBenefits";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SmartSolutions />
      <CompleteSolutions/>
      <FromIdeaToHarvest/>
      <GrowWhereYouAre/>
      <SustainabilityBenefits/>
      <OurProjects/>
      <Footer/> 
    </>
  );
}