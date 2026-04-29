import { createSignal, onCleanup, onMount } from "solid-js";
import { A } from "@solidjs/router";
import { ServiceDetail } from "~/utils/info";

const labelToSlug: Record<string, string> = {
  "Electricidad Integral": "electricidad",
  "Seguridad Electrónica": "seguridad-electronica",
  "Energias Renovables": "energia-solar",
  "Climatización": "climatizacion",
};

export default function ServiceItem(props: { service: ServiceDetail[], label: string, index: number }) {
  const [currentIconIndex, setCurrentIconIndex] = createSignal(0);
  const [isFading, setIsFading] = createSignal(false);

  onMount(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIconIndex((prev) => (prev + 1) % props.service.length);
        setIsFading(false);
      }, 250);
    }, 5000);
    onCleanup(() => clearInterval(interval));
  });

  return (
    <A
      href={`/${labelToSlug[props.label] ?? ""}`}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={`${props.index}00`}
      data-aos-easing="ease-in-sine"
      class="relative flex h-full flex-col gap-5 items-center rounded-xl shadow-md cursor-pointer group"
      aria-label={`Ver detalles de ${props.label}`}
    >
      <div
        class={`w-80 h-[32rem] relative transition-all duration-500 rounded-lg ${isFading() ? "brightness-0" : "brightness-100"}`}
      >
        <img
          class="w-full h-full object-cover brightness-50 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500 rounded-xl"
          src={props.service[currentIconIndex()].icon}
          alt={`Servicio de ${props.label} - ${props.service[currentIconIndex()].title}`}
          loading="lazy"
          width="320"
          height="512"
        />
      </div>

      <h3 class="w-72 absolute top-10 text-white text-pretty font-medium text-3xl uppercase tracking-wide group-hover:scale-110 transition-transform duration-500">
        {props.label}
      </h3>

      <span
        aria-hidden="true"
        class="absolute bottom-5 opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-orange-500 text-white font-medium flex items-center px-6 py-2 rounded-xl gap-2 text-xl"
      >
        Ver Más
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 text-white -rotate-45"
          aria-hidden="true"
        >
          <path d="M14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978H4.75c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
        </svg>
      </span>
    </A>
  );
}
