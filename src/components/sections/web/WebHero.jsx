import { motion as Motion } from "framer-motion";
import { Code2, CheckCircle2 } from "lucide-react";
import Button from "../../ui/Button";

const WebHero = () => {
  return (
    <section className="relative w-full px-4 md:px-10 pb-16 lg:pb-24 pt-32 lg:pt-40">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-l from-primary/5 to-transparent skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Texto */}
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col gap-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit border border-primary/20">
            <Code2 className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wide">
              Desarrollo Web
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-main dark:text-white">
            Soluciones Web <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Robustas y Escalables
            </span>
          </h1>

          <p className="text-lg md:text-xl text-text-muted dark:text-gray-400 max-w-[600px] leading-relaxed">
            Construimos aplicaciones web de nivel empresarial que crecen con tu
            negocio.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button>Empezar Proyecto</Button>
            <Button variant="outline">Ver Portafolio</Button>
          </div>
        </Motion.div>

        {/* Imagen */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 relative group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop')",
              }}
            ></div>
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply dark:bg-primary/40"></div>

            {/* Widget Flotante */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-text-muted dark:text-gray-400">
                    Estado del Sistema
                  </p>
                  <p className="font-bold text-text-main dark:text-white">
                    100% Optimizado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default WebHero;
