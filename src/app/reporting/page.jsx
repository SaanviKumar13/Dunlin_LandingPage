import Hero from "../components/reporting/Hero";
import Footer from "../components/Footer";
import Discover from "../components/Discover";
import Features from "../components/reporting/Features";
import TemplateFactory from "../components/TemplateFactory";
import Blog from "../components/reporting/Blog";
import Integrations from "../components/Integrations";
import HowDunlinAI from "../components/HowDunlinAI";
import Steps from "../components/Steps";

const steps = [
  {
    text: "Connect your QuickBooks account.",
    img: "quickbooks_icon.png",
  },
  {
    text: "Integrate your business and financial systems seamlessly.",
    img: "integration_icon.png",
  },
  {
    text: "Describe the purpose of the report, stakeholders, and report details.",
    img: "report_description_icon.png",
  },
  {
    text: "Select your desired report format (PDF, Excel, etc.).",
    img: "report_format_icon.png",
  },
  {
    text: "Customize report parameters to fit your needs.",
    img: "customize_icon.png",
  },
  {
    text: "Generate the report with a single click.",
    img: "generate_report_icon.png",
  },
  {
    text: "Review and refine the report as necessary.",
    img: "review_icon.png",
  },
  {
    text: "Export or share the finalized report effortlessly.",
    img: "export_share_icon.png",
  },
];

export default function Product() {
  return (
    <>
      <Hero />
      <Features />
      <HowDunlinAI />
      <Steps
        stepName="Instantly Generate Reports in Eight Simple Steps"
        steps={steps}
      />
      <Discover />
      <TemplateFactory />
      <Blog />
      <Integrations />
      <Discover />
      <Footer />
    </>
  );
}
