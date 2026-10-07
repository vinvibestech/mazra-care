import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AIInAgriculture from "@/components/technology/AIInAgriculture";
import Benefits from "@/components/technology/Benefits";
import HowItWorks from "@/components/technology/HowItWorks";
import IoTConnectedFarming from "@/components/technology/IoTConnectedFarming";
import OurTechnologies from "@/components/technology/OurTechnologies";
import PrecisionTechnology from "@/components/technology/PrecisionTechnology";
import SmartAgriculture from "@/components/technology/SmartAgriculture";
import SmartMonitoring from "@/components/technology/SmartMonitoring";
import TechnologyAcrossFarms from "@/components/technology/TechnologyAcrossFarms";
import TechnologyHighlight from "@/components/technology/TechnologyHighlight";
import TechnologySustainability from "@/components/technology/TechnologySustainability";
import TechnologyVision from "@/components/technology/TechnologyVision";


export default function page() {
    return (
        <>
            <Navbar />
            <TechnologyHighlight />
            <SmartAgriculture/>
            <OurTechnologies/>
            <AIInAgriculture/>
            <IoTConnectedFarming/>
            <SmartMonitoring/>
            <PrecisionTechnology/>
            <HowItWorks/>
            <TechnologySustainability/>
            <Benefits/>
            <TechnologyAcrossFarms/>
            <TechnologyVision/>
            <Footer />
        </>
    );
}