import { For } from "solid-js";
import { Testimonials } from "~/utils/info";

export default function TestimonialItem(props: { testimonial: Testimonials, index: number }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-delay={`${props.index}00`}
      data-aos-easing="ease-in-sine"
      class="flex flex-col  justify-between gap-4 sm:gap-8 w-full sm:w-[35rem] backdrop-blur-lg rounded-2xl p-12 bg-gradient-to-t from-white/30 hover:from-white/40 via-white/10 to-transparent border border-white/20 shadow-xl text-white z-10 opacity-100 sm:opacity-85 sm:hover:opacity-100 hover:scale-[1.02] duration-500 transition-all cursor-pointer">
      <div class="flex flex-col gap-1">
        <img
          class="w-12 sm:w-32"
          src="comillas.svg"
          alt=""
          role="presentation"
          loading="lazy"
        />
        <span class="text-base sm:text-3xl text-left tracking-wide whitespace-pre-line ">
          {props.testimonial.description}
        </span>
      </div>
      <div class="flex gap-2 sm:gap-5">
        <img
          class="w-12 h-12 rounded-full"
          src={props.testimonial.photoUrl}
          alt={`Foto de perfil de ${props.testimonial.name}`}
          loading="lazy"
          width="48"
          height="48"
        />
        <div class="flex flex-col items-start gap-1">
          <p class="text-sm font-semibold">{props.testimonial.name}</p>
          <div class="flex" role="img" aria-label={`${props.testimonial.rate} de 5 estrellas`}>
            <For each={Array(props.testimonial.rate).fill(null)}>
              {() => <img class="w-5" src="/star.png" alt="" role="presentation" loading="lazy" width="20" height="20" />}
            </For>
          </div>
        </div>
      </div>

    </div>
  )
}
