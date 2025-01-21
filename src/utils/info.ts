export type ServicesType =
  | "Electricidad Integral"
  | "Seguridad Electrónica"
  | "Energias Renovables"
  | "Climatización";

export type ServiceDetail = {
  icon: string;
  title: string;
  description: string;
};

export type Testimonials = {
  description: string;
  rate: number;
  name: string;
  photoUrl: string;
};

export const servicesMap = new Map<ServicesType, ServiceDetail[]>([
  [
    "Electricidad Integral",
    [
      {
        icon: "industrial.jpg",
        title: "Industrial",
        description:
          " Proyectos de Instalaciones y Montajes  Diseño y Armado de Tableros BT  Luminarias  Instalación de red ETH y tensión estabilizada UPS para oficinas  Reparaciones y Reformas de instalaciones  Planes MTO Preventivos y Predictivos  Ahorro de Energía  Automatizaciones y Programación.  Cámaras y cercos eléctricos perimetrales  Certificaciones hasta 10KVA",
      },
      {
        icon: "domiciliaria.jpg",
        title: "Residencial",
        description:
          " Proyectos de Instalaciones y Montajes  Diseño y Armado de Tableros BT  Luminarias  Cámaras de Seguridad  Instalación de red ETH y tensión estabilizada UPS para oficinas  Reparaciones y Reformas de instalaciones  Ahorro de Energía  Automatizaciones  Certificaciones hasta 10KVA",
      },
      {
        icon: "comercial.jpg",
        title: "Comercial",
        description:
          " Proyectos de Instalaciones  Diseño y Armado de Tableros BT  Luminarias  Cámaras de Seguridad  Cercos Eléctricos  Reparaciones y Reformas de instalaciones Ahorro de Energía. Colocación de pilares Monofásicos y Trifásicos Certificaciones hasta 10KVA",
      },
    ],
  ],
  [
    "Seguridad Electrónica",
    [
      {
        icon: "camaras.jpg",
        title: "Cámaras de Seguridad",
        description:
          " Nos dedicamos al asesoramiento, diseño, provisión, venta, instalación, soporte técnico y mantenimiento  de sistemas de video vigilancia. Instalamos cámaras de vigilancia analógicas con DVR y cámaras de seguridad IP con NVR. De la misma manera que un arquitecto diseña una casa, nosotros diseñamos sistemas de video vigilancia. Atendemos hogares, domicilios particulares, negocios, comercios, industrias y sector público. Solo utilizamos accesorios, equipamiento y cámaras de marcas reconocidas, homologadas y certificadas bajo normas internacionales. La gran mayoría de nuestros sistemas de cámaras de video vigilancia los instalamos con equipos y cámaras de seguridad Dahua y con equipos y cámaras de seguridad Hikvision, entre otras marcas líderes en el mercado",
      },
      {
        icon: "alarma.jpg",
        title: "Alarmas",
        description:
          "En los tiempos actuales, donde la inseguridad es una realidad que golpea la tranquilidad y el día a día de  las personas, instalar alarmas en casas y negocios se vuelve clave para estar bien preparados. SESC posee  un servicio profesional de primera calidad, el cual garantiza la mejor protección en tiempo real para sus  clientes.  Instalar alarmas presenta grandes variaciones de acuerdo al tipo de sistema y las necesidades específicas  de cada cliente. En general, el proceso de instalar alarma en casa o negocios implica una evaluación de  seguridad, en la cual un profesional determina cuáles son los puntos específicos que se deben proteger.  Luego, en base a este, se eligen los componentes que serán necesarios para el sistema.  Una vez establecido ello, se realiza la instalación.",
      },
      {
        icon: "cerco.jpg",
        title: "Cerco Eléctrico",
        description:
          "Existen muchos sistemas de detección de intrusos, sin embargo, la experiencia ha demostrado que el Cerco Eléctrico Perimetral es el mejor sistema a instalar por ser el único que permite detectar e impedir el ingreso de delincuentes antes de que estén dentro de su propiedad. Es una barrera física y clara para disuadir al intruso, resaltada por la utilización de cartelería de advertencia. La visualización del cerco y los golpes eléctricos son suficientes para evitar el ingreso de delincuentes a su propiedad. A diferencia de las alarmas convencionales que se activan una vez que el intruso esta adentro, los cercos eléctricos constan de un tendido de alambre de aluminio de 6 hilos según el lugar a proteger, mas un electrificador alarma que transmite pulsos de alto voltaje pero de bajo amperaje, que al ser tocado genera un doloroso choque eléctrico inmovilizando al intruso, NO LETAL.",
      },
    ],
  ],
  [
    "Energias Renovables",
    [
      {
        icon: "panel.png",
        title: "Panel Solar",
        description:
          "Los paneles solares son un sistema de autoabastecimiento energético con una vida útil de unos 25-30 años y suponen un importante desembolso en un primer término. Por ello, su instalación no debe tomarse a la ligera. Es necesario cuidar todos los componentes que intervienen en la estructura, desde las células fotovoltaicas a los soportes sobre los cuales se instalan estas placas, y siempre conviene confiar en empresas especializadas que ya hayan demostrado su valía a través de su experiencia.",
      },
      {
        icon: "panel-2.png",
        title: " ",
        description:
          "Para asegurarse de contar con una instalación eficiente, que se amortice en un plazo razonable y que sea segura, hay que tomar en cuenta una serie de factores. Contamos con asesoría técnica especializada con ingenieros experimentados en el equipamiento y las arquitecturas de instalación. Instalaciones OffGrid, OnGrid e Hibridas",
      },
    ],
  ],
  [
    "Climatización",
    [
      {
        icon: "bomba-calor-1.jpg",
        title: "Bomba de Calor",
        description:
          "El principio de funcionamiento de cualquier bomba de calor por aerotermia se basa en  el aprovechamiento gratuito e inagotable de la energía contenida en el aire, mediante el cambio de características de un fluido refrigerante dentro de un ciclo termodinámico  La principal diferencia es que el calentamiento del agua de la piscina se realiza a través de un intercambiador de titanio(para soportar sin problemas las características del  agua clorada o tratada con sales habitual en las piscinas), hablando siempre de unidades monoblock para instalación exterior que instalan todos los elementos en un mismo equipo",
      },
      {
        icon: "bomba-calor-2.jpg",
        title: "",
        description:
          "Nuestras bombas de calor consumen menos energía que otras del mercado gracias a su tecnología tipo INVERTER. Contamos con instaladores profesionales para realizar los proyectos a medida de nuestros clientes.",
      },
      {
        icon: "bomba-calor-3.png",
        title: "",
        description: "Calefacción para espacios grandes.",
      },
    ],
  ],
]);

export const benefits = [
  { icon: "time.png", name: "Rapidez" },
  { icon: "rayo.png", name: "Ahorro Energetico" },
  { icon: "rule.png", name: "A Medida" },
  { icon: "dinero.png", name: "Calidad Precio" },
  { icon: "confianza.png", name: "Confianza" },
  { icon: "security.png", name: "Seguridad" },
];

export const testimonials: Testimonials[] = [
  {
    description:
      "Pablo fue una persona muy amable y profesional. Pudo re organizar sus tiempos para poder llegar a mi hogar y realizar unas revisión de mi pedido. Muchas gracias.",
    name: "Noelia Martinez",
    photoUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjW09Ms3t5Qho-ZetYSS70ijpZo3EYQNhFUTL71Rm3cIWzj8h57bCw=w36-h36-p-rp-mo-br100",
    rate: 5,
  },
  {
    description:
      "Muy impecable el trabajo! Iluminaria de piscina y colocación de apliques exteriores realmente prolijo, y súper profesional de confianza 100%. \n Estamos muy agradecidos por sus servicios👏🏼",
    name: "Fran Irusta",
    photoUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXRLvsdrgQfwNUauw1ZHNv-YzWGyLKGT2zDTetwATfqsO0aSWudOw=w36-h36-p-rp-mo-ba2-br100",
    rate: 5,
  },
  {
    description:
      "Un trabajo impecable, muy responsable, prolijo en todo sentido, siguiendo paso a pasa el proceso para que todo salga a la perfección.",
    name: "Roberto Azize",
    photoUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjXw9hRM8neVMSBriT8SGHLV9rZNRV4xFfBBuFZipP58RWZrayfZ_A=w36-h36-p-rp-mo-ba3-br100",
    rate: 5,
  },
];
