import Discover from "./components/Discover";
import DunlinAi from "./components/DunlinAi";
import DunlineLife from "./components/DunlineLife";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Security from "./components/Security";
import TemplateFactory from "./components/TemplateFactory";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <DunlinAi/>
      <DunlineLife />
      <Testimonial/>
      <Discover />
      <TemplateFactory />
      <Security />
      <Integrations/>
      <Discover />
      <Footer/>
    </div>
  );
}
