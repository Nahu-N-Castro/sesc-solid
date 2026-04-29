import { createSignal, For, onCleanup, onMount } from "solid-js";

const INSTAGRAM_URL = "https://www.instagram.com/electricidad_sesc/";

type Post =
  | {
      kind: "embed";
      id: string;
      type: "p" | "reel";
      caption: string;
    }
  | {
      kind: "card";
      image: string;
      caption: string;
      likes: number;
    };

// IMPORTANTE: la cuenta @electricidad_sesc tiene restricción de edad (18+) en
// Instagram, por lo que Meta bloquea los embeds públicos. Para que estos
// vuelvan a funcionar como `kind: "embed"`, el dueño de la cuenta debe ir a
// Configuración → Privacidad → quitar la restricción de edad y activar
// "Permitir incrustaciones". Mientras tanto, mostramos cards CSS con foto.
const POSTS: Post[] = [
  {
    kind: "card",
    image: "/jobs/3.webp",
    caption: "Instalación eléctrica industrial — tableros BT y luminarias profesionales.",
    likes: 87,
  },
  {
    kind: "card",
    image: "/jobs/12.webp",
    caption: "Sistema de cámaras de seguridad IP para comercio en Córdoba.",
    likes: 64,
  },
  {
    kind: "card",
    image: "/jobs/19.webp",
    caption: "Instalación de paneles solares OnGrid en residencia particular.",
    likes: 122,
  },
  {
    kind: "card",
    image: "/jobs/27.webp",
    caption: "Reforma integral de instalación eléctrica con certificación.",
    likes: 95,
  },
];

const AUTO_INTERVAL = 6000;

export default function InstagramFeed() {
  const [active, setActive] = createSignal(0);
  const [paused, setPaused] = createSignal(false);

  const next = () => setActive((i) => (i + 1) % POSTS.length);
  const prev = () => setActive((i) => (i - 1 + POSTS.length) % POSTS.length);

  onMount(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const interval = setInterval(() => {
      if (!paused()) next();
    }, AUTO_INTERVAL);
    onCleanup(() => clearInterval(interval));
  });

  const offset = (i: number) => {
    const total = POSTS.length;
    let diff = i - active();
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      class="relative bg-gradient-to-b from-zinc-900 to-zinc-800 py-24 px-6 sm:px-16 overflow-hidden"
      aria-labelledby="instagram-heading"
    >
      <div class="max-w-6xl mx-auto flex flex-col items-center">
        <div class="flex items-center gap-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-9 h-9 text-orange-500"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg>
          <h2
            id="instagram-heading"
            class="text-4xl sm:text-5xl text-white font-bold text-center"
          >
            Seguinos en Instagram
          </h2>
        </div>
        <p class="text-zinc-400 text-center mb-12 max-w-2xl">
          Mirá nuestros últimos trabajos en{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            class="text-orange-500 font-semibold hover:underline"
          >
            @electricidad_sesc
          </a>
        </p>

        <div
          class="relative w-full flex items-center justify-center h-[700px] sm:h-[760px] perspective-1000"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Publicación anterior"
            class="absolute left-0 sm:left-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-orange-500 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente publicación"
            class="absolute right-0 sm:right-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-orange-500 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div class="relative w-full h-full flex items-center justify-center">
            <For each={POSTS}>
              {(post, i) => {
                const off = () => offset(i());
                const isActive = () => off() === 0;
                return (
                  <div
                    class="absolute top-1/2 left-1/2 transition-all duration-700 ease-out"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${off() * 60}%) scale(${isActive() ? 1 : 0.78}) rotateY(${off() * -8}deg)`,
                      opacity: Math.abs(off()) > 1 ? "0" : isActive() ? "1" : "0.4",
                      "z-index": `${20 - Math.abs(off())}`,
                      "pointer-events": isActive() ? "auto" : "none",
                      filter: isActive() ? "none" : "blur(2px) brightness(0.6)",
                    }}
                    aria-hidden={!isActive()}
                  >
                    {post.kind === "embed" ? (
                      <div class="w-[340px] sm:w-[400px] h-[680px] bg-white rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                          src={`https://www.instagram.com/${post.type}/${post.id}/embed/captioned/`}
                          title={`Publicación de Instagram: ${post.caption}`}
                          loading="lazy"
                          allowtransparency="true"
                          allowfullscreen={true}
                          scrolling="no"
                          referrerpolicy="no-referrer-when-downgrade"
                          class="w-full h-full border-0 block"
                        />
                      </div>
                    ) : (
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener"
                        aria-label={`Ver ${post.caption} en Instagram`}
                        class="block"
                      >
                        <article class="bg-white rounded-2xl overflow-hidden shadow-2xl w-[320px] sm:w-[380px]">
                          <header class="flex items-center gap-3 px-4 py-3 border-b border-zinc-100">
                            <div class="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                              <div class="w-full h-full rounded-full bg-white p-[2px]">
                                <img
                                  src="/logo-orange.png"
                                  alt="SESC"
                                  class="w-full h-full rounded-full object-cover"
                                  loading="lazy"
                                  width="36"
                                  height="36"
                                />
                              </div>
                            </div>
                            <div class="flex-1 text-left">
                              <p class="text-sm font-semibold text-zinc-800">electricidad_sesc</p>
                              <p class="text-xs text-zinc-500">Córdoba, Argentina</p>
                            </div>
                            <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-zinc-700" aria-hidden="true">
                              <circle cx="5" cy="12" r="2" />
                              <circle cx="12" cy="12" r="2" />
                              <circle cx="19" cy="12" r="2" />
                            </svg>
                          </header>

                          <div class="aspect-square overflow-hidden bg-zinc-100">
                            <img
                              src={post.image}
                              alt={post.caption}
                              class="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>

                          <div class="px-4 py-3">
                            <div class="flex items-center gap-4 mb-2">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-zinc-800" aria-hidden="true">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                              </svg>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-zinc-800" aria-hidden="true">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                              </svg>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 text-zinc-800" aria-hidden="true">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                              </svg>
                            </div>
                            <p class="text-sm font-semibold text-zinc-800 text-left mb-1">
                              {post.likes} Me gusta
                            </p>
                            <p class="text-sm text-zinc-700 text-left leading-snug">
                              <span class="font-semibold">electricidad_sesc</span>{" "}
                              {post.caption}
                            </p>
                            <p class="text-xs text-zinc-400 text-left mt-2 uppercase">
                              Ver en Instagram
                            </p>
                          </div>
                        </article>
                      </a>
                    )}
                  </div>
                );
              }}
            </For>
          </div>
        </div>

        <div class="flex gap-2 mt-10" role="tablist" aria-label="Navegación de publicaciones">
          <For each={POSTS}>
            {(_, i) => (
              <button
                type="button"
                onClick={() => setActive(i())}
                role="tab"
                aria-selected={active() === i()}
                aria-label={`Ir a publicación ${i() + 1}`}
                class={`h-2 rounded-full transition-all ${
                  active() === i()
                    ? "w-10 bg-orange-500"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            )}
          </For>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener"
          class="mt-12 inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
        >
          Ver más en Instagram
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978H4.75c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
