import React from "react";
import { motion as Motion } from "framer-motion";
import { TECH_STACK } from "../../../data/web-content";

const TechStack = () => {
  const duplicatedTech = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-16 bg-white dark:bg-[#15171b] border-y border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col items-center text-center gap-12">
        <Motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-main dark:text-white">
            Stack Tecnológico
          </h2>
          <p className="text-text-muted dark:text-gray-400">
            Nuestra caja de herramientas: tecnologías modernas para soluciones
            escalables.
          </p>
        </Motion.div>

        {/* CONTENEDOR DEL CARRUSEL */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white dark:from-[#15171b] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white dark:from-[#15171b] to-transparent z-10 pointer-events-none"></div>

          {/* Fila de Movimiento */}
          <div className="flex overflow-hidden">
            <Motion.div
              className="flex gap-6 pr-6"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTech.map((tech, idx) => {
                const Icon = tech.Icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 px-6 py-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-background-dark hover:border-primary/50 transition-colors min-w-[180px] sm:min-w-[220px]"
                  >
                    <div className={`${tech.color} shrink-0`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-base text-text-main dark:text-gray-200 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
