import { motion as Motion } from "framer-motion";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { CheckCircle2, Zap, DollarSign, Share2, Download } from "lucide-react";
import { ERP_ANALYTICS } from "../../../data/erp-content";

const ErpAnalytics = () => {
  const { title, description, benefits, chartData, usersData } = ERP_ANALYTICS;

  return (
    <section className="py-24 bg-white dark:bg-erp-surface-dark border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          <div className="lg:w-1/3 flex flex-col gap-8">
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-erp-text-main dark:text-white tracking-tight mb-4">
                {title}
              </h2>
              <p className="text-lg text-erp-text-sub dark:text-gray-400 leading-relaxed">
                {description}
              </p>
            </Motion.div>

            <Motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-erp-primary dark:text-erp-accent shrink-0"
                    size={20}
                  />
                  <span className="text-erp-text-main dark:text-gray-200 font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </Motion.ul>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3 w-full bg-erp-bg-light dark:bg-[#1a1d21] border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-2xl relative overflow-hidden group"
          >
            <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-white/5 pb-4">
              <div>
                <h4 className="font-bold text-erp-text-main dark:text-white text-lg">
                  Resumen de Rendimiento
                </h4>
                <p className="text-xs text-erp-text-sub dark:text-gray-500">
                  Q3 2023 vs Q4 2023
                </p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-md bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-erp-text-sub hover:bg-gray-50 transition-colors">
                  <Download size={12} /> Exportar
                </button>
                <button className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-md bg-erp-primary text-white hover:bg-erp-primary-hover transition-colors">
                  <Share2 size={12} /> Compartir
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-erp-surface-dark p-5 rounded-lg border border-gray-100 dark:border-white/5 shadow-sm flex flex-col">
                <h5 className="text-xs font-bold text-erp-text-sub uppercase mb-6 tracking-wider">
                  Ingresos por Sector
                </h5>

                <div className="h-40 w-full min-w-0 grow">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <Tooltip
                        cursor={{ fill: "transparent" }}
                        contentStyle={{
                          backgroundColor: "#1c1f22",
                          borderColor: "#333",
                          color: "#fff",
                          fontSize: "12px",
                        }}
                      />
                      <Bar
                        dataKey="value"
                        fill="#0d4659"
                        radius={[4, 4, 0, 0]}
                        animationDuration={1500}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-erp-text-sub uppercase px-2 font-mono">
                  {chartData.map((d, i) => (
                    <span key={i}>{d.name}</span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-erp-surface-dark p-4 rounded-lg border border-gray-100 dark:border-white/5 flex flex-col justify-between shadow-sm hover:border-erp-accent/50 transition-colors">
                  <div className="bg-erp-accent/10 w-8 h-8 rounded-full flex items-center justify-center mb-2">
                    <Zap size={16} className="text-erp-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-erp-text-main dark:text-white">
                      12ms
                    </div>
                    <div className="text-[10px] text-erp-text-sub font-medium uppercase">
                      Latencia Media
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-erp-surface-dark p-4 rounded-lg border border-gray-100 dark:border-white/5 flex flex-col justify-between shadow-sm hover:border-green-500/50 transition-colors">
                  <div className="bg-green-100 dark:bg-green-900/20 w-8 h-8 rounded-full flex items-center justify-center mb-2">
                    <DollarSign
                      size={16}
                      className="text-green-600 dark:text-green-400"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-erp-text-main dark:text-white">
                      $42k
                    </div>
                    <div className="text-[10px] text-erp-text-sub font-medium uppercase">
                      Ahorro Costos
                    </div>
                  </div>
                </div>

                <div className="col-span-2 bg-erp-primary dark:bg-[#09232d] p-4 rounded-lg text-white relative overflow-hidden group/chart">
                  <div className="relative z-10 flex justify-between items-end mb-2">
                    <div>
                      <div className="text-xs opacity-70 mb-1">
                        Usuarios Activos
                      </div>
                      <div className="text-2xl font-bold">8,402</div>
                    </div>
                    <div className="text-xs text-erp-accent font-bold bg-erp-accent/20 px-2 py-1 rounded">
                      +12%
                    </div>
                  </div>

                  <div className="h-16 w-full -mb-4 min-w-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={usersData}>
                        <defs>
                          <linearGradient
                            id="colorUsers"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#4DBCCB"
                              stopOpacity={0.4}
                            />
                            <stop
                              offset="95%"
                              stopColor="#4DBCCB"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#4DBCCB"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#colorUsers)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ErpAnalytics;
