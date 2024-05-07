import Zuna from "../components/case/Zuna";
import CFOs from "../components/case/CFOs";
import Seamless from "../components/case/Seamless";
import TemplateFactory from "../components/TemplateFactory";
import SecurityProduct from "../components/securityProduct";
import Integrations from "../components/Integrations";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Hero from "../components/case/Hero";
import Transform from "../components/case/Transform";

const useCases = [
  {
    name: "Strategic Decision",
    desc: "Ganister offers a holistic view of KPIs, empowering confident strategic decisions with comprehensive insights, including budgets vs actuals and departmental metrics.",
  },
  {
    name: "Data-Driven Insights",
    desc: "Ganister's reporting suite drives informed decision-making for CFOs with consolidated financial insights.",
  },
  {
    name: "Time and Resource Optimization",
    desc: "Ganister automates book closures, freeing teams for strategic planning",
  },
  {
    name: "Agility and Responsiveness",
    desc: "Ganister enables CFOs to swiftly adapt with on-demand reports, ensuring agility in dynamic markets",
  },
  {
    name: "Centralized Financial System",
    desc: "Ganister streamlines access to vital financial information for CFOs, enhancing efficiency with a consolidated reporting system",
  },
  {
    name: "Efficiency Amplification and Operational Oversight",
    desc: "Ganister streamlines access to vital financial information for CFOs, enhancing efficiency with a consolidated reporting system",
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
        text="Is Strategic Finance Losing Priority to Month-End Accounting Crunch?"
        desc="Ganister enables CFOs to prioritize Strategic Finance by automating book closures, while also offering instant reporting features to uncover and communicate insights to stakeholders in a format that captivates."
      />
      <Zuna />
      <CFOs name="CFO's" firstArray={firstArray} secondArray={secondArray} />
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
