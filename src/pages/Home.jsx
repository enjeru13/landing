import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
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
