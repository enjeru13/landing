/* eslint-disable no-unused-vars */
import React from "react";
import { SERVICES } from "../../data/content";
import { motion as Motion } from "framer-motion";

// Definimos las variantes fuera para reutilizarlas y limpiar el código
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Componente de Tarjeta individual
const ServiceCard = ({ icon: Icon, title, desc }) => {
  return (
    <Motion.div
      // CORRECCIÓN 1: Solo pasamos variants. El padre controla el "when" (cuándo).
      variants={cardVariants}
      className="group p-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-none hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon strokeWidth={1.5} className="w-7 h-7" />
      </div>

      <h4 className="font-display font-bold text-xl text-text-main dark:text-white mb-3">
        {title}
      </h4>

      <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </Motion.div>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Esto ahora sí funcionará
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="py-24 bg-background-light dark:bg-[#15171b]"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Header de la sección */}
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-start md:items-end justify-between">
          <div className="max-w-2xl">
            <Motion.h2
              variants={textVariants} // CORRECCIÓN 2: Añadimos variants
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-wider text-sm mb-3"
            >
              Nuestra Experiencia
            </Motion.h2>

            <Motion.h3
              variants={textVariants} // CORRECCIÓN 2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-3xl md:text-4xl text-text-main dark:text-white leading-tight"
            >
              Soluciones integrales para <br /> la era digital.
            </Motion.h3>
          </div>

          <Motion.p
            variants={textVariants} // CORRECCIÓN 2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted dark:text-gray-400 max-w-sm leading-relaxed"
          >
            Desde la idea conceptual hasta el despliegue final, proporcionamos
            la tecnología que impulsa el valor de tu negocio.
          </Motion.p>
        </div>

        {/* Grid de Tarjetas Animadas */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Services;
