import { motion as Motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Button from "../ui/Button";
import HeroIllustration from "./HeroIllustration";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/#contact");
  };
  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="relative bg-background-light dark:bg-background-dark overflow-hidden pt-24 pb-12 lg:pt-24 lg:min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <Motion.div
            className="flex flex-col gap-6 lg:w-1/2 w-full"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <Motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-primary tracking-wide uppercase">
                Disponible 2026
              </span>
            </Motion.div>

            <Motion.h1
              variants={fadeInUp}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-text-main dark:text-white"
            >
              Ingeniería digital que{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                escala
              </span>{" "}
              tu negocio.
            </Motion.h1>

            <Motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-text-muted dark:text-gray-300 leading-relaxed max-w-lg"
            >
              Desarrollamos ecosistemas web, aplicaciones móviles y sistemas ERP
              & CRM a medida. Código robusto, diseño preciso y estrategias
              pensadas para el crecimiento.
            </Motion.p>

            <Motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto justify-center"
                onClick={handleContactClick}
              >
                Solicitar Propuesta <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto justify-center"
                onClick={handlePortfolioClick}
              >
                Ver Portafolio <FileText className="w-4 h-4" />
              </Button>
            </Motion.div>

            <Motion.div
              variants={fadeInUp}
              className="pt-8 mt-4 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between sm:justify-start gap-4 sm:gap-8 md:gap-12"
            >
              <div className="flex flex-col">
                <p className="font-bold text-2xl sm:text-3xl text-text-main dark:text-white">
                  +20
                </p>
                <p className="text-sm text-text-muted">Proyectos</p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200 dark:bg-gray-800"></div>

              <div className="flex flex-col">
                <p className="font-bold text-2xl sm:text-3xl text-text-main dark:text-white">
                  98%
                </p>
                <p className="text-sm text-text-muted">Retención</p>
              </div>

              <div className="hidden sm:block w-px h-10 bg-gray-200 dark:bg-gray-800"></div>

              <div className="flex flex-col">
                <p className="font-bold text-2xl sm:text-3xl text-text-main dark:text-white">
                  24/7
                </p>
                <p className="text-sm text-text-muted">Soporte</p>
              </div>
            </Motion.div>
          </Motion.div>

          <Motion.div
            className="lg:w-1/2 w-full mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <HeroIllustration />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
