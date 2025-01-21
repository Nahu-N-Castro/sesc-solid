import { createSignal, Match, onCleanup, onMount, Switch } from "solid-js";

export default function Nav() {
  const [open, setOpen] = createSignal(false);

  const toggleMenu = () => setOpen(!open());

  onMount(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = document.querySelector("nav")!.offsetHeight;
          const targetOffset = targetElement.offsetTop - navbarHeight;

          window.scrollTo({
            top: targetOffset,
            behavior: "smooth",
          });
        }
      });
    });

    // Navbar scroll behavior
    const handleScroll = () => {
      const navbar = document.getElementById("home");
      const option = document.getElementById("miNavbarOption");

      if (window.scrollY > 50) {
        navbar?.classList.remove("bg-transparent", "h-[10vh]");
        navbar?.classList.add("bg-black", "h-[8vh]");
        option?.classList.remove("top-[10vh]");
        option?.classList.add("top-[8vh]");
      } else {
        navbar?.classList.remove("bg-black", "h-[8vh]");
        navbar?.classList.add("bg-transparent", "h-[10vh]");
        option?.classList.remove("top-[8vh]");
        option?.classList.add("top-[10vh]");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return (
    <nav
      id="home"
      class={`flex w-full items-center justify-center px-5 fixed z-20 ${open() ? "bg-black/90" : "bg-transparent bg-opacity-20"} backdrop-blur-md transition-all h-[10vh]`}
    >
      <div class="flex w-full h-20 lg:w-[1000px] items-center justify-between ">
        <a href="#home">
          <img
            class="w-16 h-16 rounded-full drop-shadow shadow-black"
            src="/public/logo-orange.png"
            alt="logo"
          />
        </a>
        <section class="flex gap-5 items-center font-bold text-white text-sm ">
          <a
            href="#home"
            class="hidden lg:flex md:px-3 md:py-2 md:rounded-md border-2 border-transparent hover:border-2 hover:border-orange-500 transition-all"
          >
            INICIO
          </a>
          <a
            href="#targetServices"
            class="hidden lg:flex md:px-3 md:py-2 md:rounded-md border-2 border-transparent hover:border-2 hover:border-orange-500 transition-all"
          >
            SERVICIOS
          </a>
          <a
            href="#targetContact"
            class="hidden lg:flex md:px-3 md:py-2 md:rounded-md border-2 border-transparent hover:border-2 hover:border-orange-500 transition-all"
          >
            CONTACTO
          </a>
          <a
            class="flex justify-center items-center bg-orange-500 px-3 py-3 rounded-md text-sm hover:bg-white hover:text-orange-500 transition-all"
            href="tel:+543512922784"
          >
            LLAMAR AHORA
          </a>
          <div class="sm:hidden flex flex-col ">
            <div>
              <button
                onClick={toggleMenu}
                class="relative"
              >
                <div
                  class={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 `}
                >
                  <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                    <div class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${open() ? 'translate-x-10' : ''}`}></div>
                    <div class={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${open() ? 'translate-x-10 delay-75' : ''}`}></div>
                    <div class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${open() ? 'translate-x-10 delay-150' : ''}`}></div>

                    <div
                      class={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${open() ? 'translate-x-0' : ''} flex w-0 ${open() ? 'w-12' : ''}`}
                    >
                      <div
                        class={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${open() ? 'rotate-45 delay-300' : 'rotate-0'}`}
                      ></div>
                      <div
                        class={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${open() ? '-rotate-45 delay-300' : 'rotate-0'}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* <button onClick={toggleMenu} class="relative transition-transform duration-300">
              <Switch>
                <Match when={!open()}>
                  <img
                    src="/public/menu.png"
                    class="w-8 transition-transform duration-300 ease-in-out transform rotate-0"
                    alt="menu"
                  />
                </Match>
                <Match when={open()}>
                  <img
                    src="/public/close.png"
                    class="w-8 transition-transform duration-300 ease-in-out transform rotate-45  animate-spin"
                    alt="close"
                  />
                </Match>
              </Switch>
            </button> */}
            <div
              id="miNavbarOption"
              class={`absolute z-20 w-full h-screen py-5 right-0 top-[10vh] text-xl bg-black/90 backdrop-blur-md transition-all ${open() ? "block" : "hidden"
                }`}
            >
              <a
                onClick={toggleMenu}
                href="#home"
                class="flex mx-5 my-10 pb-2 justify-center border-b-2 border-orange-500"
              >
                INICIO
              </a>
              <a
                onClick={toggleMenu}
                href="#targetServices"
                class="flex mx-5 my-10 pb-2 justify-center border-b-2 border-orange-500"
              >
                SERVICIOS
              </a>
              <a
                onClick={toggleMenu}
                href="#targetContact"
                class="flex mx-5 my-10 pb-2 justify-center border-b-2 border-orange-500"
              >
                CONTACTO
              </a>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
}
