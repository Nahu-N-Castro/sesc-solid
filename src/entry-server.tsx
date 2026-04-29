// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { faqs } from "~/components/FAQ";

const GA4_ID = process.env.VITE_GA4_ID || "";
const GTM_ID = process.env.VITE_GTM_ID || "";

const SITE_URL = "https://www.sesc.com.ar";
const SITE_NAME = "SESC — Servicios Eléctricos Integrales";
const SITE_TITLE =
  "SESC — Servicios Eléctricos Integrales en Córdoba | Electricidad, Cámaras, Energía Solar";
const SITE_DESCRIPTION =
  "Empresa de servicios eléctricos en Córdoba con más de 20 años de experiencia. Instalaciones industriales y residenciales, seguridad electrónica, paneles solares y climatización.";
const OG_IMAGE = `${SITE_URL}/logo.png`;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician"],
  "@id": `${SITE_URL}/#business`,
  name: "Servicio Especializado SC | Instalaciones Eléctricas Certificadas",
  alternateName: ["SESC", "SESC — Servicios Eléctricos Integrales"],
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+54-351-2922784",
  email: "sesc.especializado@gmail.com",
  image: OG_IMAGE,
  logo: `${SITE_URL}/logo-orange.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Córdoba",
    addressRegion: "Córdoba",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -31.9291344,
    longitude: -63.988919,
  },
  hasMap:
    "https://www.google.com/maps/place/Servicio+Especializado+SC+%7C+Instalaciones+El%C3%A9ctricas+Certificadas/@-31.9291344,-63.988919,8z/data=!4m8!3m7!1s0x45fef3f80ebbd4c3:0x5453af7c769d3a2e!8m2!3d-31.9291344!4d-63.988919",
  areaServed: [
    { "@type": "City", name: "Córdoba" },
    { "@type": "AdministrativeArea", name: "Provincia de Córdoba" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/PabloDCtecnico",
    "https://www.instagram.com/electricidad_sesc",
    "https://wa.me/543512922784",
    "https://www.google.com/maps/place/Servicio+Especializado+SC+%7C+Instalaciones+El%C3%A9ctricas+Certificadas/@-31.9291344,-63.988919,8z/data=!4m8!3m7!1s0x45fef3f80ebbd4c3:0x5453af7c769d3a2e",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electricidad Integral" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seguridad Electrónica" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Energías Renovables" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Climatización" } },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "41",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Noelia Martinez" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Pablo fue una persona muy amable y profesional. Pudo re organizar sus tiempos para poder llegar a mi hogar y realizar unas revisión de mi pedido. Muchas gracias.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Fran Irusta" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Muy impecable el trabajo! Iluminaria de piscina y colocación de apliques exteriores realmente prolijo, y súper profesional de confianza 100%.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Roberto Azize" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Un trabajo impecable, muy responsable, prolijo en todo sentido, siguiendo paso a pasa el proceso para que todo salga a la perfección.",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "es-AR",
  publisher: { "@id": `${SITE_URL}/#business` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="es-AR">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#f97316" />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="author" content="SESC" />
          <meta
            name="keywords"
            content="electricista Córdoba, servicios eléctricos Córdoba, instalación cámaras de seguridad, paneles solares Córdoba, climatización, bomba de calor, alarmas, cerco eléctrico, electricista matriculado, instalaciones industriales"
          />

          <title>{SITE_TITLE}</title>
          <meta name="description" content={SITE_DESCRIPTION} />
          <link rel="canonical" href={`${SITE_URL}/`} />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:locale" content="es_AR" />
          <meta property="og:url" content={`${SITE_URL}/`} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={OG_IMAGE} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="SESC - Servicios Eléctricos Integrales" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={`${SITE_URL}/`} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta name="twitter:image" content={OG_IMAGE} />

          {/* Iconos */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/logo-orange.png" type="image/png" />
          <link rel="apple-touch-icon" href="/logo-orange.png" />

          {/* Performance: preconnect + preload del LCP */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link rel="preload" as="image" href="/background.webp" type="image/webp" fetchpriority="high" />

          {/* Fuentes optimizadas: solo 3 pesos */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Google Tag Manager */}
          {GTM_ID && (
            <script
              innerHTML={`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
            />
          )}

          {/* Google Analytics 4 (sólo si no hay GTM, para evitar duplicado) */}
          {GA4_ID && !GTM_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} />
              <script
                innerHTML={`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
              />
            </>
          )}

          {/* Datos estructurados */}
          <script
            type="application/ld+json"
            innerHTML={JSON.stringify(localBusinessJsonLd)}
          />
          <script
            type="application/ld+json"
            innerHTML={JSON.stringify(websiteJsonLd)}
          />
          <script
            type="application/ld+json"
            innerHTML={JSON.stringify(faqJsonLd)}
          />

          {assets}
        </head>
        <body>
          {/* GTM noscript fallback */}
          {GTM_ID && (
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style="display:none;visibility:hidden"
                title="Google Tag Manager"
              />
            </noscript>
          )}
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
