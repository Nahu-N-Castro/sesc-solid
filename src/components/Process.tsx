import { For } from "solid-js";

const steps = [
  {
    n: "01",
    title: "Contactanos",
    desc: "Llamanos o escribinos por WhatsApp y contanos qué necesitás.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Visita y diagnóstico",
    desc: "Coordinamos una visita técnica para evaluar el trabajo en sitio.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Presupuesto sin cargo",
    desc: "Te enviamos un presupuesto detallado, claro y sin sorpresas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Ejecución certificada",
    desc: "Trabajo profesional, prolijo y con garantía. Certificación incluida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section
      class="bg-zinc-900 py-24 px-6 sm:px-16"
      aria-labelledby="process-heading"
    >
      <h2
        id="process-heading"
        class="text-4xl sm:text-5xl text-white font-bold text-center mb-4"
      >
        Cómo trabajamos
      </h2>
      <p class="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
        Un proceso simple, transparente y profesional para que tu proyecto eléctrico esté en buenas manos.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <For each={steps}>
          {(step, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={`${i() * 100}`}
              class="relative flex flex-col items-start gap-4 bg-zinc-800/60 border border-zinc-700/50 rounded-2xl p-6 hover:border-orange-500/50 hover:scale-[1.02] transition-all"
            >
              <span class="absolute top-4 right-5 text-5xl font-black text-orange-500/20">
                {step.n}
              </span>
              <div class="text-orange-500">{step.icon}</div>
              <h3 class="text-white font-bold text-xl">{step.title}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
