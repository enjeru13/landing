import { m as Motion } from "framer-motion";

const PortfolioHero = () => (
  <section className="w-full pt-32 pb-16 px-4 md:px-10 max-w-7xl mx-auto text-center">
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-4 max-w-2xl mx-auto"
    >
      <span className="text-primary font-bold uppercase tracking-wider text-sm">
        Portafolio
      </span>
      <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-text-main dark:text-white">
        Proyectos que hablan por sí solos
      </h1>
      <p className="text-lg text-text-muted dark:text-gray-400 leading-relaxed">
        Soluciones reales construidas para clientes reales. Desde e-commerce
        hasta sistemas empresariales de gestión.
      </p>
    </Motion.div>
  </section>
);

export default PortfolioHero;
