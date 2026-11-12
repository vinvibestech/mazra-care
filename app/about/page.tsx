import AboutHighlight from "@/components/about/AboutHighlight";
import FarmingSolutions from "@/components/about/FarmingSolutions";
import FourPillars from "@/components/about/FourPillars";
import OurApproach from "@/components/about/OurApproach";
import OurVision from "@/components/about/OurVision";
import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyMazraCare from "@/components/about/WhyMazraCare";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mazra Care – Smart Farming Company in UAE",
  description:
    "Learn about Mazra Care's mission to transform agriculture through smart farming, innovative technologies and sustainable food production solutions in the UAE.",
  keywords: [
    "about Mazra Care",
    "Mazra Care UAE",
    "sustainable farming company",
    "agricultural innovation UAE",
    "smart agriculture",
    "green farming solutions",
  ],
};



export default function page() {
  return (
    <>
      <Navbar />
      <AboutHighlight />
      <WhoWeAre />
      <WhatWeBelieve/>
      <FarmingSolutions/>
      <OurApproach/>
      <OurVision/>
      <FourPillars/>
      <WhyMazraCare/>
      <Footer />
    </>
  );
}