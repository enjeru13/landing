import { motion as Motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Server, FileText } from "lucide-react";
import { ERP_HERO } from "../../../data/erp-content";
import ErpHeroImage from "../../../assets/users.png";
import ErpHeroImageDark from "../../../assets/users_dark.png";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const ErpHero = () => {
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

  const { badge, titlePart1, titlePart2, description } = ERP_HERO;

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-erp-bg-light dark:bg-erp-bg-dark transition-colors duration-300">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0d4659 1px, transparent 1px), linear-gradient(90deg, #0d4659 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-erp-primary/10 dark:bg-erp-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-erp-primary/10 dark:border-white/10 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-erp-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-erp-accent"></span>
            </span>
            <span className="text-xs font-bold text-erp-primary dark:text-white uppercase tracking-wider">
              {badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-erp-text-main dark:text-white leading-[1.1] tracking-tight">
            {titlePart1} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-erp-primary to-erp-accent dark:from-white dark:to-erp-accent">
              {titlePart2}
            </span>
          </h1>

          <p className="text-xl text-erp-text-sub dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
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
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-20 relative w-full max-w-6xl perspective-1000"
          style={{ perspective: "1200px" }}
        >
          <Motion.div
            className="relative rounded-2xl bg-white dark:bg-[#1a1d21] border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden ring-1 ring-black/5"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-12 bg-gray-50 dark:bg-[#25282d] border-b border-gray-200 dark:border-white/5 flex items-center px-6 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="h-6 w-1/3 bg-gray-200 dark:bg-white/5 rounded-md flex items-center justify-center">
                <span className="text-[10px] text-gray-400">
                  nexus-erp.cloud/dashboard
                </span>
              </div>
              <div className="w-10"></div>
            </div>

            <div className="aspect-16/8 relative bg-gray-100 dark:bg-gray-900 overflow-hidden">
              <img
                src={ErpHeroImage}
                alt="ERP Interface Light"
                className="w-full h-full object-cover block dark:hidden"
              />

              <img
                src={ErpHeroImageDark}
                alt="ERP Interface Dark"
                className="w-full h-full object-cover hidden dark:block"
              />
            </div>
          </Motion.div>

          <Motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-4 md:-left-12 bottom-1/4 bg-white dark:bg-erp-surface-dark p-4 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 hidden lg:flex items-center gap-3 z-20"
          >
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">
                Estatus de Seguridad
              </p>
              <p className="text-sm font-bold text-erp-text-main dark:text-white">
                Sistema Seguro
              </p>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -right-4 md:-right-12 top-1/3 bg-white dark:bg-erp-surface-dark p-4 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 hidden lg:flex items-center gap-3 z-20"
          >
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
              <Server size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">
                Uptime del Servidor
              </p>
              <p className="text-sm font-bold text-erp-text-main dark:text-white">
                99.99% Operativo
              </p>
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};

export default ErpHero;
