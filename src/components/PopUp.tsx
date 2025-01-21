import { createSignal } from "solid-js";

function PopUp(props: any) {
  const [isClosing, setIsClosing] = createSignal(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      props.onClose();
    }, 300); // Asegúrate de que coincida con la duración de la animación
  };

  return (
    <div

      class={`h-screen w-screen fixed top-0 left-0 z-40 flex justify-center  ${isClosing() ? "animate-fade-out-backdrop" : "animate-fade-in-backdrop"
        }`}
    >
      <button
        class="lg:hidden p-2 fixed rounded-full top-14 right-5 bg-zinc-800 z-[999] shadow-lg"
        onClick={handleClose}
      >
        <img class="h-8 w-8 sm:h-10 sm:w-10 p-1" src="/close.png" alt="close" />
      </button>

      <div
        onClick={handleClose}
        class="h-screen w-screen absolute z-10"
      />

      <div

        class={`relative z-50 py-10 rounded-lg pointer-events-auto overflow-y-auto scrollbar-hidden ${isClosing() ? "animate-fade-out-content" : "animate-fade-in-content"
          }`}

      >

        {props.children}
      </div>
    </div>
  );
}

export default PopUp;
