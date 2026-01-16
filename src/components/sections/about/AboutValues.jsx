import { motion as Motion } from "framer-motion";
import { ABOUT_CONTENT } from "../../../data/about-content";

const AboutValues = () => {
  const { title, subtitle, list } = ABOUT_CONTENT.values;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-10 py-20 md:py-28">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-text-muted dark:text-gray-400 text-lg">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((item, idx) => (
          <Motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-white/5 hover:border-primary/20"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">
              {item.title}
            </h3>
            <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutValues;
