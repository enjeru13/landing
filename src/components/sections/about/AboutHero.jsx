import { motion as Motion } from "framer-motion";
import { ABOUT_CONTENT } from "../../../data/about-content";

const AboutHero = () => {
  const { badge, description, image } = ABOUT_CONTENT.hero;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Texto */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <Motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider w-fit"
        >
          {badge}
        </Motion.span>

        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.1] tracking-tight"
        >
          Innovando con{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
            Propósito
          </span>{" "}
          & Pasión
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-text-muted dark:text-gray-400 font-medium leading-relaxed max-w-2xl"
        >
          {description}
        </Motion.p>
      </div>

      {/* Imagen Visual */}
      <Motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="lg:col-span-5 relative"
      >
        <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl relative z-10">
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
          <img
            src={image}
            alt="Team"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl z-0"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0"></div>
      </Motion.div>
    </section>
  );
};

export default AboutHero;
