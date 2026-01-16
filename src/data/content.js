// src/data/content.js
import {
  Code2,
  Smartphone,
  Database,
  CloudCog,
  Zap,
  Layout,
  Search,
  PencilRuler,
  Terminal,
  Rocket,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Portafolio", href: "/portfolio" },
  { name: "Nosotros", href: "/nosotros" },
];

export const SERVICES = [
  {
    icon: Code2,
    title: "Desarrollo Web a Medida",
    desc: "Frontend y Backend robustos construidos con React, Node.js y arquitecturas modernas escalables.",
    link: "/servicios/web-development",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    desc: "Apps nativas y multiplataforma (iOS & Android) diseñadas para retener usuarios y maximizar el engagement.",
    link: "/servicios/mobile-development",
  },
  {
    icon: Database,
    title: "Sistemas ERP & CRM",
    desc: "Integraciones de gestión empresarial para optimizar operaciones, inventarios y flujos de trabajo complejos.",
    link: "/servicios/erp-crm",
  },
];

export const PROJECTS = [
  {
    category: "Plataforma SaaS",
    title: "FinTech Dashboard",
    desc: "Herramienta de análisis financiero en tiempo real para firmas de trading de alta frecuencia.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    cta: "Ver Caso de Estudio",
  },
  {
    category: "Solución Logística",
    title: "Logistics Pro",
    desc: "Sistema end-to-end para la gestión de cadenas de suministro y optimización de rutas de flotas.",
    image:
      "https://images.unsplash.com/photo-1566576912321-158fa7599663?auto=format&fit=crop&w=800&q=80",
    cta: "Ver Caso de Estudio",
  },
];

export const VALUES_FEATURES = [
  {
    icon: Zap,
    title: "Prototipado Rápido",
    desc: "Pasamos de la idea al MVP funcional más rápido que las agencias tradicionales gracias a nuestros aceleradores de código.",
  },
  {
    icon: Layout,
    title: "Arquitectura Escalable",
    desc: "Sistemas diseñados modularmente para soportar millones de peticiones y crecer junto con tu negocio sin deuda técnica.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Descubrimiento",
    desc: "Profundizamos en la lógica de tu negocio mediante investigación y talleres de estrategia.",
    icon: Search,
    color: "text-primary",
    borderColor: "group-hover:border-primary",
  },
  {
    step: "02",
    title: "Diseño UI/UX",
    desc: "Creamos prototipos de alta fidelidad que trazan el viaje del usuario con precisión milimétrica.",
    icon: PencilRuler,
    color: "text-text-main dark:text-white",
    borderColor: "group-hover:border-text-main dark:group-hover:border-white",
  },
  {
    step: "03",
    title: "Desarrollo",
    desc: "Sprints de ingeniería ágil utilizando frameworks modernos para construir arquitecturas robustas.",
    icon: Terminal,
    color: "text-text-main dark:text-white",
    borderColor: "group-hover:border-text-main dark:group-hover:border-white",
  },
  {
    step: "04",
    title: "Despliegue",
    desc: "Pruebas rigurosas seguidas de un lanzamiento fluido y configuración de infraestructura escalable.",
    icon: Rocket,
    color: "text-accent",
    borderColor: "group-hover:border-accent",
  },
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "GitHub", url: "#" },
];

export const FOOTER_LINKS = [
  {
    title: "Servicios",
    links: [
      { name: "Desarrollo Web", href: "/servicios/web-development" },
      { name: "Apps Móviles", href: "/servicios/mobile-development" },
      { name: "Sistemas ERP & CRM", href: "/servicios/erp-crm" },
      { name: "Arquitectura SaaS", href: "/servicios/saas" },
    ],
  },
];
