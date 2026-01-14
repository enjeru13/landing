import React from "react";
import { motion as Motion } from "framer-motion";
import { VALUES_FEATURES } from "../../data/content";

const Values = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Contenedor Principal (Card Grande) */}
        <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center overflow-hidden">
          {/* Columna Izquierda: Texto y Lista */}
          <div className="flex-1 space-y-8">
            <Motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-main dark:text-white leading-tight"
            >
              Agilidad en el Código.
              <br />
              <span className="text-primary">Precisión en el Diseño.</span>
            </Motion.h3>

            <div className="space-y-8">
              {VALUES_FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }} // Retraso escalonado
                    className="flex gap-5"
                  >
                    <div className="mt-1 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center text-primary">
                        <Icon strokeWidth={2} className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-text-main dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-text-muted dark:text-gray-300 text-base leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </Motion.div>
                );
              })}
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 group">
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent z-10 mix-blend-overlay"></div>

              {/* Imagen */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Equipo de desarrolladores colaborando en una oficina moderna"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              />

              {/* Detalle decorativo flotante (opcional) */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg text-xs font-mono border border-white/20">
                <span className="text-green-500">●</span>{" "}
                MisPanasChambeando(UnoEsGei).jpg
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
