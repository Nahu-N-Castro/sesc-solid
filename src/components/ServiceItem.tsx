import { createSignal, For, onCleanup, onMount, Show } from "solid-js";
import PopUp from "./PopUp";
import { ServiceDetail } from "~/utils/info";

export default function ServiceItem(props: { service: ServiceDetail[], label: string, index: number }) {
  const [currentIconIndex, setCurrentIconIndex] = createSignal(0);
  const [isFading, setIsFading] = createSignal(false);
  const [showPopup, setShowPopup] = createSignal(false);

  const changeImage = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIconIndex((prev) => (prev + 1) % props.service.length);
      setIsFading(false);
    }, 250);
  };

  onMount(() => {
    const interval = setInterval(changeImage, 5000);
    onCleanup(() => clearInterval(interval));
  });

  const handleShow = () => {
    setShowPopup(!showPopup());
  };

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay={`${props.index}00`}
        data-aos-easing="ease-in-sine"
        class="relative flex h-full flex-col gap-5 items-center rounded-xl shadow-md cursor-pointer group">
        <div

          class={`w-96 h-[40rem] relative transition-all duration-500 rounded-lg ${isFading() ? "brightness-0" : "brightness-100"}`}
        >
          <img
            class="w-full h-full object-cover brightness-50 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500 rounded-xl"
            src={props.service[currentIconIndex()].icon}
            alt={props.label}
          />
        </div>

        <h4 class="w-72 absolute top-10 text-white text-pretty font-medium text-3xl uppercase tracking-wide group-hover:scale-110 transition-transform duration-500">
          {props.label}
        </h4>

        <button
          onClick={handleShow}
          class="absolute bottom-5 opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-orange-500 text-white hover:brightness-125 font-medium flex items-center px-6 py-2 rounded-xl gap-2 text-xl "
        >
          Ver Más
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-white -rotate-45"
          >
            <path d="M14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978H4.75c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" />
          </svg>
        </button>
      </div>

      <Show when={showPopup()}>
        <PopUp onClose={handleShow}>
          <div class="flex flex-col gap-4 z-[999] bg-background-light w-full sm:w-[65rem] shadow-lg rounded-2xl p-4 py-16 sm:p-6 xl:p-10  bg-white">
            <h2 class="w-full px-2 sm:px-0 text-left text-zinc-800 tracking-wider font-medium text-base sm:text-xl">{props.label}</h2>
            <div class="flex flex-col w-full">
              <div class="flex flex-col justify-center items-center w-full gap-5 pb-2">
                <For each={props.service}>
                  {(serviceDetail) => (
                    <div class="flex flex-col items-center gap-5 w-full px-2 sm:px-10">
                      <h1 class="w-full text-left text-zinc-900 font-bold text-3xl sm:text-5xl">{serviceDetail.title}</h1>
                      <div class="flex flex-col gap-5 py-14 rounded-3xl ">
                        <div class="w-full relative transition-all duration-500 rounded-lg ">
                          <img
                            class="w-full object-cover rounded-3xl transition-all duration-500"
                            src={serviceDetail.icon}
                            alt={serviceDetail.title}
                          />
                        </div>
                        <p class="text-left text-lg text-zinc-600">
                          {serviceDetail.description}
                        </p>
                      </div>
                    </div>
                  )}
                </For>

              </div>
            </div>
          </div>
        </PopUp>
      </Show>
    </>
  );
}
