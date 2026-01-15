import React from "react";
import { motion as Motion } from "framer-motion";
import { ERP_ARCHITECTURE } from "../../../data/erp-content";

const ErpArchitecture = () => {
  const { title, description, cards } = ERP_ARCHITECTURE;

  return (
    <section className="py-24 bg-erp-bg-light dark:bg-erp-bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-16">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-erp-text-main dark:text-white mb-4 tracking-tight"
          >
            {title}
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-erp-text-sub dark:text-gray-400 leading-relaxed"
          >
            {description}
          </Motion.p>
        </div>

        {/* --- GRID DE TARJETAS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <Motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white dark:bg-erp-surface-dark border border-gray-200 dark:border-white/5 p-6 rounded-lg hover:shadow-lg hover:border-erp-primary/30 dark:hover:border-erp-accent/30 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-erp-primary/5 dark:bg-white/5 rounded flex items-center justify-center text-erp-primary dark:text-erp-accent mb-5 group-hover:bg-erp-primary group-hover:text-white transition-colors duration-300">
                <card.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Contenido */}
              <h3 className="text-lg font-bold text-erp-text-main dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-erp-text-sub dark:text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErpArchitecture;
