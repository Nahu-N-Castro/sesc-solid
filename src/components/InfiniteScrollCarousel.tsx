import { For } from "solid-js";

const brands = [
  { src: "brands/cocacola.png", alt: "Coca Cola Andina" },
  { src: "brands/comau.png", alt: "Comau" },
  { src: "brands/crayon.jpg", alt: "Crayon" },
  { src: "brands/fiat.png", alt: "Fiat" },
  { src: "brands/mgi.jpg", alt: "MGI Courtier" },
  { src: "brands/otonello.png", alt: "Otonello" },
];

function Track(props: { ariaHidden: boolean }) {
  return (
    <div class="animate-slide-left inline-block w-max" aria-hidden={props.ariaHidden}>
      <For each={brands}>
        {(brand) => (
          <img
            class="mx-10 inline h-20 hover:scale-110 transition-transform duration-500"
            src={brand.src}
            alt={`Cliente: ${brand.alt}`}
            loading="lazy"
            decoding="async"
          />
        )}
      </For>
    </div>
  );
}

export default function InfiniteScrollCarousel() {
  return (
    <section class="py-8" aria-label="Marcas que confiaron en nosotros">
      <div class="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <Track ariaHidden={false} />
        <Track ariaHidden={true} />
      </div>
    </section>
  );
}
