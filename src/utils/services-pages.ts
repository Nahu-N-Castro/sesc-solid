export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    image: string;
    headline: string;
    subheadline: string;
  };
  sections: { title: string; body: string; image?: string }[];
  features: string[];
  brands?: {
    title: string;
    subtitle?: string;
    items: { name: string; logo?: string }[];
  };
};

export const servicePages: Record<string, ServicePage> = {
  electricidad: {
    slug: "electricidad",
    title: "Electricidad Integral",
    metaTitle:
      "Electricidad Integral en Córdoba | Industrial, Residencial y Comercial - SESC",
    metaDescription:
      "Servicios eléctricos integrales en Córdoba: instalaciones industriales, residenciales y comerciales, tableros BT, luminarias, certificaciones eléctricas hasta 10KVA y mantenimiento preventivo.",
    hero: {
      image: "/industrial.webp",
      headline: "Electricidad Integral",
      subheadline:
        "Instalaciones, mantenimiento y certificaciones para industrias, comercios y hogares en Córdoba.",
    },
    sections: [
      {
        title: "Instalaciones Industriales",
        image: "/industrial.webp",
        body: "Diseñamos y montamos instalaciones eléctricas para plantas de producción, centros comerciales y PYMES. Armamos tableros BT, instalamos luminarias industriales, redes Ethernet y sistemas de tensión estabilizada UPS para oficinas. Realizamos reparaciones, reformas, planes de mantenimiento preventivo (MTO), optimización para ahorro de energía, automatizaciones y certificaciones eléctricas hasta 10KVA.",
      },
      {
        title: "Instalaciones Residenciales",
        image: "/domiciliaria.webp",
        body: "Proyectos completos de instalaciones eléctricas para casas, departamentos y edificios residenciales. Diseñamos y armamos tableros, instalamos luminarias y cámaras de seguridad, redes Ethernet, UPS, optimización para ahorro de energía, automatizaciones y certificaciones eléctricas hasta 10KVA.",
      },
      {
        title: "Instalaciones Comerciales",
        image: "/comercial.webp",
        body: "Soluciones integrales para locales, oficinas y comercios. Proyectos de instalaciones, diseño y armado de tableros BT, luminarias, cámaras, cercos eléctricos, reparaciones, reformas, optimización energética, colocación de pilares monofásicos y trifásicos, y certificaciones eléctricas hasta 10KVA.",
      },
    ],
    features: [
      "Tableros eléctricos BT",
      "Luminarias industriales y comerciales",
      "Redes Ethernet estructuradas",
      "Sistemas UPS",
      "Mantenimiento preventivo MTO",
      "Certificaciones hasta 10KVA",
      "Pilares monofásicos y trifásicos",
      "Automatizaciones y programación",
    ],
  },
  "seguridad-electronica": {
    slug: "seguridad-electronica",
    title: "Seguridad Electrónica",
    metaTitle:
      "Cámaras de Seguridad y Alarmas en Córdoba | Hikvision, Dahua - SESC",
    metaDescription:
      "Instalación de cámaras de seguridad IP y analógicas, alarmas, cercos eléctricos perimetrales en Córdoba. Marcas Dahua y Hikvision, instalación profesional con garantía.",
    hero: {
      image: "/camaras.webp",
      headline: "Seguridad Electrónica",
      subheadline:
        "Cámaras de seguridad, alarmas y cercos perimetrales para proteger tu hogar o negocio en Córdoba.",
    },
    sections: [
      {
        title: "Cámaras de Seguridad",
        image: "/camaras.webp",
        body: "Asesoramiento, diseño, provisión, instalación, soporte técnico y mantenimiento de sistemas de videovigilancia. Instalamos cámaras analógicas con DVR y cámaras IP con NVR. Atendemos hogares, negocios, comercios, industrias y sector público. Trabajamos con marcas líderes como Dahua y Hikvision, equipos homologados y certificados bajo normas internacionales.",
      },
      {
        title: "Alarmas",
        image: "/alarma.webp",
        body: "Sistemas de alarma profesionales para casas y negocios. Realizamos una evaluación de seguridad para determinar los puntos clave a proteger, elegimos los componentes adecuados a tus necesidades y los instalamos garantizando protección en tiempo real.",
      },
      {
        title: "Cercos Eléctricos Perimetrales",
        image: "/cerco.webp",
        body: "El sistema más eficaz para detectar e impedir el ingreso de intrusos antes de que estén en tu propiedad. Tendido de alambre de aluminio de 6 hilos según el lugar a proteger más electrificador-alarma con pulsos de alto voltaje y bajo amperaje (NO LETAL). Disuasión visual con cartelería de advertencia.",
      },
    ],
    features: [
      "Cámaras IP y analógicas",
      "DVR / NVR profesionales",
      "Marcas Dahua y Hikvision",
      "Visión nocturna",
      "Acceso remoto desde el celular",
      "Alarmas inalámbricas",
      "Cercos eléctricos perimetrales",
      "Mantenimiento de sistemas existentes",
    ],
  },
  "energia-solar": {
    slug: "energia-solar",
    title: "Energías Renovables",
    metaTitle:
      "Paneles Solares en Córdoba | OnGrid, OffGrid e Híbridos - SESC",
    metaDescription:
      "Instalación de paneles solares en Córdoba. Sistemas fotovoltaicos OnGrid, OffGrid e Híbridos. Asesoría técnica, dimensionamiento, vida útil 25-30 años, amortización razonable.",
    hero: {
      image: "/panel.webp",
      headline: "Energías Renovables",
      subheadline:
        "Sistemas fotovoltaicos OnGrid, OffGrid e Híbridos. Autoabastecimiento energético con vida útil de 25 a 30 años.",
    },
    sections: [
      {
        title: "Paneles Solares",
        image: "/panel.webp",
        body: "Los paneles solares son un sistema de autoabastecimiento energético con una vida útil de 25-30 años. Su instalación no debe tomarse a la ligera: cuidamos cada componente, desde las células fotovoltaicas hasta los soportes. Confianza basada en experiencia comprobada.",
      },
      {
        title: "Asesoría Técnica Especializada",
        image: "/panel-2.webp",
        body: "Para asegurar una instalación eficiente, que se amortice en un plazo razonable y que sea segura, evaluamos múltiples factores. Contamos con asesoría técnica especializada con ingenieros experimentados en equipamiento y arquitecturas de instalación. Ofrecemos sistemas OffGrid, OnGrid e Híbridos según tus necesidades.",
      },
    ],
    features: [
      "Sistemas OnGrid (conectados a red)",
      "Sistemas OffGrid (autónomos)",
      "Sistemas Híbridos con baterías",
      "Asesoría técnica con ingenieros",
      "Dimensionamiento personalizado",
      "Trámites con la distribuidora",
      "Garantía de paneles 25 años",
      "Amortización en plazos razonables",
    ],
  },
  "movilidad-electrica": {
    slug: "movilidad-electrica",
    title: "Movilidad Eléctrica",
    metaTitle:
      "Cargadores para Autos Eléctricos en Córdoba | Monofásico y Trifásico - SESC",
    metaDescription:
      "Instalación de cargadores para autos eléctricos en Córdoba. Monofásico y trifásico, todas las marcas. Certificado habilitante para tarifa bonificada de EPEC, análisis de factibilidad y Apto Eléctrico ERSEP. Cobertura provincial.",
    hero: {
      image: "/movilidad-electrica-1.webp",
      headline: "Movilidad Eléctrica",
      subheadline:
        "Instalación profesional de estaciones de carga y cargadores para autos eléctricos. Todas las marcas. De tipo Monofásico o Trifásico. Con certificado Apto Eléctrico ERSEP para acceder a la tarifa diferenciada de movilidad eléctrica de EPEC.",
    },
    sections: [
      {
        title: "Instalación de Cargadores Monofásicos y Trifásicos",
        image: "/movilidad-electrica-2.webp",
        body: "Instalamos puestos de carga para autos eléctricos en hogares, comercios e industrias. Trabajamos con sistemas monofásicos y trifásicos según la potencia disponible y las necesidades del vehículo, garantizando una instalación segura, eficiente y dimensionada a medida.",
      },
      {
        title: "Análisis de Factibilidad y Proyecto a Medida",
        image: "/movilidad-electrica-3.webp",
        body: "Realizamos un análisis de factibilidad eléctrica previo en cada instalación para determinar la potencia disponible, tipo de tablero, protecciones adecuadas y cableado correspondiente. Diseñamos un proyecto a medida para que tu cargador o estación de carga funcione al máximo rendimiento, sin sobrecargar la instalación existente y evitando el riesgo eléctrico.",
      },
      {
        title: "Certificaciones EPEC y ERSEP",
        image: "/movilidad-electrica-4.webp",
        body: "Entregamos el Certificado Apto Eléctrico correspondiente de ERSEP, con el mismo podrás acceder a la tarifa diferenciada de EPEC para usuarios con vehículos eléctricos. Además, dicho certificado avala que tu instalación cumple con las normas vigentes. Contamos con instaladores profesionales matriculados, servicio rápido y eficiente, con cobertura en toda la provincia de Córdoba.",
      },
    ],
    features: [
      "Servicio rápido con cobertura provincial",
      "Análisis de factibilidad eléctrica",
      "Instalación bajo Norma AEA",
      "Certificado Apto Eléctrico ERSEP",
      "Instaladores profesionales matriculados",
      "Materiales normalizados IRAM",
      "Instalación para todas las marcas",
      "Garantía de instalación",
    ],
    brands: {
      title: "Marcas con las que trabajamos",
      subtitle: "Instalamos cargadores compatibles con todas las marcas de autos eléctricos e híbridos disponibles en Argentina.",
      items: [
        { name: "BAIC", logo: "/brands/cars/baic.webp" },
        { name: "BYD", logo: "/brands/cars/byd.webp" },
        { name: "Chevrolet", logo: "/brands/cars/chevrolet.webp" },
        { name: "Fiat", logo: "/brands/fiat.webp" },
        { name: "GWM", logo: "/brands/cars/gwm.webp" },
        { name: "JAC", logo: "/brands/cars/jac.webp" },
        { name: "Jeep", logo: "/brands/jeep.webp" },
        { name: "JMEV", logo: "/brands/cars/jmev.webp" },
        { name: "Nissan", logo: "/brands/nissan.webp" },
        { name: "Renault", logo: "/brands/cars/renault.webp" },
        { name: "Toyota", logo: "/brands/cars/toyota.webp" },
      ],
    },
  },
};

export const servicePagesList = Object.values(servicePages);
