import { createSignal, onCleanup, onMount, Show } from "solid-js";

const PHONE = "543512922784";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = createSignal(false);
  const [dismissed, setDismissed] = createSignal(false);

  onMount(() => {
    const t = setTimeout(() => {
      if (!dismissed()) setShowTooltip(true);
    }, 4500);
    onCleanup(() => clearTimeout(t));
  });

  const dismiss = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    setShowTooltip(false);
  };

  return (
    <div class="fixed bottom-5 right-5 z-30 flex items-end gap-3">
      <Show when={showTooltip()}>
        <div class="relative bg-white text-zinc-800 rounded-2xl px-4 py-3 shadow-xl max-w-[220px] animate-fade-in-up hidden sm:block">
          <button
            onClick={dismiss}
            aria-label="Cerrar mensaje"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-zinc-700 text-white text-xs flex items-center justify-center hover:bg-zinc-900"
          >
            ✕
          </button>
          <p class="text-sm font-medium leading-tight">¿Necesitás un electricista?</p>
          <p class="text-xs text-zinc-500 mt-1">Consultanos sin compromiso</p>
          <div class="absolute -right-2 bottom-4 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white border-b-8 border-b-transparent" />
        </div>
      </Show>

      <a
        href={buildWhatsAppUrl(
          "Hola SESC, vi su web y quería consultarles por un servicio eléctrico. ¿Me pueden asesorar?"
        )}
        target="_blank"
        rel="noopener"
        aria-label="Contactar por WhatsApp"
        onClick={() => setShowTooltip(false)}
        class="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 shadow-lg hover:scale-110 hover:bg-green-600 transition-all"
      >
        <span class="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" aria-hidden="true" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="white"
          class="relative w-8 h-8 sm:w-10 sm:h-10"
          aria-hidden="true"
        >
          <path d="M25.5 2C12.818 2 2.5 12.318 2.5 25C2.5 28.96 3.523 32.854 5.463 36.29L2.537 46.73C2.441 47.073 2.534 47.441 2.782 47.696C2.973 47.893 3.233 48 3.5 48C3.58 48 3.661 47.99 3.74 47.971L14.636 45.272C17.963 47.058 21.71 48 25.5 48C38.182 48 48.5 37.682 48.5 25C48.5 12.318 38.182 2 25.5 2ZM37.07 33.116C36.578 34.478 34.218 35.721 33.084 35.888C32.066 36.037 30.778 36.101 29.364 35.657C28.507 35.387 27.407 35.029 25.998 34.428C20.075 31.902 16.207 26.013 15.911 25.624C15.616 25.235 13.5 22.463 13.5 19.594C13.5 16.725 15.025 15.314 15.567 14.73C16.109 14.146 16.748 14 17.142 14C17.536 14 17.929 14.005 18.274 14.021C18.637 14.039 19.124 13.884 19.603 15.022C20.095 16.19 21.276 19.059 21.422 19.352C21.57 19.644 21.668 19.985 21.472 20.374C21.276 20.763 21.178 21.006 20.882 21.347C20.586 21.688 20.262 22.107 19.996 22.369C19.7 22.66 19.393 22.975 19.737 23.559C20.081 24.143 21.266 26.052 23.022 27.598C25.277 29.584 27.18 30.2 27.77 30.492C28.36 30.784 28.705 30.735 29.049 30.346C29.393 29.956 30.525 28.643 30.918 28.06C31.311 27.477 31.705 27.573 32.247 27.768C32.789 27.962 35.692 29.372 36.282 29.664C36.872 29.956 37.266 30.102 37.414 30.345C37.562 30.587 37.562 31.755 37.07 33.116Z" />
        </svg>
      </a>
    </div>
  );
}
