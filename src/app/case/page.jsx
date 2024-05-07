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

export default function Case() {
  return (
    <>
      <Hero />
      <Zuna />
      <CFOs />
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
