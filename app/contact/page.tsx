import FinalCTA from "@/components/common/FinalCTA";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import ContactInformation from "@/components/contact/ContactInformation";
import LetsTalk from "@/components/contact/LetsTalk";
import ProjectEnquiry from "@/components/contact/ProjectEnquiry";
import StartYourFarmingJourney from "@/components/contact/StartYourFarmingJourney";
import VisitUs from "@/components/contact/VisitUs";
import WhatCanYouEnquireAbout from "@/components/contact/WhatCanYouEnquireAbout";
import WhatHappensAfterContact from "@/components/contact/WhatHappensAfterContact";
import WhoCanContactMazraCare from "@/components/contact/WhoCanContactMazraCare";
import WhyConnectWithMazraCare from "@/components/contact/WhyConnectWithMazraCare";



export default function page() {
    return (
        <>
            <Navbar />
            <ContactHero />
            <StartYourFarmingJourney/>
            <LetsTalk/>
            <ContactInformation/>
            <VisitUs/>
            <ProjectEnquiry/>
            <WhoCanContactMazraCare/>
            <WhatCanYouEnquireAbout/>
            <WhatHappensAfterContact/>
            <WhyConnectWithMazraCare/>
            <FinalCTA/>
            <Footer />
        </>
    );
}

