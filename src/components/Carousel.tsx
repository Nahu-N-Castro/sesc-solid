import { createEffect, createSignal, JSX } from "solid-js";

interface CarouselProps {
  children: JSX.Element[];  // Asegura que el children sean los slides.
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = createSignal(0);

  const prev = () => setCurr((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurr((c) => (c === slides.length - 1 ? 0 : c + 1));

  createEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div class="overflow-hidden relative">
      <div
        class="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr() * 100}%)` }}
      >
        {slides}
      </div>

      <div class="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          class="p-2 h-12 w-12 flex justify-center items-center rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <img class="rotate-90" src="/arrow.svg" alt="" />
        </button>
        <button
          onClick={next}
          class="p-2 h-12 w-12 flex justify-center items-center rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
         <img class="-rotate-90" src="/arrow.svg" alt="" />
        </button>
      </div>

      <div class="absolute bottom-4 right-0 left-0">
        <div class="flex items-center justify-center gap-2">
          {Array.from({ length: slides.length }).map((_, i) => (
            <div
              class={`transition-all w-3 h-3 rounded-full ${
                curr() === i ? "p-2 bg-white" : "bg-white bg-opacity-50"
              }`}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
