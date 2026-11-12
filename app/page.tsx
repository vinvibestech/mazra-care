import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CompleteSolutions from "@/components/home/CompleteSolutions";
import FromIdeaToHarvest from "@/components/home/FromIdeaToHarvest";
import GrowWhereYouAre from "@/components/home/GrowWhereYouAre";
import Hero from "@/components/home/Hero";
import OurProjects from "@/components/home/OurProjects";
import SmartSolutions from "@/components/home/SmartSolutions";
import SustainabilityBenefits from "@/components/home/SustainabilityBenefits";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mazra Care – Smart Farming Solutions in UAE",
  description:
    "Discover smart farming solutions in the UAE with Mazra Care. Explore hydroponics, aquaponics, greenhouse technology and sustainable agriculture systems.",
  keywords: [
    "Mazra Care",
    "smart farming UAE",
    "sustainable agriculture UAE",
    "hydroponics UAE",
    "aquaponics UAE",
    "greenhouse farming",
    "modern agriculture solutions",
    "precision farming",
  ],
};

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