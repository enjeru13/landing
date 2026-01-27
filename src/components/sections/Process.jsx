import { motion as Motion } from "framer-motion";
import { PROCESS_STEPS } from "../../data/content";

const ProcessStep = ({ step }) => {
  const Icon = step.icon;

  return (
    <Motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group flex flex-col items-center text-center gap-6 relative"
    >
      {/* Contenedor del Icono */}
      <div className="relative z-10">
        <div
          className={`w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl group-hover:scale-110 
          bg-white dark:bg-surface-dark 
          border border-gray-100 dark:border-white/10
          ${step.color} ${step.borderColor}
        `}
        >
          <Icon strokeWidth={1.5} className="w-10 h-10" />
        </div>
      </div>

      {/* Textos */}
      <div>
        <span
          className={`text-xs font-bold uppercase tracking-wider mb-2 block ${step.color}`}
        >
          Paso {step.step}
        </span>
        <h3 className="text-xl font-bold mb-2 text-text-main dark:text-white">
          {step.title}
        </h3>
        <p className="text-text-muted dark:text-gray-400 text-sm font-body leading-relaxed max-w-xs mx-auto">
          {step.desc}
        </p>
      </div>
    </Motion.div>
  );
};

const Process = () => {
  return (
    <section
      className="py-24 relative border-t border-gray-100 dark:border-white/5 bg-background-light dark:bg-background-dark"
      id="process"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main dark:text-white">
            Cómo Construimos
          </h2>
          <p className="text-text-muted dark:text-gray-400 font-body text-lg max-w-2xl mx-auto">
            De concepto abstracto a realidad concreta. Nuestro proceso es
            transparente e iterativo.
          </p>
        </Motion.div>

        {/* Contenedor Principal */}
        <div className="relative">
          {/* LÍNEA HORIZONTAL (DESKTOP) - COLOR ADAPTADO */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 dark:bg-surface-dark z-0">
            <div className="h-full bg-linear-to-r from-primary to-accent w-3/4 opacity-50"></div>
          </div>

          {/* Grid de Pasos */}
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 relative z-10"
          >
            {PROCESS_STEPS.map((step, idx) => (
              <ProcessStep key={idx} step={step} index={idx} />
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
