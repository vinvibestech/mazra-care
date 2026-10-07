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