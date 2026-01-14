import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import { MOBILE_HERO } from "../../../data/mobile-content";
// Asegúrate de que la ruta a tu imagen sea correcta
import iPhoneScreenImg from "../../../assets/Widgets=None.png";

const MobileHero = () => {
  const {
    badge,
    titlePart1,
    titleHighlight1,
    titlePart2,
    titleHighlight2,
    description,
    stats,
  } = MOBILE_HERO;

  return (
    <section className="relative w-full px-4 md:px-10 lg:pb-24 pt-32 lg:pt-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
        <div className="flex flex-col gap-6 text-left relative z-20">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {badge}
            </span>
          </Motion.div>

          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-main dark:text-white"
          >
            {titlePart1} <span className="text-primary">{titleHighlight1}</span>{" "}
            {titlePart2}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-600">
              {titleHighlight2}
            </span>
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-text-muted dark:text-gray-400 max-w-xl leading-relaxed"
          >
            {description}
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <div className="flex flex-wrap gap-4 mt-2">
              <Button>Empezar Proyecto</Button>
              <Button variant="outline">Ver Portafolio</Button>
            </div>
          </Motion.div>
        </div>

        <div className="relative w-full flex items-center justify-center py-10 lg:py-0">
          <div className="absolute w-[500px] h-[500px] border border-gray-200 dark:border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-[400px] h-[400px] border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-20"
          >
            <div
              className="relative w-[250px] h-[520px] md:w-[280px] md:h-[580px] bg-[#1a1a1a] rounded-[45px] border-[5px] border-[#2a2a2a] shadow-2xl overflow-hidden ring-1 ring-white/20"
              style={{ boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.6)" }}
            >
              <div className="absolute top-24 -left-[6px] w-[2px] h-7 bg-gray-600 rounded-l-md"></div>
              <div className="absolute top-36 -left-[6px] w-[2px] h-12 bg-gray-600 rounded-l-md"></div>
              <div className="absolute top-52 -left-[6px] w-[2px] h-12 bg-gray-600 rounded-l-md"></div>
              <div className="absolute top-40 -right-[6px] w-[2px] h-16 bg-gray-600 rounded-r-md"></div>

              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-40 flex items-center justify-center gap-2 pointer-events-none">
                <div className="w-12 h-3 bg-[#111] rounded-full"></div>
              </div>
              <div className="w-full h-full bg-black rounded-[40px] overflow-hidden relative">
                <img
                  src={iPhoneScreenImg}
                  alt="App Interface Mockup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </Motion.div>

          {stats.map((stat, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + idx * 0.2 }}
              className={`absolute p-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce border border-white/20 backdrop-blur-md bg-white/90 dark:bg-surface-dark/90 z-30
                ${
                  idx === 0
                    ? "top-[25%] -left-4 md:-left-12"
                    : "bottom-[18%] -right-4 md:-right-12"
                }`}
              style={{ animationDuration: idx === 0 ? "3.5s" : "4.5s" }}
            >
              <div
                className={`p-1.5 rounded-full ${
                  stat.color === "text-green-400"
                    ? "bg-green-400/10"
                    : "bg-primary/10"
                }`}
              >
                <stat.icon className={`${stat.color} w-4 h-4`} />
              </div>
              <div>
                <p className="text-text-main dark:text-white text-xs font-bold whitespace-nowrap">
                  {stat.title}
                </p>
                <p className="text-text-muted dark:text-gray-400 text-[10px]">
                  {stat.subtitle}
                </p>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
