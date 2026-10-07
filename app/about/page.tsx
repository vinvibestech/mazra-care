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