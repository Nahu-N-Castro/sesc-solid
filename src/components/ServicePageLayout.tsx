import { For, Show } from "solid-js";
import { A } from "@solidjs/router";
import type { ServicePage } from "~/utils/services-pages";
import { servicePagesList } from "~/utils/services-pages";
import BrandCarousel from "./BrandCarousel";
import Footer from "./Footer";
import WhatsAppFloat, { buildWhatsAppUrl } from "./WhatsAppFloat";

const SITE_URL = "https://www.sesc.com.ar";

export default function ServicePageLayout(props: { service: ServicePage }) {
  const breadcrumbLd = () =>
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: props.service.title, item: `${SITE_URL}/${props.service.slug}` },
      ],
    });
  const serviceLd = () =>
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: props.service.title,
      description: props.service.metaDescription,
      url: `${SITE_URL}/${props.service.slug}`,
      image: `${SITE_URL}${props.service.hero.image}`,
      areaServed: [
        { "@type": "City", name: "Córdoba" },
        { "@type": "AdministrativeArea", name: "Provincia de Córdoba" },
      ],
      provider: {
        "@type": "Electrician",
        name: "Servicio Especializado SC | Instalaciones Eléctricas Certificadas",
        telephone: "+54-351-2922784",
        url: SITE_URL,
      },
    });

  return (
    <main class="bg-zinc-800 text-white">
      <script type="application/ld+json" innerHTML={breadcrumbLd()} />
      <script type="application/ld+json" innerHTML={serviceLd()} />
      <section
        class="relative min-h-[60vh] lg:min-h-[70vh] py-24 lg:py-0 flex items-center justify-center"
        aria-label={props.service.title}
      >
        <img
          src={props.service.hero.image}
          alt=""
          role="presentation"
          class="absolute inset-0 w-full h-full object-cover brightness-50"
          fetchpriority="high"
        />
        <Show when={props.service.hero.video}>
          {(video) => (
            <video
              class="absolute inset-0 w-full h-full object-cover brightness-50"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              poster={props.service.hero.image}
              aria-hidden="true"
            >
              <source src={video()} type="video/mp4" />
            </video>
          )}
        </Show>
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent" />
        <div class="relative z-10 max-w-4xl px-6 sm:px-12 text-center sm:text-left">
          <nav aria-label="Breadcrumb" class="mb-4 text-sm text-zinc-300">
            <A href="/" class="hover:text-orange-400">Inicio</A>
            <span class="mx-2">/</span>
            <span class="text-orange-400">{props.service.title}</span>
          </nav>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">{props.service.hero.headline}</h1>
          <p class="text-base sm:text-lg lg:text-xl xl:text-2xl text-zinc-200 mb-6 lg:mb-8 leading-relaxed">{props.service.hero.subheadline}</p>
          <div class="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a
              href={buildWhatsAppUrl(`Hola SESC, me interesa el servicio de ${props.service.title}. ¿Pueden asesorarme?`)}
              target="_blank"
              rel="noopener"
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-md transition-all hover:scale-105"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="tel:+543512922784"
              class="border-2 border-white hover:bg-white hover:text-orange-500 text-white font-bold px-6 py-3 rounded-md transition-all"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      <Show when={props.service.brands}>
        {(brands) => (
          <BrandCarousel
            title={brands().title}
            subtitle={brands().subtitle}
            items={brands().items}
          />
        )}
      </Show>

      <section class="py-14 lg:py-20 px-6 sm:px-12 lg:px-16">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-10 text-center">¿Qué incluye este servicio?</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <For each={props.service.features}>
              {(feat) => (
                <div class="flex items-center gap-3 bg-zinc-700/40 rounded-lg p-4 border border-zinc-700/50">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="w-5 h-5 text-orange-500 shrink-0" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span class="text-zinc-100">{feat}</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <For each={props.service.sections}>
        {(section, i) => (
          <section class={`py-14 lg:py-20 px-6 sm:px-12 lg:px-16 ${i() % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"}`}>
            <div class={`max-w-6xl mx-auto flex flex-col ${i() % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  loading="lazy"
                  class="w-full lg:w-1/2 rounded-2xl shadow-xl object-cover h-64 sm:h-80 lg:h-80 xl:h-96"
                />
              )}
              <div class={section.image ? "lg:w-1/2" : "w-full"}>
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-orange-500">{section.title}</h2>
                <p class="text-zinc-300 leading-relaxed text-base lg:text-lg">{section.body}</p>
              </div>
            </div>
          </section>
        )}
      </For>

      <Show when={props.service.gallery}>
        {(gallery) => (
          <section class="py-14 lg:py-20 px-6 sm:px-12 lg:px-16" aria-label={gallery().title}>
            <div class="max-w-6xl mx-auto">
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3">{gallery().title}</h2>
              <Show when={gallery().subtitle}>
                <p class="text-zinc-400 text-center text-base lg:text-lg mb-8 lg:mb-10">{gallery().subtitle}</p>
              </Show>
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 auto-rows-[9rem] sm:auto-rows-[11rem] lg:auto-rows-[13rem]">
                <For each={gallery().items}>
                  {(item, i) => (
                    <figure class={`relative rounded-xl overflow-hidden group ${i() === 0 ? "col-span-2 lg:col-span-3 row-span-2" : i() === 1 ? "row-span-2" : ""}`}>
                      <img
                        src={item.image}
                        alt={item.caption}
                        loading="lazy"
                        class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <figcaption class="absolute bottom-2 left-2 lg:bottom-3 lg:left-3 flex items-center gap-1.5 bg-zinc-950/70 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs lg:text-sm text-white max-w-[calc(100%-1rem)]">
                        <svg viewBox="0 0 24 24" fill="currentColor" class="w-3.5 h-3.5 text-orange-400 shrink-0" aria-hidden="true">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                        </svg>
                        <span class="truncate">{item.caption}</span>
                      </figcaption>
                    </figure>
                  )}
                </For>
              </div>
              <Show when={gallery().instagramUrl}>
                <div class="flex justify-center mt-8">
                  <a
                    href={gallery().instagramUrl}
                    target="_blank"
                    rel="noopener"
                    class="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                  >
                    <svg class="w-5 h-5" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M16.5 3C9.33 3 3.5 8.83 3.5 16V34C3.5 41.17 9.33 47 16.5 47H34.5C41.67 47 47.5 41.17 47.5 34V16C47.5 8.83 41.67 3 34.5 3H16.5ZM37.5 11C38.6 11 39.5 11.9 39.5 13C39.5 14.1 38.6 15 37.5 15C36.4 15 35.5 14.1 35.5 13C35.5 11.9 36.4 11 37.5 11ZM25.5 14C31.57 14 36.5 18.93 36.5 25C36.5 31.07 31.57 36 25.5 36C19.43 36 14.5 31.07 14.5 25C14.5 18.93 19.43 14 25.5 14ZM25.5 16C20.54 16 16.5 20.04 16.5 25C16.5 29.96 20.54 34 25.5 34C30.46 34 34.5 29.96 34.5 25C34.5 20.04 30.46 16 25.5 16Z" />
                    </svg>
                    Mirá más obras en nuestro Instagram
                  </a>
                </div>
              </Show>
            </div>
          </section>
        )}
      </Show>

      <section class="py-14 lg:py-20 px-6 bg-orange-500 text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{props.service.ctaTitle ?? "¿Necesitás asesoramiento?"}</h2>
        <p class="text-white/90 mb-6 lg:mb-8 text-base lg:text-lg">Te asesoramos sin compromiso. Presupuesto sin cargo.</p>
        <a
          href={buildWhatsAppUrl(`Hola SESC, me interesa el servicio de ${props.service.title}. ¿Pueden asesorarme?`)}
          target="_blank"
          rel="noopener"
          class="inline-block bg-white text-orange-500 hover:bg-zinc-900 hover:text-white font-bold px-8 py-4 rounded-md transition-all hover:scale-105"
        >
          Contactar por WhatsApp
        </a>
      </section>

      <section class="py-14 lg:py-20 px-6 sm:px-12 bg-zinc-900">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-8 lg:mb-12">Otros servicios</h2>
        <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          <For each={servicePagesList.filter((s) => s.slug !== props.service.slug)}>
            {(other) => (
              <A
                href={`/${other.slug}`}
                class="group flex items-center bg-zinc-800 border border-zinc-700 hover:border-orange-500 rounded-xl overflow-hidden transition-colors"
              >
                <img
                  src={other.cardImage ?? other.hero.image}
                  alt={other.title}
                  loading="lazy"
                  class="w-24 h-24 sm:w-28 sm:h-28 object-cover shrink-0"
                />
                <div class="flex-1 min-w-0 px-4 sm:px-5 py-3 text-left">
                  <h3 class="text-white font-bold text-base sm:text-lg truncate">{other.title}</h3>
                  <p class="text-zinc-400 text-sm truncate">{other.shortDescription}</p>
                  <span class="text-orange-400 text-sm font-bold inline-block mt-1">Ver más</span>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  class="w-5 h-5 text-orange-500 mr-4 sm:mr-5 shrink-0 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  <path d="m9 6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </A>
            )}
          </For>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
