import { createSignal, For, Show } from "solid-js";
import BenefitItem from "./BenefitItem";
import { benefits } from "~/utils/info";
import PopUp from "./PopUp";


export default function AboutUs() {
  const [showPopup, setShowPopup] = createSignal(false);

  const handleShow = () => {
    setShowPopup(!showPopup());
  };

  return (
    <>
      <section
        class="flex justify-center items-center py-16 sm:py-20 lg:py-28 bg-orange-500 backdrop-blur-md backdrop-brightness-75">
        <div
          data-aos="fade"
          class="w-full max-w-7xl flex flex-col h-full relative drop-shadow-xl transition-all justify-center items-center text-zinc-100 font-medium px-6 sm:px-10 lg:px-16 cursor-default">
          <div class="flex flex-col items-center text-center mb-10 lg:mb-16">
            <span class="text-sm uppercase tracking-widest font-semibold text-white/80 mb-3">Quiénes somos</span>
            <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl">Sobre Nosotros</h2>
          </div>
          <div class="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 w-full">
            <div class="flex flex-col gap-5 text-start lg:w-1/2">
              <p class="text-lg lg:text-xl font-semibold leading-snug">
                Más de 20 años de experiencia en proyectos eléctricos de alta relevancia.
              </p>
              <p class="text-base leading-relaxed text-white/90">
                Somos una empresa de servicios eléctricos creada y con crecimiento en plena crisis económica, formada por profesionales con más de 20 años de experiencia.
              </p>
              <p class="text-base leading-relaxed text-white/90">
                Participamos en proyectos de gran relevancia como centros comerciales, plantas de producción automotriz y alimentos, PYMES, comercios, edificios residenciales y comerciales, y casas de múltiples instalaciones. Siempre priorizando la calidad y la atención al cliente.
              </p>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:w-1/2 gap-3 lg:gap-4 z-10 self-center w-full">
              <For each={benefits}>
                {(benefit, index) => (
                  <BenefitItem index={index() * 2} icon={benefit.icon} label={benefit.name} />
                )}
              </For>
            </div>
          </div>
        </div>
      </section>
      <Show when={showPopup()}>
        <PopUp onClose={handleShow}>
          <div class="flex flex-col gap-4 bg-background-light sm:w-[65rem] shadow-lg rounded-2xl p-4 sm:p-6 xl:p-10 bg-white text-start">
            <h3 class="text-xl font-bold">
              Somos una empresa de servicios eléctricos creada y con crecimiento en plena crisis económica, formada por profesionales con más de 20 años de experiencia.
            </h3>
            <p class="text-lg">
              Hemos adquirido nuestra experiencia participando íntegramente en la organización y ejecución de proyectos de gran relevancia como centros comerciales, plantas de producción automotriz y de alimentos, PYMES, comercios, edificios residenciales y comerciales, además de casas con instalaciones de todos los tamaños. Siempre atendemos y priorizamos la calidad y atención al cliente que deseamos poner a su servicio en todo su ámbito.
            </p>
            <p class="text-base">
              Nuestro propósito es ser una empresa de servicios electrointegral reconocida como líder en el sector eléctrico, en el mantenimiento de instalaciones eléctricas, y en la elaboración y ejecución de proyectos de electricidad y automatismos.
              <br />
              <br />
              Nos enfocamos en ofrecer un servicio de atención y calidad adaptado a las necesidades de nuestros clientes, con profesionalismo como prioridad. Esto implica una mejora continua hacia la excelencia, comenzando con una exhaustiva selección de empleados y proveedores que cumplan con nuestros estándares y se mantengan en el tiempo.
            </p>
            <div>
              <h3 class="text-lg font-semibold">Ética - Hacer lo correcto.</h3>
              <p>Actuamos con honestidad e integridad. Somos transparentes y justos, y cumplimos con nuestros compromisos.</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Respeto - Valoramos a las personas.</h3>
              <p>
                Escuchamos y somos sinceros. Contribuimos individualmente para tener éxito como equipo y hacemos de la seguridad un estilo de vida.
              </p>
            </div>
            <p class="text-sm italic">
              Ser la electro solución que desarrolle con inteligencia y eficacia los problemas y proyectos de nuestros clientes.
            </p>
          </div>
        </PopUp>
      </Show>
    </>
  )
}

