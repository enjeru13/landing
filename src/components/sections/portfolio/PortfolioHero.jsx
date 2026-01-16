import { motion as Motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { PORTFOLIO_CONTENT } from "../../../data/portfolio-content";

const PortfolioHero = () => {
  const { badge, titlePart1, titlePart2, description, tags, videoThumbnail } =
    PORTFOLIO_CONTENT.hero;

  return (
    <section className="w-full pt-32 pb-16 px-4 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <Motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5 flex flex-col gap-6 items-center text-center lg:items-start lg:text-left"
      >
        <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-bold text-primary uppercase tracking-wide">
            {badge}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-text-main dark:text-white">
          {titlePart1} <br />
          <span className="text-text-muted dark:text-gray-400">
            {titlePart2}
          </span>
        </h1>

        <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 mt-2 justify-center lg:justify-start">
          <button className="flex items-center gap-2 px-6 py-3 bg-text-main dark:bg-white text-white dark:text-black font-bold rounded-lg hover:bg-black/80 dark:hover:bg-gray-200 transition-colors shadow-lg">
            <Play size={18} fill="currentColor" /> Ver Showreel
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-white/20 text-text-main dark:text-white font-medium rounded-lg hover:border-primary hover:text-primary transition-colors group">
            Leer Caso{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-white/10 mt-4 justify-center lg:justify-start w-full">
          {tags.map((tag, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs text-text-muted/70 uppercase tracking-wider">
                {tag.label}
              </span>
              <span className="text-sm font-bold text-text-main dark:text-white">
                {tag.value}
              </span>
            </div>
          ))}
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 relative group cursor-pointer"
      >
        <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-30 rounded-full"></div>

        <div className="relative w-full aspect-video bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${videoThumbnail}')` }}
          ></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl transition-transform group-hover:scale-110">
              <Play size={32} fill="currentColor" className="ml-1" />
            </div>
          </div>

          <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-bold text-white border border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            LIVE DEMO
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default PortfolioHero;
