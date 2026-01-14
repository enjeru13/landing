import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Values from "../components/sections/Values";
import Process from "../components/sections/Process";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="font-body text-text-main dark:text-white bg-background-light dark:bg-background-dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Values />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
