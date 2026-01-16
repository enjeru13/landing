import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import MobileHero from "../components/sections/mobile/MobileHero";
import MobilePhilosophy from "../components/sections/mobile/MobilePhilosophy";
import MobileTechStack from "../components/sections/mobile/MobileTechStack";
import MobileFeatures from "../components/sections/mobile/MobileFeatures";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MobileDev = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/#contact");
  };

  return (
    <div className="font-body text-text-main dark:text-white bg-background-light dark:bg-background-dark min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="overflow-hidden">
        <MobileHero />
        <MobileTechStack />
        <MobilePhilosophy />
        <MobileFeatures />
        <section className="py-24 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 dark:text-white">
              ¿Tienes una idea de App?
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Convertimos tu visión en una aplicación móvil nativa de alto
              rendimiento.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className="py-4 px-10 text-lg"
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

export default MobileDev;
