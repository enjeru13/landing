import { motion as Motion } from "framer-motion";
import { ERP_INTEGRATIONS } from "../../../data/erp-content";

const ErpIntegrations = () => {
  const { title, description, items } = ERP_INTEGRATIONS;

  return (
    <section className="py-20 bg-erp-bg-light dark:bg-erp-bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-erp-text-main dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-erp-text-sub dark:text-gray-400 text-lg">
            {description}
          </p>
        </Motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, idx) => (
            <Motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-erp-surface-dark border border-gray-200 dark:border-white/5 rounded-lg hover:border-erp-primary dark:hover:border-erp-accent transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-none group"
            >
              <item.icon
                className={`w-10 h-10 mb-3 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                strokeWidth={1.5}
              />

              <span className="text-sm font-bold text-erp-text-main dark:text-white">
                {item.name}
              </span>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErpIntegrations;
