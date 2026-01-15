import { motion as Motion } from "framer-motion";
import { Shield, FileText } from "lucide-react";
import { ERP_SECURITY } from "../../../data/erp-content";

const ErpSecurity = () => {
  const { badge, title, description, cta, cards } = ERP_SECURITY;

  return (
    <section className="py-24 bg-erp-primary relative overflow-hidden text-white">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-erp-accent/20 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start text-left">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md"
            >
              <Shield size={14} className="text-erp-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                {badge}
              </span>
            </Motion.div>

            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight"
            >
              {title}
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl"
            >
              {description}
            </Motion.p>

            <Motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-erp-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all shadow-xl shadow-black/10 flex items-center gap-2"
            >
              <FileText size={18} />
              {cta}
            </Motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <Motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-erp-accent/50 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-erp-accent group-hover:text-erp-primary transition-colors duration-300 text-erp-accent">
                  <card.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-erp-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-blue-100/70 leading-relaxed">
                  {card.desc}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErpSecurity;
