export default function Footer() {
  return (
    <div class="w-full flex flex-col">
      <section
        class="w-full flex flex-col sm:flex-row gap-8 sm:gap-24 py-10 px-8 max-w-screen-2xl mx-auto justify-between items-center sm:items-start text-white">
        <img
          class="w-36 h-36 rounded-full my-auto"
          alt="Logo SESC"
          src="/public/logo.png" />
        {/* <div
          class="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full justify-center px-5">
          <a
            class="flex justify-center items-center bg-orange-500 px-3 py-3 rounded-md text-sm font-bold hover:bg-white hover:text-orange-500 transition-all"
            href="tel:+543512922784">
            LLAMAR AHORA
          </a>
        </div> */}
        <div class="flex flex-col gap-2 items-center sm:items-start">
          <h1 class="text-2xl text-start font-bold uppercase">Seguinos</h1>
          <div
            class="flex gap-5">
            <a href="https://www.facebook.com/PabloDCtecnico" target="_blank">
              <svg
                class="w-12 h-12 sm:w-16 sm:h-16 hover:text-orange-500 transition-colors"
                width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g id="icons8-facebook 1">
                  <path id="Vector" d="M41.5 4H9.5C6.74 4 4.5 6.24 4.5 9V41C4.5 43.76 6.74 46 9.5 46H41.5C44.26 46 46.5 43.76 46.5 41V9C46.5 6.24 44.26 4 41.5 4ZM37.5 19H35.5C33.36 19 32.5 19.5 32.5 21V24H37.5L36.5 29H32.5V44H27.5V29H23.5V24H27.5V21C27.5 17 29.5 14 33.5 14C36.4 14 37.5 15 37.5 15V19Z" />
                </g>
              </svg>
            </a>
            <a href="https://www.instagram.com/electricidad_sesc" target="_blank">
              <svg
                class="w-12 h-12 sm:w-16 sm:h-16 hover:text-orange-500 transition-colors"
                width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g id="icons8-instagram 1">
                  <path id="Vector" d="M16.5 3C9.33 3 3.5 8.83 3.5 16V34C3.5 41.17 9.33 47 16.5 47H34.5C41.67 47 47.5 41.17 47.5 34V16C47.5 8.83 41.67 3 34.5 3H16.5ZM37.5 11C38.6 11 39.5 11.9 39.5 13C39.5 14.1 38.6 15 37.5 15C36.4 15 35.5 14.1 35.5 13C35.5 11.9 36.4 11 37.5 11ZM25.5 14C31.57 14 36.5 18.93 36.5 25C36.5 31.07 31.57 36 25.5 36C19.43 36 14.5 31.07 14.5 25C14.5 18.93 19.43 14 25.5 14ZM25.5 16C20.54 16 16.5 20.04 16.5 25C16.5 29.96 20.54 34 25.5 34C30.46 34 34.5 29.96 34.5 25C34.5 20.04 30.46 16 25.5 16Z" />
                </g>
              </svg>
            </a>
            <a
              href="https://wa.me/543512922784" target="_blank">
              <svg
                class="w-12 h-12 sm:w-16 sm:h-16 hover:text-orange-500 transition-colors"
                width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g id="icons8-whatsapp 1">
                  <path id="Vector" d="M25.5 2C12.818 2 2.5 12.318 2.5 25C2.5 28.96 3.523 32.854 5.463 36.29L2.537 46.73C2.441 47.073 2.534 47.441 2.782 47.696C2.973 47.893 3.233 48 3.5 48C3.58 48 3.661 47.99 3.74 47.971L14.636 45.272C17.963 47.058 21.71 48 25.5 48C38.182 48 48.5 37.682 48.5 25C48.5 12.318 38.182 2 25.5 2ZM37.07 33.116C36.578 34.478 34.218 35.721 33.084 35.888C32.066 36.037 30.778 36.101 29.364 35.657C28.507 35.387 27.407 35.029 25.998 34.428C20.075 31.902 16.207 26.013 15.911 25.624C15.616 25.235 13.5 22.463 13.5 19.594C13.5 16.725 15.025 15.314 15.567 14.73C16.109 14.146 16.748 14 17.142 14C17.536 14 17.929 14.005 18.274 14.021C18.637 14.039 19.124 13.884 19.603 15.022C20.095 16.19 21.276 19.059 21.422 19.352C21.57 19.644 21.668 19.985 21.472 20.374C21.276 20.763 21.178 21.006 20.882 21.347C20.586 21.688 20.262 22.107 19.996 22.369C19.7 22.66 19.393 22.975 19.737 23.559C20.081 24.143 21.266 26.052 23.022 27.598C25.277 29.584 27.18 30.2 27.77 30.492C28.36 30.784 28.705 30.735 29.049 30.346C29.393 29.956 30.525 28.643 30.918 28.06C31.311 27.477 31.705 27.573 32.247 27.768C32.789 27.962 35.692 29.372 36.282 29.664C36.872 29.956 37.266 30.102 37.414 30.345C37.562 30.587 37.562 31.755 37.07 33.116Z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full justify-center items-center mt-3">
          <a
            class="flex justify-center items-center text-white bg-orange-500 px-3 py-3 rounded-md text-sm font-bold hover:bg-white hover:text-orange-500 transition-all"
            href="tel:+543512922784">
            LLAMAR AHORA
          </a>
        </div>

        <div
          class="flex-col gap-2 flex">
          <h1 class="text-2xl sm:text-start font-bold uppercase">Sobre Nosotros</h1>
          <span class="sm:text-start w-72">Somos una empresa de servicios eléctricos creada y con crecimiento en plena crisis económica, formada por profesionales con más de 20 años de experiencia.</span>
        </div>
      </section>

      <div class="w-full bg-zinc-900 text-white py-2 text-sm">Desarrolado por&nbsp;
        <a href="https://www.linkedin.com/in/nahuelcastro/"
          class="text-orange-500 font-bold"
          target="_blank">
          Nahuel Castro&nbsp;</a>
        | @2024</div >
    </div>
  )
}
