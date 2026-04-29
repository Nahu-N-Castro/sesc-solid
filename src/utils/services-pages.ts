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
  climatizacion: {
    slug: "climatizacion",
    title: "Climatización",
    metaTitle:
      "Climatización y Bombas de Calor en Córdoba | Aerotermia INVERTER - SESC",
    metaDescription:
      "Instalación de bombas de calor por aerotermia para piscinas y climatización en Córdoba. Tecnología INVERTER de bajo consumo. Proyectos a medida con instaladores profesionales.",
    hero: {
      image: "/bomba-calor-1.webp",
      headline: "Climatización",
      subheadline:
        "Bombas de calor por aerotermia con tecnología INVERTER. Eficiencia energética para piscinas y espacios climatizados.",
    },
    sections: [
      {
        title: "Bombas de Calor",
        image: "/bomba-calor-1.webp",
        body: "El principio de funcionamiento de cualquier bomba de calor por aerotermia se basa en el aprovechamiento gratuito e inagotable de la energía contenida en el aire. El calentamiento del agua de la piscina se realiza a través de un intercambiador de titanio (para soportar agua clorada o tratada con sales), en unidades monoblock para instalación exterior.",
      },
      {
        title: "Tecnología INVERTER",
        image: "/bomba-calor-2.webp",
        body: "Nuestras bombas de calor consumen menos energía que otras del mercado gracias a su tecnología tipo INVERTER. Contamos con instaladores profesionales para realizar proyectos a medida según tus necesidades.",
      },
      {
        title: "Calefacción para Espacios Grandes",
        image: "/bomba-calor-3.webp",
        body: "Soluciones de climatización dimensionadas para grandes superficies, manteniendo eficiencia energética y confort.",
      },
    ],
    features: [
      "Bombas de calor para piscinas",
      "Tecnología INVERTER de bajo consumo",
      "Intercambiadores de titanio",
      "Unidades monoblock para exterior",
      "Climatización de grandes espacios",
      "Proyectos a medida",
      "Instaladores profesionales",
      "Garantía de fabricante",
    ],
  },
};

export const servicePagesList = Object.values(servicePages);
