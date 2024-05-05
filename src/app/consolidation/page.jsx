import Discover from "../components/Discover";
import Hero from "../components/consolidation/Hero";
import Features from "../components/consolidation/Features";
import Sevensimple from "../components/SevenSimple";
import SecurityProduct from "../components/securityProduct";
import DunlineLife from "../components/DunlineLife";
import Footer from "../components/Footer";
import Generate from "../components/Generate";
import Integrations from "../components/Integrations";
import Security from "../components/Security";
import TemplateFactory from "../components/TemplateFactory";
import Testimonial from "../components/Testimonial";
import Steps from "../components/Steps";

const steps = [
  {
    text: "Choose your main platform.",
    img: "main_platform_icon.png",
  },
  {
    text: "Link your QuickBooks account.",
    img: "quickbooks_icon.png",
  },
  {
    text: "Integrate your business and financial systems (AP, AR, EMS, etc.).",
    img: "integration_icon.png",
  },
  {
    text: "Customize columns and format.",
    img: "customize_icon.png",
  },
  {
    text: "Click to import.",
    img: "import_icon.png",
  },
];

export default function Product() {
  return (
    <>
      <Hero />
      <Features />
      <Steps
        stepName="Centralize and Consolidate your Financial Systems in Five Simple Steps"
        steps={steps}
      />
      <Sevensimple />
      <Discover />
      <TemplateFactory />
      <SecurityProduct />
      <Integrations />
      <Discover />
      {/* <DunlineLife />
        <Testimonial />  
       */}
      <Footer />
    </>
  );
}
