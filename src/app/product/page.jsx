import Discover from "../components/Discover";
import Hero from "../components/bookeeping/Hero";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Sevensimple from "../components/SevenSimple";
import SecurityProduct from "../components/securityProduct";
import DunlineLife from "../components/DunlineLife";
import Footer from "../components/Footer";
import Generate from "../components/Generate";
import Integrations from "../components/Integrations";
import Security from "../components/Security";
import TemplateFactory from "../components/TemplateFactory";
import Testimonial from "../components/Testimonial";
import HowDunlinAI from "../components/HowDunlinAI";

const steps = [
  {
    text: "Connect your QuickBooks account.",
    img: "quickbooks_image.png",
  },
  {
    text: "Integrate all your AR and EMS software seamlessly.",
    img: "integration_image.png",
  },
  {
    text: "Upload journal entries not captured in bank or credit card statements.",
    img: "upload_entries_image.png",
  },
  {
    text: "Select the 'Categorize' button on the screen.",
    img: "categorize_button_image.png",
  },
  {
    text: "Click on the 'Adjust Entries' button.",
    img: "adjust_entries_button_image.png",
  },
  {
    text: "Click on the 'Close' button to complete your month-end process!",
    img: "close_button_image.png",
  },
];

export default function Product() {
  return (
    <>
      <Hero />
      <Features />

      <Steps
        stepName="Complete Your Month-End Book Closing in Seven Simple Steps"
        steps={steps}
      />
      <HowDunlinAI />
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
