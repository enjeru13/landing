import { motion as Motion } from "framer-motion";
import { MOBILE_PHILOSOPHY } from "../../../data/mobile-content";

const MobilePhilosophy = () => {
  const { title, subtitle, items } = MOBILE_PHILOSOPHY;

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 overflow-hidden relative">
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #888 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1 relative w-full"
          >
            <Motion.div
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-white dark:bg-surface-dark group">
                <div
                  className="aspect-square w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop')",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-main dark:text-white">
                        LaManoDeMiAmigoTrans(Juan).jpg
                      </p>
                      <p className="text-[10px] text-text-muted dark:text-gray-400">
                        Actualizado hace 5m
                      </p>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-white dark:border-[#1a1a1a]"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white dark:border-[#1a1a1a]"></div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
              </div>
            </Motion.div>
          </Motion.div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-primary"></div>
                <span className="text-primary font-bold tracking-wider uppercase text-xs">
                  User Experience
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main dark:text-white mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-lg text-text-muted dark:text-gray-400 mb-10 leading-relaxed">
                {subtitle}
              </p>
            </Motion.div>

            <div className="space-y-6">
              {items.map((item, idx) => (
                <Motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex gap-5 p-5 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary/30 hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="mt-1 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePhilosophy;
