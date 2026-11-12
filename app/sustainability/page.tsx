import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CommunityVision from "@/components/sustainability/CommunityVision";
import OurImpact from "@/components/sustainability/OurImpact";
import SustainabilityBeyondFarming from "@/components/sustainability/SustainabilityBeyondFarming";
import SustainabilityHero from "@/components/sustainability/SustainabilityHero";
import SustainabilityOurApproach from "@/components/sustainability/SustainabilityOurApproach";
import SustainableFarming from "@/components/sustainability/SustainableFarming";
import TechnologyForSustainability from "@/components/sustainability/TechnologyForSustainability";
import WhatWeFocusOn from "@/components/sustainability/WhatWeFocusOn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainable Agriculture in UAE – Mazra Care",
  description:
    "Discover Mazra Care's approach to sustainable agriculture through water-efficient farming, renewable energy integration and responsible resource management.",
  keywords: [
    "sustainable agriculture UAE",
    "water efficient farming",
    "eco friendly agriculture",
    "renewable energy farming",
    "sustainable greenhouse",
    "resource efficient agriculture",
    "Mazra Care sustainability",
  ],
};



export default function page() {
    return (
        <>
            <Navbar />
            <SustainabilityHero />
            <SustainabilityOurApproach/>
            <WhatWeFocusOn/>
            <SustainableFarming/>
            <TechnologyForSustainability/>
            <SustainabilityBeyondFarming/>
            <OurImpact/>
            <CommunityVision/>
            <Footer />
        </>
    );
}