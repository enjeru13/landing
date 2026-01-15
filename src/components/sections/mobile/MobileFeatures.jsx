import React from "react";
import { motion as Motion } from "framer-motion";
import { MOBILE_FEATURES } from "../../../data/mobile-content";

const MobileFeatures = () => {
  const { title, description, items } = MOBILE_FEATURES;

  // Variantes para la animación escalonada (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Cada hijo aparece 0.1s después del anterior
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0b0c0d] relative overflow-hidden">
      {/* --- BACKGROUND GRID PATTERN --- */}
      {/* Usamos un gradiente CSS para crear la cuadrícula. Opacidad baja para que sea sutil */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          color: "#888", // El color del gris define la línea
        }}
      ></div>

      {/* Efecto de viñeta para suavizar los bordes del grid */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-50/80 via-transparent to-gray-50/80 dark:from-[#0b0c0d]/80 dark:to-[#0b0c0d]/80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4"
          >
            {title}
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted dark:text-gray-400 text-lg"
          >
            {description}
          </Motion.p>
        </div>

        {/* Grid Cards */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((feature) => (
            <Motion.div
              key={feature.id}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:shadow-none"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary dark:text-white">
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default MobileFeatures;
