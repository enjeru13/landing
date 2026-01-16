import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import ErpHero from "../components/sections/erp/ErpHero";
import ErpArchitecture from "../components/sections/erp/ErpArchitecture";
import ErpAnalytics from "../components/sections/erp/ErpAnalytics";
import ErpIntegrations from "../components/sections/erp/ErpIntegrations";
import ErpSecurity from "../components/sections/erp/ErpSecurity";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ErpDev = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/#contact");
  };

  return (
    <div className="font-body text-text-main dark:text-white bg-background-light dark:bg-background-dark min-h-screen selection:bg-erp-primary/20 selection:text-erp-primary">
      <Navbar />

      <main className="overflow-hidden">
        <ErpHero />
        <ErpArchitecture />
        <ErpAnalytics />
        <ErpIntegrations />
        <ErpSecurity />

        <section className="py-24 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 text-center relative">
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 dark:text-white">
              ¿Listo para centralizar tu operación?
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Deja atrás las hojas de cálculo desconectadas. Diseñemos un
              sistema ERP o tu CRM a la medida que escale junto con tu negocio.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className="py-4 px-10 text-lg bg-erp-primary hover:bg-erp-primary-hover border-transparent"
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

export default ErpDev;
