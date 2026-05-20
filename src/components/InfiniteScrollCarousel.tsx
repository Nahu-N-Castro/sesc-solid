import { For } from "solid-js";

const brands = [
  { src: "brands/cocacola.webp", alt: "Coca Cola Andina" },
  { src: "brands/comau.webp", alt: "Comau" },
  { src: "brands/crayon.webp", alt: "Crayon" },
  { src: "brands/fiat.webp", alt: "Fiat" },
  { src: "brands/mgi.webp", alt: "MGI Courtier" },
  { src: "brands/otonello.webp", alt: "Otonello" },
  { src: "brands/audoor.webp", alt: "Audoor" },
  { src: "brands/autocity.webp", alt: "Autocity" },
  { src: "brands/jeep.webp", alt: "Jeep" },
  { src: "brands/motcor.webp", alt: "Motcor" },
  { src: "brands/nissan.webp", alt: "Nissan" },
  { src: "brands/raomed.webp", alt: "Raomed" },
  { src: "brands/cars/renault.webp", alt: "Renault" },
  { src: "brands/toyota.webp", alt: "Toyota" },
  { src: "brands/royal-enfield.webp", alt: "Royal Enfield" },
];

function Track(props: { ariaHidden: boolean }) {
  return (
    <div class="animate-slide-left inline-block w-max" aria-hidden={props.ariaHidden}>
      <For each={brands}>
        {(brand) => (
          <img
            class="mx-6 sm:mx-10 inline h-12 sm:h-16 lg:h-20 hover:scale-110 transition-transform duration-500"
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
