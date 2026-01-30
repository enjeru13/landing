import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import AboutHero from "../components/sections/about/AboutHero";
import AboutStats from "../components/sections/about/AboutStats";
// import AboutTeam from "../components/sections/about/AboutTeam";
import AboutValues from "../components/sections/about/AboutValues";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/#contact");
  };

  return (
    <div className="font-body text-text-main dark:text-white bg-background-light dark:bg-background-dark min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="overflow-hidden pt-4">
        <AboutHero />
        <AboutStats />
        <AboutValues />
        {/* <AboutTeam /> */}

        <section className="py-24 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-text-main dark:text-white">
              ¿Listo para crear algo extraordinario?
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ya conoces nuestros valores y a las personas detrás del código.
              Ahora queremos conocer tu visión y ayudarte a hacerla realidad.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="py-4 px-10 text-lg shadow-xl shadow-primary/20"
                onClick={handleContactClick}
              >
                Solicitar Propuesta <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
