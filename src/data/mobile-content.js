import {
  Moon,
  Accessibility,
  Smartphone,
  Zap,
  CheckCircle2,
  Fingerprint,
  WifiOff,
  BellRing,
  CreditCard,
  MapPin,
  Cloud,
} from "lucide-react";
import { SiSwift, SiKotlin, SiFlutter, SiReact } from "react-icons/si";

export const MOBILE_HERO = {
  badge: "Expertos en Desarrollo Móvil",
  titlePart1: "Experiencias Móviles Intuitivas para",
  titleHighlight1: "iOS",
  titlePart2: "&",
  titleHighlight2: "Android",
  description:
    "Construimos aplicaciones móviles escalables y de alto rendimiento que los usuarios aman, utilizando las últimas tecnologías nativas y multiplataforma.",
  ctaPrimary: "Ver Portafolio",
  ctaSecondary: "Nuestro Proceso",
  stats: [
    {
      title: "99.9% Uptime",
      subtitle: "Nivel Enterprise",
      icon: CheckCircle2,
      color: "text-green-400",
      delay: 0,
    },
    {
      title: "Velocidad Nativa",
      subtitle: "60 FPS Fluidos",
      icon: Zap,
      color: "text-primary",
      delay: 1.5,
    },
  ],
};

export const MOBILE_PHILOSOPHY = {
  title: "Filosofía de Diseño Mobile-First",
  subtitle:
    "No adaptamos pantallas de escritorio a móviles; diseñamos desde cero pensando en el pulgar, la batería y la experiencia táctil.",
  imageAlt: "Diseño de interfaz móvil en modo oscuro",
  items: [
    {
      id: 1,
      title: "Navegación 'Thumb-Friendly'",
      desc: "Diseñamos interacciones para la 'zona del pulgar', asegurando que las acciones clave sean alcanzables con una sola mano.",
      icon: Smartphone,
    },
    {
      id: 2,
      title: "Dark Mode Nativo",
      desc: "Cada app incluye un tema oscuro optimizado para reducir la fatiga visual y extender la duración de la batería.",
      icon: Moon,
    },
    {
      id: 3,
      title: "Accesibilidad Inclusiva",
      desc: "Cumplimiento estricto de WCAG 2.1. Tu aplicación será usable por todos, sin importar sus capacidades visuales o motoras.",
      icon: Accessibility,
    },
  ],
};

export const MOBILE_TECH = {
  title: "La Tecnología Correcta para tu Visión",
  description:
    "No usamos una sola herramienta para todo. Seleccionamos el stack tecnológico perfecto basándonos en tus necesidades de rendimiento, presupuesto y tiempo.",
  cards: [
    {
      id: 1,
      name: "Swift",
      type: "Nativo iOS",
      description:
        "Rendimiento inigualable y acceso a las últimas características de iOS directamente de Apple.",
      bestFor: "UI Compleja, AR/VR, Computación Pesada",
      icon: SiSwift,
      color: "text-orange-500",
      bgIcon: "bg-gray-100 dark:bg-white",
      badgeColor: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    },
    {
      id: 2,
      name: "Kotlin",
      type: "Nativo Android",
      description:
        "Código moderno, conciso y seguro para aplicaciones Android robustas, el estándar de Google.",
      bestFor: "Integración profunda, Tareas en 2do plano",
      icon: SiKotlin,
      color: "text-purple-600",
      bgIcon: "bg-gray-100 dark:bg-white",
      badgeColor: "bg-green-500/10 border-green-500/20 text-green-400",
    },
    {
      id: 3,
      name: "Flutter",
      type: "Multiplataforma",
      description:
        "El toolkit de Google para construir aplicaciones hermosas y compiladas nativamente desde un solo código.",
      bestFor: "Startups, UI Personalizada, Look Consistente",
      icon: SiFlutter,
      color: "text-blue-400",
      bgIcon: "bg-[#042B59]",
      badgeColor: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    },
    {
      id: 4,
      name: "React Native",
      type: "Multiplataforma",
      description:
        "Aprovecha las habilidades web para crear apps nativas usando JavaScript y TypeScript.",
      bestFor: "Apps de Datos, Iteración Rápida",
      icon: SiReact,
      color: "text-[#61dafb]",
      bgIcon: "bg-[#20232a]",
      badgeColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    },
  ],
};

export const MOBILE_FEATURES = {
  title: "Potencia de Nivel Empresarial",
  description:
    "Integramos capacidades avanzadas del dispositivo para crear experiencias fluidas, seguras y potentes.",
  items: [
    {
      id: 1,
      title: "Seguridad Biométrica",
      desc: "Inicio de sesión seguro y sin fricción integrando FaceID y TouchID para máxima protección del usuario.",
      icon: Fingerprint,
    },
    {
      id: 2,
      title: "Modo Offline",
      desc: "Sincronización de base de datos local (SQLite/Realm) asegurando que tu app funcione perfectamente sin internet.",
      icon: WifiOff,
    },
    {
      id: 3,
      title: "Notificaciones Smart",
      desc: "Push notifications segmentadas y con rich-media para re-conectar con los usuarios en el momento exacto.",
      icon: BellRing,
    },
    {
      id: 4,
      title: "Pagos In-App",
      desc: "Integración fluida con Apple Pay y Google Pay para una monetización sin fricción.",
      icon: CreditCard,
    },
    {
      id: 5,
      title: "Geolocalización",
      desc: "Rastreo preciso, geofencing e integración de mapas para servicios basados en ubicación.",
      icon: MapPin,
    },
    {
      id: 6,
      title: "Sincronización Cloud",
      desc: "Sincronización de datos en tiempo real entre todos los dispositivos del usuario para una experiencia continua.",
      icon: Cloud,
    },
  ],
};
