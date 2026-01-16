import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import PortfolioHero from "../components/sections/portfolio/PortfolioHero";
import PortfolioGrid from "../components/sections/portfolio/PortfolioGrid";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/#contact");
  };

  return (
    <div className="font-body text-text-main dark:text-white bg-background-light dark:bg-background-dark min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="overflow-hidden">
        <PortfolioHero />
        <PortfolioGrid />

        <section className="py-24 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/5 opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 dark:text-white">
              ¿Listo para construir algo extraordinario?
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Convertimos problemas complejos en soluciones de software
              elegantes. Hablemos de tu próximo proyecto.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className="py-4 px-10 text-lg shadow-xl shadow-primary/20"
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

export default Portfolio;
