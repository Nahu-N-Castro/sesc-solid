import "aos/dist/aos.css";
import { For } from "solid-js";
import AboutUs from "~/components/AboutUs";
import Certifications from "~/components/Certifications";
import SectionContact from "~/components/Contact";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import GoogleRating from "~/components/GoogleRating";
import InfiniteScrollCarousel from "~/components/InfiniteScrollCarousel";
import InstagramFeed from "~/components/InstagramFeed";
import Process from "~/components/Process";
import ScrollCarousel from "~/components/ScrollCarousel";
import ServiceItem from "~/components/ServiceItem";
import TestimonialItem from "~/components/TestimonialItem";
import WhatsAppFloat from "~/components/WhatsAppFloat";
import { servicesMap, testimonials } from "~/utils/info";
import AOS from "aos";
import { createEffect, onMount } from "solid-js";
import { useLocation } from "@solidjs/router";

export default function Home() {
  const location = useLocation();

  onMount(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  });

  createEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const navHeight = document.querySelector("nav")?.clientHeight ?? 0;
      window.scrollTo({ top: el.offsetTop - navHeight, behavior: "smooth" });
    });
  });

  return (
    <main class="text-center mx-auto bg-zinc-800">
      <section class="h-screen relative justify-center items-center flex" aria-label="Inicio">
        <img
          class="object-cover h-full w-full absolute brightness-75 opacity-90 blur-sm"
          src="background.webp"
          alt=""
          role="presentation"
          fetchpriority="high"
          width="1920"
          height="1080"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent"></div>

        <div class="sm:w-[80%] h-full sm:h-[50%] px-8 z-10 flex items-start justify-center flex-col text-white gap-8">
          <h1 class="sm:w-[60%] text-4xl sm:text-7xl font-bold text-left">Servicios Eléctricos Integrales en Córdoba</h1>
          <p class="text-lg sm:w-[60%] sm:text-2xl text-left text-balance tracking-widest">Más de 20 Años de Experiencia Profesionales en Proyectos Eléctricos de Alta Relevancia</p>
          <a
            href="#targetContact"
            class="flex my-6 uppercase font-semibold text-lg sm:text-xl justify-center items-center bg-orange-500 px-6 py-3 sm:py-5 rounded-md hover:bg-white hover:text-orange-500 transition-all duration-300"
          >
            Contactar
          </a>
        </div>
      </section>

      <Certifications />

      <section
        id="targetServices"
        class="h-full relative flex flex-col justify-center items-center bg-zinc-800 py-20"
        aria-labelledby="services-heading"
      >
        <h2 id="services-heading" class="font-bold pb-20 z-10 text-5xl text-white cursor-default">Nuestros Servicios</h2>
        <img
          class="object-cover blur-sm h-full w-full absolute brightness-90"
          src="linea2.webp"
          alt=""
          role="presentation"
          loading="lazy"
        />
        <div class="flex flex-col sm:flex-row justify-between w-full gap-8 sm:px-36 z-10">
          <For each={Array.from(servicesMap.entries())}>
            {([name, service], index) => (
              <ServiceItem
                service={service}
                label={name}
                index={index() * 4}
              />
            )}
          </For>
        </div>
      </section>

      <Process />

      <AboutUs />

      <section class="h-full flex flex-col justify-center items-center py-32 relative" aria-labelledby="experiencias-heading">
        <h2
          id="experiencias-heading"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-offset="400"
          class="font-bold z-10 pb-10 text-5xl text-white cursor-default mb-20">Nuestras Experiencias</h2>
        <div class="w-full px-2 mx-auto">
          <div class="w-[100%]">
            <ScrollCarousel />
          </div>
        </div>
      </section>

      <section class="h-full flex flex-col justify-center items-center py-32 relative" aria-labelledby="testimonios-heading">
        <img
          class="object-cover h-full w-full absolute blur-sm brightness-100 opacity-70"
          src="bg2.webp"
          alt=""
          role="presentation"
          loading="lazy"
        />

        <h2
          id="testimonios-heading"
          class="font-bold z-10 pb-10 text-5xl text-white cursor-default">Voces de Satisfacción</h2>

        <GoogleRating rating={5} reviewCount={41} />

        <div class="w-full flex flex-col sm:flex-row gap-10 px-10 justify-center z-10">
          <For each={testimonials}>
            {(testimonial, index) => (
              <TestimonialItem
                index={index() * 5}
                testimonial={testimonial} />
            )}
          </For>
        </div>
      </section>

      <InstagramFeed />

      <FAQ />

      <section class="h-full flex flex-col justify-center items-center bg-white py-24" aria-labelledby="garantia-heading">
        <h2
          id="garantia-heading"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-offset="200"
          class="font-bold pb-12 text-4xl sm:text-5xl text-zinc-700 cursor-default text-center"
        >Nuestra Garantía de Confianza</h2>
        <div class="w-[60%]">
          <InfiniteScrollCarousel />
        </div>
      </section>

      <SectionContact />

      <Footer />

      <WhatsAppFloat />
    </main>
  );
}
