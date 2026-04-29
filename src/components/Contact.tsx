export default function SectionContact() {
  return (
    <section
      id="targetContact"
      class="flex flex-col h-full w-full justify-center items-center py-16 bg-center bg-cover"
      style="background-image: url('/torres.webp')"
      aria-labelledby="contacto-heading"
    >
      <h2 id="contacto-heading" class="text-white font-bold text-4xl sm:text-5xl mb-10 drop-shadow-lg">Contactanos</h2>

      <div
        class="flex flex-col lg:flex-row gap-10 lg:gap-32 px-16 py-11 text-white bg-black bg-opacity-25 rounded-2xl backdrop-blur-lg">
        <div class="flex flex-col items-center lg:items-start gap-3">
          <img
            class="py-5"
            src="/icon-phone.png"
            alt=""
            role="presentation"
            height="50"
            width="50"
            loading="lazy"
          />
          <h3 class="font-bold text-lg">LLAMANOS</h3>
          <p class="font-light text-stone-300">+54 351-2922784</p>
          <a class="underline" href="tel:+543512922784">Marcar Número</a>
        </div>
        <div class="flex flex-col items-center lg:items-start gap-3">
          <img
            class="py-5"
            src="/icon-email.png"
            alt=""
            role="presentation"
            height="50"
            width="50"
            loading="lazy"
          />
          <h3 class="font-bold text-lg">ENVIANOS UN MAIL</h3>
          <p class="font-light text-stone-300">sesc.especializado@gmail.com</p>
          <a
            class="underline"
            href="mailto:sesc.especializado@gmail.com">
            Enviarnos un mail
          </a>
        </div>
        <div class="flex flex-col items-center lg:items-start gap-3">
          <img
            class="py-5"
            src="/icon-pin.png"
            alt=""
            role="presentation"
            height="50"
            width="50"
            loading="lazy"
          />
          <h3 class="font-bold text-lg">UBICACIÓN</h3>
          <p class="font-light text-stone-300">Córdoba, Argentina</p>
          <a
            class="underline"
            href="https://maps.app.goo.gl/VjgXKgWryJLEFF9Y6?g_st=iw"
            target="_blank"
            rel="noopener">
            Visitar Mapa
          </a>
        </div>
      </div>
    </section>
  )
}
