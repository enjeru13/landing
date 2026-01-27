import { motion as Motion } from "framer-motion";
import { WEB_FEATURES } from "../../../data/web-content";

const WebFeatures = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-main dark:text-white">
            Especialización
          </h2>
          <p className="text-text-muted dark:text-gray-400">
            Servicios adaptados a tus requerimientos únicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WEB_FEATURES.map((feature, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-main dark:text-white">
                {feature.title}
              </h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed mb-6 grow">
                {feature.desc}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebFeatures;
