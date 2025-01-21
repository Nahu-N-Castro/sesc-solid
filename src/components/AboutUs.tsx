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
        class="flex justify-center items-center py-32 bg-orange-500 backdrop-blur-md backdrop-brightness-75">
        <div
          data-aos="fade"
          class="w-full flex flex-col h-full relative drop-shadow-xl transition-all justify-center items-center text-zinc-100 font-medium px-4 sm:px-52 cursor-default">
          <h1 class="font-bold mb-20 text-5xl ">Sobre Nosostros</h1>
          <div class="flex flex-col sm:flex-row justify-between gap-10">
            <div class="flex flex-col text-start sm:w-[50%]">
              <p class="drop-shadow-md ">Somos una empresa de servicios eléctricos creada y con crecimiento en
                plena crisis económica, formada por profesionales con más de 20 años de
                experiencia.
              </p>
              <p class="drop-shadow-md">
                Hemos adquirido nuestra experiencia participando íntegramente en la
                organización y ejecución de proyectos de gran relevancia como son centros
                comerciales, plantas de producción automotriz y alimentos, PYMES y
                comercios, edificios residenciales y comerciales, casas de múltiples
                instalaciones y pequeñas también, pero no por ello menos importantes para
                nosotros, siempre atendiendo y primando la calidad y atención al cliente que
                deseamos poner a su servicio en todo su ámbito.
              </p>
              {/* <button
                onClick={handleShow}
                class="w-fit my-6 font-semibold text-md bg-white shadow-md hover:shadow-lg px-4 py-3 rounded-md text-orange-500 transition-all hover:scale-105 duration-300 hover:-translate-y-1">
                Descubre Más
              </button> */}
            </div>
            <div class="grid sm:grid-cols-3 sm:w-[50%] gap-8 z-10">
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
            <h1 class="text-xl font-bold">
              Somos una empresa de servicios eléctricos creada y con crecimiento en plena crisis económica, formada por profesionales con más de 20 años de experiencia.
            </h1>
            <h2 class="text-lg">
              Hemos adquirido nuestra experiencia participando íntegramente en la organización y ejecución de proyectos de gran relevancia como centros comerciales, plantas de producción automotriz y de alimentos, PYMES, comercios, edificios residenciales y comerciales, además de casas con instalaciones de todos los tamaños. Siempre atendemos y priorizamos la calidad y atención al cliente que deseamos poner a su servicio en todo su ámbito.
            </h2>
            <h5 class="text-base">
              Nuestro propósito es ser una empresa de servicios electrointegral reconocida como líder en el sector eléctrico, en el mantenimiento de instalaciones eléctricas, y en la elaboración y ejecución de proyectos de electricidad y automatismos.
              <br />
              <br />
              Nos enfocamos en ofrecer un servicio de atención y calidad adaptado a las necesidades de nuestros clientes, con profesionalismo como prioridad. Esto implica una mejora continua hacia la excelencia, comenzando con una exhaustiva selección de empleados y proveedores que cumplan con nuestros estándares y se mantengan en el tiempo.
            </h5>
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

