import { For } from "solid-js";

const certs = [
  { src: "/aea.png", alt: "Asociación Electrotécnica Argentina (AEA)" },
  { src: "/ersep.png", alt: "ERSEP - Ente Regulador de Servicios Públicos" },
  { src: "/iram.png", alt: "IRAM - Normas de calidad" },
  { src: "/iec.png", alt: "IEC - Comisión Electrotécnica Internacional" },
];

export default function Certifications() {
  return (
    <section
      class="bg-zinc-100 py-10 px-6"
      aria-label="Certificaciones y normas"
    >
      <div class="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <p class="text-zinc-500 uppercase tracking-widest text-xs sm:text-sm font-semibold">
          Trabajamos bajo normas certificadas
        </p>
        <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          <For each={certs}>
            {(c) => (
              <img
                src={c.src}
                alt={c.alt}
                class="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
