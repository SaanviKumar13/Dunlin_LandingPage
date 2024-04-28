import Hero from "../components/reporting/Hero";
import Footer from "../components/Footer"
import Discover from "../components/Discover";
import Features from "../components/reporting/Features";
import TemplateFactory from "../components/TemplateFactory";
import Blog from "../components/reporting/Blog"
import Integrations from "../components/Integrations";
export default function Product() {
    return (
        <>
            <Hero/>
            <Features/>
            <Discover/>
            <TemplateFactory/>
            <Blog/>
            <Integrations/>
            <Discover/>
            <Footer />
        </>

    )
}