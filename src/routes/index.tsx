import "aos/dist/aos.css";
import { For } from "solid-js";
import AboutUs from "~/components/AboutUs";
import BenefitItem from "~/components/BenefitItem";
import Carousel from "~/components/Carousel";
import SectionContact from "~/components/Contact";
import Footer from "~/components/Footer";
import InfiniteScrollCarousel from "~/components/InfiniteScrollCarousel";
import ScrollCarousel from "~/components/ScrollCarousel";
import ServiceItem from "~/components/ServiceItem";
import TestimonialItem from "~/components/TestimonialItem";
import { benefits, servicesMap, testimonials } from "~/utils/info";
import AOS from "aos";
import { onMount } from "solid-js";

export default function Home() {

  onMount(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      once: true,     // Solo animar una vez (desactivado para repetir)
    });
  });

  return (
    <main class="text-center mx-auto bg-zinc-800">
      <section class="h-screen relative  justify-center items-center flex">
        <img
          class="object-cover h-full w-full absolute brightness-75 opacity-90 blur-sm "
          src="background.jpg"
          alt="background"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent"></div>

        <div
          class="sm:w-[80%] h-full sm:h-[50%] px-8 z-10 flex items-start justify-center flex-col text-white gap-8">
          <h1 class="sm:w-[60%] text-4xl sm:text-7xl font-bold text-left">Servicios Eléctricos Integrales</h1>
          <h3 class="text-lg sm:w-[60%] sm:text-2xl text-left text-balance tracking-widest">Más de 20 Años de Experiencia Profesionales en Proyectos Eléctricos de Alta Relevancia</h3>
          <button class="flex my-6 uppercase font-semibold text-lg sm:text-xl justify-center items-center bg-orange-500 px-6 py-3 sm:py-5 rounded-md hover:bg-white  hover:text-orange-500 transition-all duration-300">
            Contactar
          </button>
        </div>
      </section>

      <section

        id="targetServices"
        class="h-full relative flex flex-col justify-center items-center bg-zinc-800 py-20">
        <h1 class="font-bold pb-20 z-10 text-5xl text-white cursor-default">Nuestros Servicios</h1>
        <img
          class="object-cover blur-sm h-full w-full absolute  brightness-90"
          src="linea2.png"
          alt="background"
        />
        <div class="flex flex-col sm:flex-row justify-between w-full gap-8 sm:px-36">
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

      <AboutUs />

      <section class="h-full flex flex-col justify-center items-center py-32 relative">
        <h1
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-offset="400"
          class="font-bold z-10 pb-10 text-5xl text-white cursor-default mb-20">Nuestras Experiencias</h1>
        <div class="w-full px-2 mx-auto">
          <div class="w-[100%]">
            <ScrollCarousel />
          </div>
        </div>
      </section>


      {/* <section class="h-full flex flex-col justify-center items-center py-32 relative">
        <h1 class="font-bold z-10 pb-20 text-5xl text-white cursor-default">Nuestras Experiencias</h1>

        <div class="w-full max-w-screen-2xl mx-auto">
          <Carousel autoSlide autoSlideInterval={4000}>
            {slides.map((s) =>
              <img src={s} />
            )}
          </Carousel>
        </div>
      </section> */}

      <section class="h-full flex flex-col justify-center items-center py-32 relative">
        <img
          class="object-cover h-full w-full absolute blur-sm brightness-100 opacity-70"
          src="bg2.jpg"
          alt="background"
        />

        <h1
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-offset="400"
          class="font-bold z-10 pb-20 text-5xl text-white cursor-default">Voces de Satisfacción</h1>
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

      <section class="h-full flex flex-col justify-center items-center bg-white py-32" >
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-offset="200"
          class="font-bold pb-20 text-5xl text-zinc-700 cursor-default"
        >Nuestra Garantia de Confianza</h1>
        <div class="w-[60%]">
          <InfiniteScrollCarousel />
        </div>
      </section>

      <SectionContact />

      <Footer />

    </main >
  );
}
