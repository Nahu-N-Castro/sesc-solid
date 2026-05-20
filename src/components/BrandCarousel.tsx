import { For } from "solid-js";

type Brand = { name: string; logo?: string };

function Track(props: { items: Brand[]; ariaHidden: boolean }) {
  return (
    <div class="animate-slide-left inline-block w-max" aria-hidden={props.ariaHidden}>
      <For each={props.items}>
        {(brand) =>
          brand.logo ? (
            <img
              src={brand.logo}
              alt={brand.name}
              class="inline-block mx-6 sm:mx-10 lg:mx-14 h-12 sm:h-16 lg:h-20 w-auto object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500 align-middle"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span class="inline-flex items-center mx-4 sm:mx-6 lg:mx-8 px-5 sm:px-7 py-3 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 text-base sm:text-lg lg:text-xl font-semibold tracking-wide whitespace-nowrap hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-colors align-middle">
              {brand.name}
            </span>
          )
        }
      </For>
    </div>
  );
}

export default function BrandCarousel(props: {
  title: string;
  subtitle?: string;
  items: Brand[];
}) {
  return (
    <section
      class="py-14 lg:py-20 bg-white overflow-hidden"
      aria-label={props.title}
    >
      <div class="max-w-6xl mx-auto px-6 sm:px-12 text-center mb-10 lg:mb-14">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-800 mb-4">
          {props.title}
        </h2>
        {props.subtitle && (
          <p class="text-zinc-500 max-w-2xl mx-auto text-base lg:text-lg">
            {props.subtitle}
          </p>
        )}
      </div>

      <div class="relative group whitespace-nowrap py-6 [mask-image:_linear-gradient(to_right,_transparent_0,_black_128px,black_calc(100%-128px),_transparent_100%)]">
        <Track items={props.items} ariaHidden={false} />
        <Track items={props.items} ariaHidden={true} />
      </div>
    </section>
  );
}
