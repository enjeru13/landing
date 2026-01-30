import {
  Lightbulb,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Link as LinkIcon,
  Mail,
} from "lucide-react";

export const ABOUT_CONTENT = {
  hero: {
    badge: "Quiénes Somos?",
    title: "Innovando con Propósito y Pasión",
    description:
      "Cerramos la brecha entre tecnología compleja y diseño centrado en el humano. Fundados en la creencia de que el software debe resolver problemas reales, construimos productos digitales que importan.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  stats: [
    {
      value: "30+",
      label: "Proyectos Entregados",
      sub: "En Diferentes Sectores",
    },
    { value: "20+", label: "Clientes Globales", sub: "Confían en nosotros" },
    {
      value: "5+",
      label: "Años de Experiencia",
      sub: "En ingeniería de software",
    },
  ],
  values: {
    title: "Nuestros Valores",
    subtitle:
      "Los principios que guían cada línea de código que escribimos y cada interacción que tenemos.",
    list: [
      {
        title: "Innovación",
        desc: "Empujando límites con nuevas soluciones tecnológicas para resolver viejos problemas.",
        icon: Lightbulb,
      },
      {
        title: "Calidad",
        desc: "Creando código limpio y mantenible que resiste la prueba del tiempo y la escala.",
        icon: ShieldCheck,
      },
      {
        title: "Agilidad",
        desc: "Adaptándonos rápidamente a las necesidades cambiantes de tu negocio con metodologías flexibles.",
        icon: Zap,
      },
      {
        title: "Compromiso",
        desc: "Tu éxito es nuestro éxito. Somos socios en tu viaje, en cada paso del camino.",
        icon: HeartHandshake,
      },
    ],
  },
  team: {
    title: "Conoce las Mentes detrás del Código",
    subtitle: "Un equipo de ingenieros unidos por la pasión y la excelencia.",
    members: [
      {
        name: "Sarah Jenkins",
        role: "CTO & Co-Founder",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        socials: [LinkIcon, Mail],
      },
      {
        name: "David Chen",
        role: "CTO & Co-Founder",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        socials: [LinkIcon, Mail],
      },
      {
        name: "Maria Rodriguez",
        role: "CTO & Co-Founder",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        socials: [LinkIcon, Mail],
      },
    ],
  },
};
