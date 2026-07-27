import { A } from "@solidjs/router";
import { For } from "solid-js";
import type { ServicePage } from "~/utils/services-pages";

const ICON_PATHS: Record<string, string[]> = {
  electricidad: ["M13 2 3 14h9l-1 8 10-12h-9l1-8z"],
  "seguridad-electronica": [
    "M12 22s8-3.5 8-10V6l-8-4-8 4v6c0 6.5 8 10 8 10z",
    "m9 12 2 2 4-4",
  ],
  "energia-solar": [
    "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    "M12 2v2",
    "M12 20v2",
    "m4.93 4.93 1.41 1.41",
    "m17.66 17.66 1.41 1.41",
    "M2 12h2",
    "M20 12h2",
    "m6.34 17.66-1.41 1.41",
    "m19.07 4.93-1.41 1.41",
  ],
  "movilidad-electrica": [
    "M12 22v-5",
    "M9 8V2",
    "M15 8V2",
    "M6 8h12v5a6 6 0 0 1-12 0V8z",
  ],
  "trabajos-en-altura": ["M8 2v20", "M16 2v20", "M8 7h8", "M8 12h8", "M8 17h8"],
};

export default function ServiceCard(props: {
  service: ServicePage;
  index?: number;
  class?: string;
}) {
  return (
    <A
      href={`/${props.service.slug}`}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={`${(props.index ?? 0) * 100}`}
      data-aos-easing="ease-in-sine"
      class={`group relative flex flex-col justify-end overflow-hidden rounded-2xl h-72 sm:h-80 lg:h-[340px] text-left ${props.class ?? ""}`}
      aria-label={`Ver detalles de ${props.service.title}`}
    >
      <img
        src={props.service.cardImage ?? props.service.hero.image}
        alt=""
        role="presentation"
        loading="lazy"
        class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-transparent" />
      <div class="relative p-5 lg:p-6 flex flex-col items-start gap-2">
        <span class="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-5 h-5 text-white"
          >
            <For each={ICON_PATHS[props.service.slug] ?? []}>{(d) => <path d={d} />}</For>
          </svg>
        </span>
        <h3 class="text-white font-extrabold text-xl lg:text-2xl">{props.service.title}</h3>
        <p class="text-zinc-300 text-sm leading-relaxed">{props.service.cardDescription}</p>
        <span class="text-orange-400 font-bold text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
          Ver más
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-4 h-4" aria-hidden="true">
            <path d="M5 12h14" stroke-linecap="round" />
            <path d="m13 6 6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </div>
    </A>
  );
}
