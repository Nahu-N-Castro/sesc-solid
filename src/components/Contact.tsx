

export default function SectionContact() {
  return (
    <section
      id="targetContact"
      class="flex h-full w-full justify-center items-center lg:h-[30rem] py-5 bg-center"
      style="background-image: url('/torres.jpeg')">
      <div
        class="flex flex-col lg:flex-row gap-10 lg:gap-32 px-16 py-11 text-white bg-black bg-opacity-25 rounded-2xl backdrop-blur-lg">
        <div class="flex flex-col items-center lg:items-start gap-3">
          <img
            class="py-5"
            src="/icon-phone.png"
            alt="Icono Telefono"
            height="50"
            width="50" />
          <h1 class="font-bold text-lg">LLAMANOS</h1>
          <h2 class="font-light text-stone-300">+54 351-2922784</h2>
          <a class="underline" href="tel:+543512922784">Marcar Numero</a>
        </div>
        <div class="flex flex-col items-center lg:items-start gap-3">
          <img
            class="py-5"
            src="/icon-email.png"
            alt="Icono Correo"
            height="50"
            width="50" />
          <h1 class="font-bold text-lg">ENVIANOS UN MAIL</h1>
          <h2 class="font-light text-stone-300">sesc.especializado@gmail.com</h2>
          <a
            class="underline"
            href="mailto:sesc.especializado@gmail.com"
            target="_blank">
            Enviarnos un mail
          </a>
        </div>
        <div class="flex flex-col items-center lg:items-start gap-3">
          <img
            class="py-5"
            src="/icon-pin.png"
            alt="Icono Locación"
            height="50"
            width="50" />
          <h1 class="font-bold text-lg">UBICACIÓN</h1>
          <h2 class="font-light text-stone-300">Córdoba, Argentina</h2>
          <a
            class="underline"
            href="https://maps.app.goo.gl/VjgXKgWryJLEFF9Y6?g_st=iw"
            target="_blank">
            Visitar Mapa
          </a>
        </div>
      </div>
    </section>
  )
}
