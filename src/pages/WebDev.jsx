import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import WebHero from "../components/sections/web/WebHero";
import TechStack from "../components/sections/web/TechStack";
import WebFeatures from "../components/sections/web/WebFeatures";
import Lifecycle from "../components/sections/web/Lifecycle";
import CaseStudy from "../components/sections/web/CaseStudy";
import { useNavigate } from "react-router-dom";

const WebDev = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/#contact");
  };

  return (
    <div className="font-body text-text-main dark:text-white bg-background-light dark:bg-background-dark min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="overflow-hidden">
        <WebHero />
        <TechStack />
        <WebFeatures />
        <Lifecycle />
        <CaseStudy />

        <section className="py-24 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 dark:text-white">
              ¿Listo para construir el futuro?
            </h2>

            <p className="text-lg text-text-muted dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Desde sitios corporativos hasta aplicaciones web complejas,
              creamos experiencias digitales rápidas, seguras y escalables.
            </p>

            <div className="flex justify-center gap-4">
              <Button
                className="py-4 px-10 text-lg"
                onClick={handleContactClick}
              >
                Iniciar un Proyecto
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebDev;
