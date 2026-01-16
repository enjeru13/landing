import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Check, Loader2, ChevronDown } from "lucide-react";
import Button from "../ui/Button";

const Contact = () => {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");

    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <section
      className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 space-y-8"
          >
            <div>
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">
                Contáctanos
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-text-main dark:text-white mb-6 leading-tight">
                ¿Listo para escalar <br /> tu negocio?
              </h2>
              <p className="text-lg text-text-muted dark:text-gray-400">
                Hablemos de cómo podemos diseñar una solución digital que
                resuelva tus desafíos empresariales específicos.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-text-muted dark:text-gray-400 font-medium">
                    Escríbenos
                  </p>
                  <a
                    href="mailto:pluma8@techagency.com"
                    className="text-lg font-bold text-text-main dark:text-white hover:text-primary transition-colors"
                  >
                    pluma8@techagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm transition-transform hover:-translate-y-1">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-text-muted dark:text-gray-400 font-medium">
                    Visítanos
                  </p>
                  <p className="text-lg font-bold text-text-main dark:text-white">
                    123 Innovation Dr, Tech City
                  </p>
                </div>
              </div>
            </div>
          </Motion.div>

          {/* Right: Form */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            <div className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-none border border-gray-100 dark:border-gray-800 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  // Mensaje de Éxito
                  <Motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                      <Check className="w-10 h-10" strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-main dark:text-white">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-text-muted dark:text-gray-400 max-w-xs">
                      Gracias por contactarnos. Nuestro equipo revisará tu
                      solicitud y te responderá en menos de 24 horas.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setFormState("idle")}
                      className="mt-6"
                    >
                      Enviar otro mensaje
                    </Button>
                  </Motion.div>
                ) : (
                  // Formulario
                  <Motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-text-main dark:text-gray-300">
                          Nombre
                        </label>
                        <input
                          required
                          className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 dark:text-white"
                          placeholder="Tu nombre"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-text-main dark:text-gray-300">
                          Email
                        </label>
                        <input
                          required
                          className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 dark:text-white"
                          placeholder="juan@empresa.com"
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-text-main dark:text-gray-300">
                        Tipo de Proyecto
                      </label>
                      <div className="relative">
                        <select className="w-full h-12 px-4 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer text-text-main dark:text-white">
                          <option>Desarrollo Web a Medida</option>
                          <option>Aplicación Móvil</option>
                          <option>Sistema ERP / CRM</option>
                          <option>Consultoría SaaS</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-text-main dark:text-gray-300">
                        Mensaje
                      </label>
                      <textarea
                        required
                        className="w-full h-32 p-4 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-gray-400 dark:text-white"
                        placeholder="Cuéntanos brevemente sobre tu proyecto..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full justify-center"
                      disabled={formState === "submitting"}
                    >
                      {formState === "submitting" ? (
                        <>
                          Enviando...
                          <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Enviar Mensaje
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </Motion.form>
                )}
              </AnimatePresence>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
