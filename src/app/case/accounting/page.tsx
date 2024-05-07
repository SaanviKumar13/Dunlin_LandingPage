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
    name: "Time Savings",
    desc: "Dunlin reduces manual workload saving valuable time on repetitive tasks.",
  },
  {
    name: "Enhanced Client Service",
    desc: "Instant reporting and efficient communication tools enable accountants to provide timely and valuable insights to clients strengthening relationships.",
  },
  {
    name: "Improved Accuracy",
    desc: "Automated features minimize errors ensuring greater accuracy in financial data and reporting.",
  },
  {
    name: "Enhanced Efficiency",
    desc: "Ganister's consolidated ecosystem centralizes data and workflows optimizing efficiency across accounting operations leading to more bandwidth.",
  },
  {
    name: "Secure Collaboration",
    desc: "Built-in collaboration tools facilitate secure communication and collaboration between team members and clients enhancing productivity and client satisfaction.",
  },
  {
    name: "Offer Scalability",
    desc: "Ganister's flexible platform accommodates the growth of accounting firms enabling scalability without compromising performance or security.",
  },
];
const firstArray = [
  "Zero-Touch Transaction Categorization",
  "Instant Transaction Reconciliation",
  "On demand Report Generation",
];
const secondArray = [
  "Simplified Account Consolidation",
  "Multiple Entity cum Currency Consolidation",
  "Simplified Transaction Inquiries",
];
export default function Case() {
  return (
    <>
      <Hero
        useCases={useCases}
        text="Accounting Firm Uses Dunlin AI to Increase Revenue"
        desc="Dunlin.ai speeds up accounting firm closures, equips their clients with instant reporting, and provides a consolidated financial ecosystem with effective communication and collaboration tools"
      />
      <Zuna />
      <CFOs
        name="Accounting Firms"
        firstArray={firstArray}
        secondArray={secondArray}
      />
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
