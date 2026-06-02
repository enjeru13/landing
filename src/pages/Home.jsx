import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/Navbar";
import SEO from "../components/utils/SEO";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Values from "../components/sections/Values";
import Process from "../components/sections/Process";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const elem = document.getElementById("contact");
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="font-body text-text-main dark:text-white bg-background-light dark:bg-background-dark min-h-screen">
      <SEO
        description="Pluma8 es una agencia de desarrollo de software especializada en aplicaciones web, móviles y sistemas ERP/CRM. Soluciones escalables para empresas."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Pluma8",
          "url": "https://pluma8.com",
          "logo": "https://pluma8.com/favicon.svg",
          "description": "Agencia de desarrollo de software especializada en aplicaciones web, móviles y sistemas ERP/CRM.",
          "sameAs": [],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "pluma8@techagency.com",
            "contactType": "sales"
          }
        })}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Values />
        <Process />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
