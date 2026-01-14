import {
  Layout,
  ShoppingBag,
  Smartphone,
  Search,
  PenTool,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiAmazonwebservices,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiMysql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const TECH_STACK = [
  {
    name: "React",
    color: "text-[#61DAFB]",
    Icon: SiReact,
  },
  {
    name: "React Native",
    color: "text-[#3178C6]",
    Icon: TbBrandReactNative,
  },
  {
    name: "Node.js",
    color: "text-[#339933]",
    Icon: SiNodedotjs,
  },
  {
    name: "Next.js",
    color: "text-text-main dark:text-white",
    Icon: SiNextdotjs,
  },
  {
    name: "Python",
    color: "text-[#3776AB]",
    Icon: SiPython,
  },
  {
    name: "AWS",
    color: "text-[#FF9900]",
    Icon: SiAmazonwebservices,
  },
  {
    name: "TypeScript",
    color: "text-[#3178C6]",
    Icon: SiTypescript,
  },
  {
    name: "Tailwind CSS",
    color: "text-[#3178C6]",
    Icon: SiTailwindcss,
  },
  {
    name: "Laravel",
    color: "text-[#3178C6]",
    Icon: SiLaravel,
  },
  {
    name: "MySQL",
    color: "text-[#3178C6]",
    Icon: SiMysql,
  },
];

export const WEB_FEATURES = [
  {
    title: "CMS a Medida",
    desc: "Sistemas de gestión de contenido diseñados para adaptarse a tu flujo de trabajo específico, dándote control total sin la complejidad de WordPress.",
    icon: Layout,
  },
  {
    title: "Soluciones E-commerce",
    desc: "Tiendas online de alto rendimiento, seguras y con pasarelas de pago integradas, gestión de inventario y seguimiento de clientes.",
    icon: ShoppingBag,
  },
  {
    title: "Progressive Web Apps",
    desc: "Experiencias nativas entregadas a través del navegador. Funcionan offline, envían notificaciones y cargan instantáneamente.",
    icon: Smartphone,
  },
];

export const LIFECYCLE_STEPS = [
  {
    step: "Semana 1-2",
    title: "Descubrimiento",
    desc: "Analizamos tus requerimientos y definimos el alcance.",
    icon: Search,
  },
  {
    step: "Semana 3",
    title: "Arquitectura",
    desc: "Creamos los planos: base de datos, API y UX.",
    icon: PenTool,
  },
  {
    step: "Semana 4-10",
    title: "Desarrollo Ágil",
    desc: "Sprints de código iterativos con demos semanales.",
    icon: Code2,
  },
  {
    step: "Semana 11",
    title: "QA y Testing",
    desc: "Pruebas rigurosas para asegurar calidad total.",
    icon: Bug,
  },
  {
    step: "Semana 12+",
    title: "Despliegue",
    desc: "Lanzamiento a producción y soporte continuo.",
    icon: Rocket,
  },
];
