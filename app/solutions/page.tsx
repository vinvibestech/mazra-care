import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Aquaponics from "@/components/solutions/Aquaponics";
import Hydroponics from "@/components/solutions/Hydroponics";
import Industrial from "@/components/solutions/Industrial";
import OurProcess from "@/components/solutions/OurProcess";
import OurSolutions from "@/components/solutions/OurSolutions";
import ResidentialCommercial from "@/components/solutions/ResidentialCommercial";
import SmartGreenhouses from "@/components/solutions/SmartGreenhouses";
import SolutionHighlight from "@/components/solutions/SolutionHighlight";
import Technology from "@/components/solutions/Technology";
import WhyChooseUs from "@/components/solutions/WhyChooseUs";


export default function page() {
    return (
        <>
            <Navbar />
            <SolutionHighlight />
            <OurSolutions/>
            <Hydroponics/>
            <Aquaponics/>
            <SmartGreenhouses/>
            <ResidentialCommercial/>
            <Industrial/>
            <Technology/>
            <OurProcess/>
            <WhyChooseUs/>
            <Footer />
        </>
    );
}

