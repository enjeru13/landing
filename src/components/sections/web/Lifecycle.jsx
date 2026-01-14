import React from "react";
import { motion as Motion } from "framer-motion";
import { LIFECYCLE_STEPS } from "../../../data/web-content";

const Lifecycle = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#15171b] border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-main dark:text-white">
            Ciclo de Desarrollo
          </h2>
          <p className="text-text-muted dark:text-gray-400 max-w-2xl mx-auto">
            Proceso ágil y transparente.
          </p>
        </div>

        <div className="relative">
          {/* Línea Vertical (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block -translate-x-1/2"></div>

          <div className="space-y-12">
            {LIFECYCLE_STEPS.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <Motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Texto */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left"
                    } text-center md:text-inherit`}
                  >
                    <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-bold text-text-muted mb-2">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Icono Central */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white dark:bg-background-dark border-2 border-primary flex items-center justify-center text-primary shadow-lg">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Espacio vacío para equilibrio */}
                  <div className="hidden md:block w-1/2"></div>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifecycle;
