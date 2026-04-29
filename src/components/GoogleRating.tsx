import { For } from "solid-js";

const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/place/Servicio+Especializado+SC+%7C+Instalaciones+El%C3%A9ctricas+Certificadas/@-31.9291344,-63.988919,8z/data=!4m8!3m7!1s0x45fef3f80ebbd4c3:0x5453af7c769d3a2e!8m2!3d-31.9291344!4d-63.988919!9m1!1b1!16s%2Fg%2F11t17p01l7?hl=es-AR";

const WRITE_REVIEW_URL =
  "https://www.google.com/search?q=Servicio+Especializado+SC+%7C+Instalaciones+El%C3%A9ctricas+Certificadas&hl=es-AR#lrd=0x45fef3f80ebbd4c3:0x5453af7c769d3a2e,3";

export default function GoogleRating(props: {
  rating?: number;
  reviewCount?: number;
}) {
  const rating = () => props.rating ?? 5;
  const reviewCount = () => props.reviewCount ?? 0;
  const fullStars = () => Math.floor(rating());
  const hasHalfStar = () => rating() % 1 >= 0.5;
  const emptyStars = () => 5 - fullStars() - (hasHalfStar() ? 1 : 0);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      class="z-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl sm:rounded-full px-5 sm:px-8 py-4 sm:py-3 mb-12 shadow-xl"
    >
      <div class="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          class="w-7 h-7 shrink-0"
          aria-hidden="true"
        >
          <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
          <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
          <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
          <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
        </svg>
        <span class="text-white font-semibold text-lg">{rating().toFixed(1)}</span>
        <div
          class="flex gap-0.5"
          role="img"
          aria-label={`${rating()} de 5 estrellas en Google`}
        >
          <For each={Array(fullStars()).fill(null)}>
            {() => (
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-yellow-400" aria-hidden="true">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            )}
          </For>
          {hasHalfStar() && (
            <svg viewBox="0 0 24 24" class="w-5 h-5" aria-hidden="true">
              <defs>
                <linearGradient id="halfStarOrange">
                  <stop offset="50%" stop-color="#facc15" />
                  <stop offset="50%" stop-color="rgba(255,255,255,0.3)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#halfStarOrange)"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          )}
          <For each={Array(emptyStars()).fill(null)}>
            {() => (
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-white/30" aria-hidden="true">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            )}
          </For>
        </div>
      </div>

      <div class="hidden sm:block w-px h-6 bg-white/20" aria-hidden="true" />
      <div class="block sm:hidden w-32 h-px bg-white/20" aria-hidden="true" />

      <a
        href={GOOGLE_BUSINESS_URL}
        target="_blank"
        rel="noopener"
        class="text-white/90 text-sm hover:text-orange-400 transition-colors"
      >
        {reviewCount()} reseñas en Google
      </a>

      <div class="hidden sm:block w-px h-6 bg-white/20" aria-hidden="true" />
      <div class="block sm:hidden w-32 h-px bg-white/20" aria-hidden="true" />

      <a
        href={WRITE_REVIEW_URL}
        target="_blank"
        rel="noopener"
        class="text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors whitespace-nowrap"
      >
        Dejar reseña →
      </a>
    </div>
  );
}
