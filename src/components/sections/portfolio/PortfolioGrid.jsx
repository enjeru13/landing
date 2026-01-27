import { motion as Motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO_CONTENT } from "../../../data/portfolio-content";

const PortfolioGrid = () => {
  const { projects } = PORTFOLIO_CONTENT;

  const displayedProjects = projects.slice(0, 6);

  return (
    <section className="w-full px-4 md:px-10 max-w-7xl mx-auto pb-24">
      <div className="mb-12 border-b border-gray-200 dark:border-white/5 pb-6">
        <h3 className="text-2xl font-bold text-text-main dark:text-white">
          Trabajos Seleccionados
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {displayedProjects.map((project, index) => (
          <Motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="relative h-64 w-full bg-gray-100 dark:bg-[#18181a] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>

              <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 z-20">
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Tecnologías
                </span>
                <div className="flex gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-white/20 text-white text-xs font-bold rounded border border-white/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col p-6 gap-4 flex-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <project.icon className="text-primary" size={20} />
                </div>
                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="mt-auto flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                <button className="text-primary text-sm font-bold hover:text-accent transition-colors flex items-center gap-1">
                  Ver Demo <ExternalLink size={14} />
                </button>
                <a
                  href="#"
                  className="text-text-muted text-sm font-medium hover:text-text-main dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
