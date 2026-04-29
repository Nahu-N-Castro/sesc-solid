import { For } from "solid-js";
import { A } from "@solidjs/router";
import type { ServicePage } from "~/utils/services-pages";
import { servicePagesList } from "~/utils/services-pages";
import Footer from "./Footer";
import WhatsAppFloat, { buildWhatsAppUrl } from "./WhatsAppFloat";

export default function ServicePageLayout(props: { service: ServicePage }) {
  return (
    <main class="bg-zinc-800 text-white">
      <section
        class="relative h-[70vh] flex items-center justify-center"
        aria-label={props.service.title}
      >
        <img
          src={props.service.hero.image}
          alt=""
          role="presentation"
          class="absolute inset-0 w-full h-full object-cover brightness-50"
          fetchpriority="high"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent" />
        <div class="relative z-10 max-w-4xl px-6 sm:px-12 text-center sm:text-left">
          <nav aria-label="Breadcrumb" class="mb-4 text-sm text-zinc-300">
            <A href="/" class="hover:text-orange-400">Inicio</A>
            <span class="mx-2">/</span>
            <span class="text-orange-400">{props.service.title}</span>
          </nav>
          <h1 class="text-4xl sm:text-6xl font-bold mb-6">{props.service.hero.headline}</h1>
          <p class="text-lg sm:text-2xl text-zinc-200 mb-8 leading-relaxed">{props.service.hero.subheadline}</p>
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

      <section class="py-20 px-6 sm:px-16">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-3xl sm:text-4xl font-bold mb-10 text-center">¿Qué incluye este servicio?</h2>
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
          <section class={`py-20 px-6 sm:px-16 ${i() % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"}`}>
            <div class={`max-w-6xl mx-auto flex flex-col ${i() % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}>
              {section.image && (
                <img
                  src={section.image}
                  alt={section.title}
                  loading="lazy"
                  class="w-full lg:w-1/2 rounded-2xl shadow-xl object-cover h-80 lg:h-96"
                />
              )}
              <div class={section.image ? "lg:w-1/2" : "w-full"}>
                <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-orange-500">{section.title}</h2>
                <p class="text-zinc-300 leading-relaxed text-lg">{section.body}</p>
              </div>
            </div>
          </section>
        )}
      </For>

      <section class="py-20 px-6 bg-orange-500 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">¿Necesitás asesoramiento?</h2>
        <p class="text-white/90 mb-8 text-lg">Te asesoramos sin compromiso. Presupuesto sin cargo.</p>
        <a
          href={buildWhatsAppUrl(`Hola SESC, me interesa el servicio de ${props.service.title}. ¿Pueden asesorarme?`)}
          target="_blank"
          rel="noopener"
          class="inline-block bg-white text-orange-500 hover:bg-zinc-900 hover:text-white font-bold px-8 py-4 rounded-md transition-all hover:scale-105"
        >
          Contactar por WhatsApp
        </a>
      </section>

      <section class="py-20 px-6 bg-zinc-900">
        <h2 class="text-3xl font-bold text-center text-white mb-12">Otros servicios</h2>
        <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <For each={servicePagesList.filter((s) => s.slug !== props.service.slug)}>
            {(other) => (
              <A
                href={`/${other.slug}`}
                class="group relative aspect-video rounded-xl overflow-hidden border border-zinc-700 hover:border-orange-500 transition-all"
              >
                <img
                  src={other.hero.image}
                  alt={other.title}
                  loading="lazy"
                  class="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-500"
                />
                <span class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                  {other.title}
                </span>
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
