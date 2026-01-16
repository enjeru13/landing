/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { SERVICES } from "../../data/content";
import { motion as Motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ServiceCard = ({ icon: Icon, title, desc, link }) => {
  const CardContent = (
    <div className="group h-full p-8 rounded-2xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] dark:hover:shadow-none hover:-translate-y-1 cursor-pointer flex flex-col">
      {/* Icono Principal */}
      <div className="w-12 h-12 rounded-lg bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon strokeWidth={1.5} className="w-7 h-7" />
      </div>

      {/* Título y Descripción */}
      <div className="grow">
        <h4 className="font-display font-bold text-xl text-text-main dark:text-white mb-3">
          {title}
        </h4>
        <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed mb-6">
          {desc}
        </p>
      </div>

      {link && (
        <div className="pt-4 border-t border-gray-50 dark:border-gray-800/50 flex items-center justify-between group-hover:border-primary/20 transition-colors">
          <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
            Saber más
          </span>
          <div className="text-primary transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-2px]">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Motion.div variants={cardVariants}>
      {link ? (
        <Link to={link} className="block h-full">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </Motion.div>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="py-24 bg-background-light dark:bg-[#15171b]"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-10 mb-16 items-start md:items-end justify-between">
          <div className="max-w-2xl">
            <Motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-wider text-sm mb-3"
            >
              Nuestra Experiencia
            </Motion.h2>

            <Motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-3xl md:text-4xl text-text-main dark:text-white leading-tight"
            >
              Soluciones integrales para <br /> la era digital.
            </Motion.h3>
          </div>

          <Motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted dark:text-gray-400 max-w-sm leading-relaxed"
          >
            Desde la idea conceptual hasta el despliegue final, proporcionamos
            la tecnología que impulsa el valor de tu negocio.
          </Motion.p>
        </div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Services;
