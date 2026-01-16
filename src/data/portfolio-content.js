import {
  Smartphone,
  Laptop,
  Tablet,
  Monitor,
  Globe,
  Code2,
} from "lucide-react";

export const PORTFOLIO_CONTENT = {
  hero: {
    badge: "Caso de Estudio Destacado",
    titlePart1: "Nexus CRM:",
    titlePart2: "Motor Logístico Global",
    description:
      "Una solución en la nube totalmente integrada para el manejo de inventario, gestión de flotas y analítica en tiempo real en más de 40 países.",
    tags: [
      { label: "Cliente", value: "Logistix Inc." },
      { label: "Sector", value: "Supply Chain" },
      { label: "Tech", value: "React / Go / AWS" },
    ],
    videoThumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", // Dashboard logístico
  },
  projects: [
    {
      id: 1,
      title: "Nova Wallet",
      type: "Mobile App",
      desc: "Billetera cripto de próxima generación con seguridad biométrica y tasas de cambio en tiempo real.",
      icon: Smartphone,
      tech: ["SwiftUI", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2569&auto=format&fit=crop", // Crypto mobile
    },
    {
      id: 2,
      title: "MediStream",
      type: "Web Platform",
      desc: "Asistente de diagnóstico impulsado por IA para departamentos de radiología.",
      icon: Laptop,
      tech: ["React", "Python"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", // Medical dashboard
    },
    {
      id: 3,
      title: "EcoTrack",
      type: "Tablet App",
      desc: "Monitoreo de huella de carbono para cadenas de suministro empresariales.",
      icon: Tablet,
      tech: ["Flutter", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=2613&auto=format&fit=crop", // Eco analytics
    },
    {
      id: 4,
      title: "Estate VR",
      type: "Web Experience",
      desc: "Recorridos de propiedades en 3D inmersivos con capacidades de puesta en escena virtual.",
      icon: Monitor,
      tech: ["Vue.js", "Three.js"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop", // Real Estate
    },
    {
      id: 5,
      title: "RouteMaster",
      type: "SaaS Platform",
      desc: "Gestión de flotas y optimización de rutas para carga pesada.",
      icon: Globe,
      tech: ["Angular", "Mapbox"],
      image:
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2574&auto=format&fit=crop", // Logistics map
    },
    {
      id: 6,
      title: "FlowState",
      type: "SaaS Tool",
      desc: "Herramienta de gestión de proyectos ágil para equipos de software remotos.",
      icon: Code2,
      tech: ["Next.js", "Supabase"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", // Kanban board
    },
  ],
};
