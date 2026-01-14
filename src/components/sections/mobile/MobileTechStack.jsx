import { motion as Motion } from "framer-motion";
import { MOBILE_TECH } from "../../../data/mobile-content";

const MobileTechStack = () => {
  const { title, description, cards } = MOBILE_TECH;

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16 text-center md:text-left">
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
            className="text-text-muted dark:text-gray-400 max-w-2xl text-lg leading-relaxed"
          >
            {description}
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <Motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col gap-4 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-surface-dark p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 dark:hover:shadow-none"
            >
              <div
                className={`absolute top-4 right-4 px-2 py-1 rounded border text-xs font-bold uppercase tracking-wider ${card.badgeColor}`}
              >
                {card.type}
              </div>

              <div
                className={`w-14 h-14 rounded-xl ${card.bgIcon} flex items-center justify-center shadow-md dark:shadow-none border border-gray-100 dark:border-none`}
              >
                <card.icon className={`text-3xl ${card.color}`} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {card.name}
                </h3>
                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 group-hover:border-primary/10 dark:group-hover:border-white/10 transition-colors">
                <span className="text-xs font-semibold text-text-muted/80 dark:text-slate-500 uppercase tracking-wider block mb-1">
                  Ideal para
                </span>
                <p className="text-sm text-text-main dark:text-white font-medium">
                  {card.bestFor}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileTechStack;
