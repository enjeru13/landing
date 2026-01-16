import { CheckCircle2 } from "lucide-react";

const CaseStudy = () => {
  const caseStudyImage =
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="bg-primary dark:bg-[#0f4b80] rounded-3xl overflow-hidden shadow-2xl flex flex-col-reverse lg:flex-row">
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-size-[20px_20px]"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 opacity-80 border border-white/20 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                <span className="uppercase tracking-widest text-xs font-bold">
                  Caso de Éxito
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                FinTech App & Dashboard
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-md">
                Reingeniería total de la plataforma a una arquitectura
                móvil-first, logrando una experiencia de usuario fluida y
                segura.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8 border-t border-white/20 pt-8">
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-1 flex items-baseline">
                    +45<span className="text-2xl">%</span>
                  </div>
                  <div className="text-sm text-blue-100">Retención Usuario</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-black mb-1 flex items-baseline">
                    4.9<span className="text-xl">★</span>
                  </div>
                  <div className="text-sm text-blue-100">Rating App Store</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[250px] sm:min-h-[350px] lg:min-h-auto relative bg-gray-800">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url('${caseStudyImage}')`,
              }}
            ></div>

            <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-primary/90 lg:to-transparent opacity-90 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
