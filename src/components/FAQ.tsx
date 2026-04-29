import { createSignal, For, Show } from "solid-js";

export const faqs = [
  {
    q: "¿Hacen instalaciones eléctricas en toda Córdoba?",
    a: "Sí, trabajamos en Córdoba Capital y localidades de la provincia. Coordinamos una visita técnica previa para evaluar el alcance del trabajo.",
  },
  {
    q: "¿Hacen presupuestos sin cargo?",
    a: "Sí, presupuestamos sin compromiso. Realizamos una visita técnica para entender el trabajo y te enviamos el presupuesto detallado por escrito.",
  },
  {
    q: "¿Entregan certificación eléctrica?",
    a: "Sí, certificamos instalaciones eléctricas hasta 10KVA según las normas vigentes (AEA, ERSEP). Te entregamos la documentación necesaria para EPEC y municipios.",
  },
  {
    q: "¿Trabajan con instalaciones industriales y de PYMES?",
    a: "Sí. Tenemos amplia experiencia en plantas automotrices, alimentos, centros comerciales, edificios y comercios. Hacemos tableros BT, redes Ethernet, UPS, automatizaciones y mantenimiento preventivo.",
  },
  {
    q: "¿Instalan paneles solares y energías renovables?",
    a: "Sí, instalamos sistemas fotovoltaicos OffGrid, OnGrid e Híbridos. Asesoramos sobre dimensionamiento, vida útil, amortización y trámites con la distribuidora.",
  },
  {
    q: "¿Qué marcas de cámaras de seguridad usan?",
    a: "Trabajamos con marcas líderes como Dahua y Hikvision, equipos homologados y certificados bajo normas internacionales. Instalamos sistemas analógicos con DVR e IP con NVR.",
  },
  {
    q: "¿Ofrecen mantenimiento preventivo?",
    a: "Sí, desarrollamos planes de mantenimiento preventivo y predictivo (MTO) adaptados al tipo de instalación, ideal para industrias, PYMES y comercios.",
  },
  {
    q: "¿Cómo me contacto rápidamente?",
    a: "Por WhatsApp al +54 351-2922784 (la opción más rápida), por teléfono o por mail a sesc.especializado@gmail.com.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = createSignal<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex() === i ? null : i);
  };

  return (
    <section
      class="bg-white py-24 px-6 sm:px-16"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        class="text-4xl sm:text-5xl text-zinc-800 font-bold text-center mb-4"
      >
        Preguntas Frecuentes
      </h2>
      <p class="text-zinc-500 text-center mb-12 max-w-2xl mx-auto">
        Si no encontrás tu respuesta, escribinos por WhatsApp y te respondemos en minutos.
      </p>

      <div class="max-w-3xl mx-auto flex flex-col gap-3">
        <For each={faqs}>
          {(item, i) => (
            <div class="border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50">
              <button
                onClick={() => toggle(i())}
                aria-expanded={openIndex() === i()}
                aria-controls={`faq-panel-${i()}`}
                class="w-full flex justify-between items-center text-left px-5 py-4 hover:bg-zinc-100 transition-colors"
              >
                <span class="font-semibold text-zinc-800 text-base sm:text-lg">{item.q}</span>
                <svg
                  class={`w-5 h-5 text-orange-500 shrink-0 transition-transform ${openIndex() === i() ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <Show when={openIndex() === i()}>
                <div
                  id={`faq-panel-${i()}`}
                  class="px-5 pb-5 text-zinc-600 leading-relaxed text-sm sm:text-base"
                >
                  {item.a}
                </div>
              </Show>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
