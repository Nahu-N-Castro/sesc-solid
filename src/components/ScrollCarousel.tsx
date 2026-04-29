import { For } from "solid-js";

const row1 = Array.from({ length: 17 }, (_, i) => i + 1);
const row2 = Array.from({ length: 17 }, (_, i) => i + 18);

function Track(props: { ids: number[] }) {
  return (
    <>
      <For each={props.ids}>
        {(id) => (
          <img
            class="mx-4 rounded-lg inline h-96 hover:scale-110 transition-transform duration-500"
            src={`jobs/${id}.webp`}
            alt={`Trabajo de instalación eléctrica realizado por SESC #${id}`}
            loading="lazy"
            decoding="async"
          />
        )}
      </For>
    </>
  );
}

export default function ScrollCarousel() {
  return (
    <section aria-label="Galería de trabajos realizados">
      <div class="logos group relative overflow-hidden whitespace-nowrap py-5 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div class="animate-slide-right-slow inline-block w-max" aria-hidden="false">
          <Track ids={row1} />
        </div>
        <div class="animate-slide-right-slow inline-block w-max" aria-hidden="true">
          <Track ids={row1} />
        </div>
      </div>
      <div class="logos group relative overflow-hidden whitespace-nowrap py-5 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
        <div class="animate-slide-right-slow inline-block w-max" aria-hidden="false">
          <Track ids={row2} />
        </div>
        <div class="animate-slide-right-slow inline-block w-max" aria-hidden="true">
          <Track ids={row2} />
        </div>
      </div>
    </section>
  );
}
