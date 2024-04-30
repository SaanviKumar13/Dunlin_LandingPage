import Zuna from "../components/case/Zuna";
import CFOs from "../components/case/CFOs";
import Seamless from "../components/case/Seamless";
import TemplateFactory from "../components/TemplateFactory";
import SecurityProduct from "../components/securityProduct";
import Integrations from "../components/Integrations";
import Discover from "../components/Discover";
import Footer from "../components/Footer";

export default function Case () {
    return (
        <>
        <Zuna />
        <CFOs />
        <Seamless />
        <TemplateFactory />
        <SecurityProduct/>
        <Integrations />
        <Discover /> 
        <Footer />

        </>
    )
}