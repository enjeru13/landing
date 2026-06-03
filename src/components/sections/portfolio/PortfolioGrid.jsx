/* eslint-disable no-unused-vars */
import { useState, useCallback } from "react";
import { m as Motion } from "framer-motion";
import {
  ExternalLink,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Lock,
  Mail,
} from "lucide-react";
import { PORTFOLIO_CONTENT } from "../../../data/portfolio-content";

const PlaceholderImage = ({ icon: Icon, type }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
    <Icon className="text-primary/40 dark:text-primary/30" size={48} />
    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-600">
      {type}
    </span>
  </div>
);

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrent((c) => (c - 1 + total) % total);
    },
    [total],
  );

  const next = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrent((c) => (c + 1) % total);
    },
    [total],
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        aria-label="Imagen siguiente"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(i);
            }}
            aria-label={`Ir a imagen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "bg-white w-3" : "bg-white/50 w-1.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const TechTags = ({ tech }) => {
  if (!tech.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span
          key={t}
          className="px-2 py-0.5 bg-primary/8 dark:bg-primary/15 text-primary text-xs font-bold rounded border border-primary/15 dark:border-primary/25"
        >
          {t}
        </span>
      ))}
    </div>
  );
};

const PortfolioGrid = () => {
  const { projects } = PORTFOLIO_CONTENT;

  return (
    <section className="w-full px-4 md:px-10 max-w-7xl mx-auto pb-24">
      <div className="mb-12 border-b border-gray-200 dark:border-white/5 pb-6">
        <h3 className="text-2xl font-bold text-text-main dark:text-white">
          Trabajos Seleccionados
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {projects.map((project, index) => {
          const images = Array.isArray(project.image)
            ? project.image
            : project.image
              ? [project.image]
              : [];

          return (
            <Motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Image area */}
              <div className="relative h-52 w-full overflow-hidden">
                {images.length === 0 ? (
                  <PlaceholderImage icon={project.icon} type={project.type} />
                ) : images.length > 1 ? (
                  <Carousel images={images} />
                ) : (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${images[0]}')` }}
                  />
                )}
                <span className="absolute top-3 left-3 z-10 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-bold rounded">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <project.icon className="text-primary shrink-0" size={20} />
                </div>

                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech tags — always visible */}
                <TechTags tech={project.tech} />

                <div className="mt-auto flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-bold hover:text-accent transition-colors flex items-center gap-1"
                    >
                      Ver Demo <ExternalLink size={14} />
                    </a>
                  ) : project.onRequest ? (
                    <a
                      href="/#contact"
                      className="text-primary text-sm font-bold hover:text-accent transition-colors flex items-center gap-1"
                    >
                      <Mail size={13} /> Demo bajo solicitud
                    </a>
                  ) : (
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded flex items-center gap-1 ${
                        project.private
                          ? "bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    >
                      {project.private ? (
                        <>
                          <Lock size={12} /> Proyecto privado
                        </>
                      ) : (
                        "Demo próximamente"
                      )}
                    </span>
                  )}

                  {(project.storeUrl || project.appStoreUrl) && (
                    <div className="flex items-center gap-2">
                      {project.storeUrl && (
                        <a
                          href={project.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted text-sm font-medium hover:text-primary dark:hover:text-white transition-colors flex items-center gap-1"
                          title="Google Play"
                        >
                          <Smartphone size={14} /> Android
                        </a>
                      )}
                      {project.appStoreUrl && (
                        <a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted text-sm font-medium hover:text-primary dark:hover:text-white transition-colors flex items-center gap-1"
                          title="App Store"
                        >
                          <Smartphone size={14} /> iOS
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioGrid;
