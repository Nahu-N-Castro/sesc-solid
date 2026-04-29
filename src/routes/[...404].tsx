import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="flex flex-col items-center justify-center min-h-screen text-center mx-auto bg-zinc-800 text-white p-8">
      <h1 class="text-7xl sm:text-9xl font-bold text-orange-500 mb-6">404</h1>
      <h2 class="text-2xl sm:text-4xl font-semibold mb-4">Página no encontrada</h2>
      <p class="text-stone-300 mb-10 max-w-md">
        La página que estás buscando no existe o fue movida. Volvé al inicio para conocer nuestros servicios eléctricos.
      </p>
      <A
        href="/"
        class="bg-orange-500 hover:bg-white hover:text-orange-500 transition-all px-6 py-3 rounded-md font-bold uppercase"
      >
        Volver al inicio
      </A>
    </main>
  );
}
