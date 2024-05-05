import Discover from "../components/Discover";
import Hero from "../components/bookeeping/Hero";
import Features from "../components/Features";
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

export default function Product() {
  return (
    <>
      <Hero />
      <Features />
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
