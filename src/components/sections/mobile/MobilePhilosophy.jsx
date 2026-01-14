import { motion as Motion } from "framer-motion";
import { MOBILE_PHILOSOPHY } from "../../../data/mobile-content";

const MobilePhilosophy = () => {
  const { title, subtitle, items } = MOBILE_PHILOSOPHY;

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* COLUMNA IZQUIERDA: IMAGEN (Mobile Context) */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 order-2 lg:order-1 relative w-full"
          >
            {/* Fondo decorativo diferente al de Web para diferenciar */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-surface-dark">
              {/* Contenedor de imagen */}
              <div
                className="aspect-square md:aspect-video lg:aspect-square w-full bg-cover bg-center group"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop')",
                }}
              >
                <div className="absolute inset-0 bg-black/30 dark:bg-black/50 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>

              {/* Badge Flotante sobre la imagen (Estilo Mobile) */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-[#1F2021]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                  <p className="text-xs font-mono text-gray-500 font-bold uppercase tracking-widest">
                    UI_Kit_Mobile_v2.fig
                  </p>
                </div>
              </div>
            </div>
          </Motion.div>

          {/* COLUMNA DERECHA: TEXTO Y LISTA */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Etiqueta pequeña superior */}
              <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">
                User Experience
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6 leading-tight">
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
                  className="flex gap-5 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent hover:border-gray-100 dark:hover:border-white/5 transition-all duration-300 group"
                >
                  {/* Icono con fondo */}
                  <div className="mt-1 w-12 h-12 rounded-xl bg-surface-highlight dark:bg-surface-highlight border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 text-text-main dark:text-white group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>

                  {/* Textos */}
                  <div>
                    <h4 className="text-lg font-bold text-text-main dark:text-white mb-2">
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
