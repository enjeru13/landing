import {
  TrendingUp,
  PackageSearch,
  Users,
  Waypoints,
  Landmark,
  Cloud,
  CreditCard,
  MessageSquare,
  PieChart,
  ShieldCheck,
  Mail,
  Shield,
  FileCheck,
  Lock,
  Globe2,
  FileClock,
  FileText,
} from "lucide-react";

export const ERP_HERO = {
  badge: "Versión 4.0 Disponible",
  titlePart1: "Orquesta la Inteligencia",
  titlePart2: "de tu Empresa",
  description:
    "Una suite ERP & CRM escalable diseñada para unificar operaciones, desde la logística hasta la toma de decisiones directivas, en un ecosistema blindado.",
  ctaPrimary: "Solicitar Demo",
  ctaSecondary: "Ver Video Tour",
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "2.5x", label: "ROI Promedio" },
  ],
  floatingWidget: {
    icon: TrendingUp,
    label: "Eficiencia Operativa",
    value: "+24.8%",
    sub: "Optimización activa",
  },
};

export const ERP_ARCHITECTURE = {
  title: "Arquitectura de Sistema Integral",
  description:
    "Nuestro enfoque modular permite seleccionar y escalar los componentes que se ajustan a tus necesidades operativas específicas, asegurando que solo pagas por lo que usas.",
  cards: [
    {
      id: 1,
      title: "Inventario Inteligente",
      desc: "Rastreo de stock en tiempo real con aprovisionamiento automatizado y modelos predictivos de cadena de suministro.",
      icon: PackageSearch,
    },
    {
      id: 2,
      title: "Actualizaciones Automáticas",
      desc: "No vuelva a preocuparse por los parches. Desplegamos nuevas funcionalidades y correcciones de seguridad al instante a través de la nube.",
      icon: Cloud,
    },
    {
      id: 3,
      title: "CRM Unificado",
      desc: "Visión de 360 grados de los datos del cliente, visibilidad del pipeline de ventas y engagement automatizado.",
      icon: Waypoints,
    },
    {
      id: 4,
      title: "Accesibilidad 24/7",
      desc: "Acceda a sus paneles de ERP y CRM de forma segura desde cualquier dispositivo, en cualquier parte del mundo.",
      icon: Globe2,
    },
  ],
};

export const ERP_ANALYTICS = {
  title: "Convierte Datos en Acción Directa",
  description:
    "Ve más allá de las hojas de cálculo. Nuestro dashboard de análisis visualizado te da insights en tiempo real sobre la asignación de recursos y cuellos de botella operativos.",
  benefits: [
    "Modelado predictivo de flujo de caja",
    "Mapas de calor de rotación de inventario",
    "Controles de acceso basados en roles (RBAC)",
  ],
  chartData: [
    { name: "Mfg", value: 40 },
    { name: "Log", value: 65 },
    { name: "Ventas", value: 85 },
    { name: "RRHH", value: 55 },
  ],
  usersData: [
    { name: "Mon", value: 4000 },
    { name: "Tue", value: 3000 },
    { name: "Wed", value: 2000 },
    { name: "Thu", value: 2780 },
    { name: "Fri", value: 1890 },
    { name: "Sat", value: 2390 },
    { name: "Sun", value: 3490 },
  ],
};

export const ERP_INTEGRATIONS = {
  title: "Conecta con tu Ecosistema",
  description:
    "Nos integramos nativamente con más de 200 herramientas empresariales, asegurando que tus datos fluyan sin problemas entre departamentos sin middleware personalizado.",
  items: [
    {
      id: 1,
      name: "CloudStorage",
      icon: Cloud,
      color: "text-blue-500",
    },
    {
      id: 2,
      name: "PayFlow",
      icon: CreditCard,
      color: "text-green-500",
    },
    {
      id: 3,
      name: "CommUnit",
      icon: MessageSquare,
      color: "text-purple-500",
    },
    {
      id: 4,
      name: "DataViz",
      icon: PieChart,
      color: "text-orange-500",
    },
    {
      id: 5,
      name: "AuthGuard",
      icon: ShieldCheck,
      color: "text-indigo-500",
    },
    {
      id: 6,
      name: "MailStream",
      icon: Mail,
      color: "text-red-500",
    },
  ],
};

export const ERP_SECURITY = {
  badge: "Grado Empresarial",
  title: "Estándares de Seguridad Sin Concesiones",
  description:
    "Tus datos son tu activo más valioso. Los protegemos con encriptación de nivel bancario y cumplimiento estricto de las normativas de privacidad globales.",
  cta: "Leer Whitepaper de Seguridad",
  cards: [
    {
      id: 1,
      title: "SOC2 Tipo II",
      desc: "Plataforma totalmente auditada anualmente por firmas de seguridad independientes.",
      icon: FileCheck,
    },
    {
      id: 2,
      title: "Encriptación End-to-End",
      desc: "AES-256 para datos en reposo y TLS 1.3 para todos los datos en tránsito.",
      icon: Lock,
    },
    {
      id: 3,
      title: "Soberanía de Datos",
      desc: "Elige la ubicación de tu centro de datos para cumplir con leyes locales (GDPR, CCPA).",
      icon: Globe2,
    },
    {
      id: 4,
      title: "Logs Inmutables",
      desc: "Pistas de auditoría completas e inalterables para cada acción realizada en el sistema.",
      icon: FileClock,
    },
  ],
};
