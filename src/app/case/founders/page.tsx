import Discover from "../../components/Discover";
import Footer from "../../components/Footer";
import Integrations from "../../components/Integrations";
import TemplateFactory from "../../components/TemplateFactory";
import CFOs from "../../components/case/CFOs";
import Hero from "../../components/case/Hero";
import Seamless from "../../components/case/Seamless";
import Transform from "../../components/case/Transform";
import Zuna from "../../components/case/Zuna";
import SecurityProduct from "../../components/securityProduct";

const useCases = [
  {
    name: "Centralized and Consolidated Financial Visibility",
    desc: "Access a unified view of your finances for enhanced clarity and decision-making",
  },
  {
    name: "Strategic Decision Enablement",
    desc: "Base your strategic decisions on key performance indicators (KPIs) and metrics for optimized growth.",
  },
  {
    name: "Investor and Board Impression",
    desc: "Impress investors and the board with tailored reports that convey insightful information effectively.",
  },
  {
    name: "Industry-Specific Insights and Benchmarking",
    desc: "Generate customized reports tailored to your industry needs, such as churn and sales reports, with just a few clicks.",
  },
  {
    name: "Rapid Adaptability and Responsiveness",
    desc: "Respond swiftly to changing circumstances with instant reports, ensuring agility in decision-making without any external assistance.",
  },
  {
    name: "Time-Saving Boost -Efficiency",
    desc: "Save valuable time by streamlining financial processes and report generation tasks.",
  },
];
const firstArray = [
  "Generate Reports on Demand",
  "Holistic KPI Management",
  "Comprehensive Reporting Suite",
];
const secondArray = [
  "Centralized and Consolidated Reports",
  "Automated Bookkeeping",
  "Unified Data Import",
];
export default function Case() {
  return (
    <>
      <Hero
        useCases={useCases}
        text="Accounting might not be your forte, but finance certainly must be."
        desc="Ganister partners with you and your accounting team to fuel business growth. Generate insights to optimize operations, allocate resources wisely, and captivate investors. Close books swiftly and deliver beautiful reports that inspire your team and stakeholders alike."
      />
      <Zuna />
      <CFOs name="Founders" firstArray={firstArray} secondArray={secondArray} />
      <Seamless />
      <Transform />
      <TemplateFactory />
      <Integrations />
      <SecurityProduct />
      <Discover />
      <Footer />
    </>
  );
}
