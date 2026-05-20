const FORM_URL =
  "https://docs.google.com/forms/d/1H6ZOaH091kz9KGrC-vR-i2JGIFMaKCOTsn5pQJV6_2I/viewform";

const perks = [
  {
    title: "Proyectos de gran escala",
    desc: "Trabajamos en obras industriales, comerciales y residenciales de alta relevancia en toda Córdoba.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
  },
  {
    title: "Equipo profesional",
    desc: "Más de 20 años de experiencia. Vas a aprender de profesionales matriculados y certificados.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Crecimiento real",
    desc: "Buscamos gente comprometida con vocación de mejora continua y trabajo en equipo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function JoinTeam() {
  return (
    <section
      class="relative py-16 lg:py-24 px-6 sm:px-12 lg:px-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden"
      aria-labelledby="join-team-heading"
    >
      <div class="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div class="relative max-w-6xl mx-auto">
        <div class="flex flex-col items-center text-center mb-12 lg:mb-16">
          <span class="text-sm uppercase tracking-widest font-semibold text-orange-500 mb-3">
            Trabajá con nosotros
          </span>
          <h2
            id="join-team-heading"
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            ¿Querés ser parte del equipo?
          </h2>
          <p class="text-zinc-300 max-w-2xl text-base lg:text-lg leading-relaxed">
            Buscamos electricistas, técnicos e instaladores que quieran sumarse a un equipo profesional con más de 20 años de experiencia en Córdoba. Si tenés ganas, completá el formulario y te contactamos.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 mb-12 lg:mb-16">
          {perks.map((perk) => (
            <div class="flex flex-col gap-3 bg-zinc-800/60 border border-zinc-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-colors">
              <div class="text-orange-500">{perk.icon}</div>
              <h3 class="text-white font-bold text-lg">{perk.title}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        <div class="flex flex-col items-center gap-4">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-md shadow-xl hover:scale-105 transition-all text-lg"
          >
            Postularme ahora
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <p class="text-zinc-500 text-sm">
            Completá el formulario en Google · 2 minutos
          </p>
        </div>
      </div>
    </section>
  );
}
