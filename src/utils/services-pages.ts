export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    image: string;
    /** Video de fondo opcional (mp4 corto, sin audio). La imagen queda de poster/fallback. */
    video?: string;
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
  /** Título de la banda naranja de CTA. Fallback: "¿Necesitás asesoramiento?" */
  ctaTitle?: string;
  /** Galería "Fotos de campo": el primer item es la foto destacada (2x2). */
  gallery?: {
    title: string;
    subtitle?: string;
    instagramUrl?: string;
    items: { image: string; caption: string }[];
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
    ctaTitle: "¿Necesitás un electricista matriculado?",
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
    ctaTitle: "¿Querés proteger tu casa o negocio?",
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
    ctaTitle: "¿Querés generar tu propia energía?",
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
    ctaTitle: "¿Querés cargar tu auto en casa?",
  },
  "trabajos-en-altura": {
    slug: "trabajos-en-altura",
    title: "Trabajos en Altura",
    metaTitle:
      "Trabajos en Altura con Hidroelevador en Córdoba | Iluminación Deportiva y Alumbrado - SESC",
    metaDescription:
      "Trabajos en altura con hidroelevador propio de hasta 11 metros en Córdoba: iluminación deportiva LED para canchas y clubes, mantenimiento de alumbrado público y privado, acometidas y trabajos sobre postes y líneas. Personal habilitado, presupuesto sin cargo.",
    hero: {
      image: "/trabajos-altura-1.webp",
      video: "/trabajos-altura-hero.mp4",
      headline: "Trabajos en Altura",
      subheadline:
        "Hidroelevador propio con alcance de hasta 11 metros. Iluminación deportiva, alumbrado público y privado, y trabajos sobre postes y líneas en toda la provincia de Córdoba.",
    },
    sections: [
      {
        title: "Alumbrado Público y Privado",
        image: "/trabajos-altura-3.webp",
        body: "Mantenimiento preventivo y correctivo de alumbrado en calles, barrios privados, countries, playones, estacionamientos e industrias. Recambio de luminarias a LED para reducir el consumo, reparación de fotocélulas y tableros de comando, y revisión completa de columnas. Servicio ágil con equipo propio: diagnóstico, presupuesto y ejecución sin intermediarios.",
      },
      {
        title: "Iluminación Deportiva",
        image: "/trabajos-altura-2.webp",
        body: "Proyectamos, instalamos y renovamos la iluminación de canchas de tenis, pádel, fútbol y predios deportivos. Realizamos recambio de proyectores a tecnología LED, orientación y enfoque de artefactos, y mantenimiento de columnas y estructuras de iluminación. Con nuestro hidroelevador trabajamos directamente sobre la cancha, de forma rápida y segura, sin dañar la superficie de juego.",
      },
      {
        title: "Trabajos sobre Postes y Líneas",
        image: "/trabajos-altura-4.webp",
        body: "Ejecutamos acometidas, tendidos aéreos, reparaciones y adecuaciones sobre postes y líneas de baja tensión. Colocación y recambio de postes, brazos y crucetas, retiro de instalaciones fuera de servicio y montaje de equipamiento en altura. Personal habilitado para trabajo en altura, con elementos de seguridad certificados y señalización de la zona de trabajo.",
      },
    ],
    features: [
      "Hidroelevador propio con alcance de hasta 11 m",
      "Iluminación LED para canchas y clubes",
      "Recambio y reparación de luminarias en altura",
      "Mantenimiento de alumbrado público y privado",
      "Acometidas y tendidos aéreos",
      "Colocación y recambio de postes y brazos",
      "Personal habilitado para trabajo en altura",
      "Cobertura en toda la provincia de Córdoba",
    ],
    ctaTitle: "¿Necesitás trabajos en altura?",
    gallery: {
      title: "Fotos de campo",
      subtitle: "Obras reales de nuestro equipo, sin producción. Así trabajamos.",
      instagramUrl: "https://www.instagram.com/electricidad_sesc",
      items: [
        { image: "/campo/altura-1.webp", caption: "Hidroelevador en predio deportivo — Córdoba" },
        { image: "/campo/altura-2.webp", caption: "Proyectores LED montados sobre poste" },
        { image: "/campo/altura-3.webp", caption: "Brazo extendido sobre columna de alumbrado" },
        { image: "/campo/altura-4.webp", caption: "Recambio LED en cancha de polvo de ladrillo" },
        { image: "/campo/altura-5.webp", caption: "Tablero de comando de alumbrado" },
        { image: "/campo/altura-6.webp", caption: "Acometidas y líneas sobre postes" },
      ],
    },
  },
};

export const servicePagesList = Object.values(servicePages);
