import { createSignal, onCleanup, onMount } from "solid-js";
import { A, useLocation } from "@solidjs/router";

export default function Nav() {
  const [open, setOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);
  const location = useLocation();

  const isHome = () => location.pathname === "/";
  const linkTo = (hash: string) => (isHome() ? `#${hash}` : `/#${hash}`);

  const toggleMenu = () => setOpen(!open());
  const closeMenu = () => setOpen(false);

  const handleAnchorClick = (hash: string) => (e: MouseEvent) => {
    closeMenu();
    if (!isHome()) return; // dejar que el router navegue a /#hash
    e.preventDefault();
    const target = document.getElementById(hash);
    if (!target) return;
    const navHeight = document.querySelector("nav")?.clientHeight ?? 0;
    window.scrollTo({
      top: target.offsetTop - navHeight,
      behavior: "smooth",
    });
    history.replaceState(null, "", `#${hash}`);
  };

  onMount(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });

  return (
    <nav
      id="home"
      aria-label="Navegación principal"
      class={`flex w-full items-center justify-center px-5 fixed z-40 backdrop-blur-md transition-all ${
        open() || scrolled() ? "bg-black/90 h-[8vh]" : "bg-transparent bg-opacity-20 h-[10vh]"
      }`}
    >
      <div class="flex w-full h-20 lg:w-[1000px] items-center justify-between">
        <A href="/" aria-label="Ir al inicio" onClick={closeMenu}>
          <img
            class="w-16 h-16 rounded-full drop-shadow shadow-black"
            src="/logo-orange.png"
            alt="SESC - Servicios Eléctricos Integrales"
            width="64"
            height="64"
          />
        </A>
        <section class="flex gap-5 items-center font-bold text-white text-sm">
          <A
            href={linkTo("home")}
            onClick={handleAnchorClick("home")}
            class="hidden lg:flex md:px-3 md:py-2 md:rounded-md border-2 border-transparent hover:border-orange-500 transition-all"
          >
            INICIO
          </A>
          <A
            href={linkTo("targetServices")}
            onClick={handleAnchorClick("targetServices")}
            class="hidden lg:flex md:px-3 md:py-2 md:rounded-md border-2 border-transparent hover:border-orange-500 transition-all"
          >
            SERVICIOS
          </A>
          <A
            href="/movilidad-electrica"
            onClick={closeMenu}
            class="hidden lg:flex md:px-3 md:py-2 md:rounded-md border-2 border-transparent hover:border-orange-500 transition-all"
          >
            MOVILIDAD ELÉCTRICA
          </A>
          <A
            href={linkTo("targetContact")}
            onClick={handleAnchorClick("targetContact")}
            class="hidden lg:flex md:px-3 md:py-2 md:rounded-md border-2 border-transparent hover:border-orange-500 transition-all"
          >
            CONTACTO
          </A>
          <a
            class="flex justify-center items-center bg-orange-500 px-3 py-3 rounded-md text-sm hover:bg-white hover:text-orange-500 transition-all"
            href="tel:+543512922784"
          >
            LLAMAR AHORA
          </a>
          <div class="lg:hidden flex flex-col">
            <button
              onClick={toggleMenu}
              class="relative"
              aria-label={open() ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open()}
              aria-controls="miNavbarOption"
            >
              <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${open() ? "translate-x-10" : ""}`}></div>
                  <div class={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${open() ? "translate-x-10 delay-75" : ""}`}></div>
                  <div class={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${open() ? "translate-x-10 delay-150" : ""}`}></div>
                  <div class={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${open() ? "translate-x-0" : ""} flex w-0 ${open() ? "w-12" : ""}`}>
                    <div class={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${open() ? "rotate-45 delay-300" : "rotate-0"}`}></div>
                    <div class={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${open() ? "-rotate-45 delay-300" : "rotate-0"}`}></div>
                  </div>
                </div>
              </div>
            </button>

            <div
              id="miNavbarOption"
              class={`absolute z-30 w-full h-screen py-5 right-0 text-xl bg-black/95 backdrop-blur-md transition-all ${
                open() ? "block" : "hidden"
              } ${scrolled() ? "top-[8vh]" : "top-[10vh]"}`}
            >
              <A
                href={linkTo("home")}
                onClick={handleAnchorClick("home")}
                class="flex mx-5 my-10 pb-2 justify-center border-b-2 border-orange-500"
              >
                INICIO
              </A>
              <A
                href={linkTo("targetServices")}
                onClick={handleAnchorClick("targetServices")}
                class="flex mx-5 my-10 pb-2 justify-center border-b-2 border-orange-500"
              >
                SERVICIOS
              </A>
              <A
                href={linkTo("targetContact")}
                onClick={handleAnchorClick("targetContact")}
                class="flex mx-5 my-10 pb-2 justify-center border-b-2 border-orange-500"
              >
                CONTACTO
              </A>
              <div class="flex flex-col gap-3 mx-5 mt-10 pt-5 border-t border-white/20">
                <p class="text-white/60 text-sm uppercase tracking-wider text-center">Servicios</p>
                <A href="/electricidad" onClick={closeMenu} class="text-base text-white/80 text-center py-2 hover:text-orange-500">Electricidad Integral</A>
                <A href="/seguridad-electronica" onClick={closeMenu} class="text-base text-white/80 text-center py-2 hover:text-orange-500">Seguridad Electrónica</A>
                <A href="/energia-solar" onClick={closeMenu} class="text-base text-white/80 text-center py-2 hover:text-orange-500">Energías Renovables</A>
                <A href="/movilidad-electrica" onClick={closeMenu} class="text-base text-white/80 text-center py-2 hover:text-orange-500">Movilidad Eléctrica</A>
              </div>
              <div class="flex justify-center gap-4 mx-5 mt-8 pt-5 border-t border-white/20">
                <a
                  href="https://www.facebook.com/PabloDCtecnico"
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                  onClick={closeMenu}
                  class="w-11 h-11 rounded-full bg-white/5 hover:bg-orange-500 flex items-center justify-center transition-colors"
                >
                  <svg class="w-5 h-5 text-white" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M41.5 4H9.5C6.74 4 4.5 6.24 4.5 9V41C4.5 43.76 6.74 46 9.5 46H41.5C44.26 46 46.5 43.76 46.5 41V9C46.5 6.24 44.26 4 41.5 4ZM37.5 19H35.5C33.36 19 32.5 19.5 32.5 21V24H37.5L36.5 29H32.5V44H27.5V29H23.5V24H27.5V21C27.5 17 29.5 14 33.5 14C36.4 14 37.5 15 37.5 15V19Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/electricidad_sesc"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  onClick={closeMenu}
                  class="w-11 h-11 rounded-full bg-white/5 hover:bg-orange-500 flex items-center justify-center transition-colors"
                >
                  <svg class="w-5 h-5 text-white" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16.5 3C9.33 3 3.5 8.83 3.5 16V34C3.5 41.17 9.33 47 16.5 47H34.5C41.67 47 47.5 41.17 47.5 34V16C47.5 8.83 41.67 3 34.5 3H16.5ZM37.5 11C38.6 11 39.5 11.9 39.5 13C39.5 14.1 38.6 15 37.5 15C36.4 15 35.5 14.1 35.5 13C35.5 11.9 36.4 11 37.5 11ZM25.5 14C31.57 14 36.5 18.93 36.5 25C36.5 31.07 31.57 36 25.5 36C19.43 36 14.5 31.07 14.5 25C14.5 18.93 19.43 14 25.5 14ZM25.5 16C20.54 16 16.5 20.04 16.5 25C16.5 29.96 20.54 34 25.5 34C30.46 34 34.5 29.96 34.5 25C34.5 20.04 30.46 16 25.5 16Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
}
