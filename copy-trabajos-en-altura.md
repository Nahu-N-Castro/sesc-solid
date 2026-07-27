# Copy — Trabajos en Altura (`/trabajos-en-altura`)

> Copy listo para pegar en `src/utils/services-pages.ts` y demás archivos.
> Imágenes: placeholders `TODO` hasta que pasen las fotos/videos reales del hidroelevador.

## SEO

- **metaTitle:** Trabajos en Altura con Hidroelevador en Córdoba | Iluminación Deportiva y Alumbrado - SESC
- **metaDescription:** Trabajos en altura con hidroelevador propio de hasta 11 metros en Córdoba: iluminación deportiva LED para canchas y clubes, mantenimiento de alumbrado público y privado, acometidas y trabajos sobre postes y líneas. Personal habilitado, presupuesto sin cargo.
- **Keywords a sumar en `entry-server.tsx`:** trabajos en altura Córdoba, hidroelevador Córdoba, iluminación deportiva, iluminación canchas de tenis, recambio luminarias LED, alumbrado público mantenimiento

## Hero

- **Headline (H1):** Trabajos en Altura
- **Subheadline:** Hidroelevador propio con alcance de hasta 11 metros. Iluminación deportiva, alumbrado público y privado, y trabajos sobre postes y líneas en toda la provincia de Córdoba.
- **CTA primario:** Consultar por WhatsApp
- **CTA secundario:** Llamar ahora
- **Mensaje WhatsApp prellenado:** Hola SESC, me interesa el servicio de Trabajos en Altura. ¿Pueden asesorarme?

## ¿Qué incluye este servicio? (features)

1. Hidroelevador propio con alcance de hasta 11 m
2. Iluminación LED para canchas y clubes
3. Recambio y reparación de luminarias en altura
4. Mantenimiento de alumbrado público y privado
5. Acometidas y tendidos aéreos
6. Colocación y recambio de postes y brazos
7. Personal habilitado para trabajo en altura
8. Cobertura en toda la provincia de Córdoba

## Secciones

### 1. Iluminación Deportiva
Proyectamos, instalamos y renovamos la iluminación de canchas de tenis, pádel, fútbol y predios deportivos. Realizamos recambio de proyectores a tecnología LED, orientación y enfoque de artefactos, y mantenimiento de columnas y estructuras de iluminación. Con nuestro hidroelevador trabajamos directamente sobre la cancha, de forma rápida y segura, sin dañar la superficie de juego.

*(imagen: TODO — foto camión en cancha de tenis)*

### 2. Alumbrado Público y Privado
Mantenimiento preventivo y correctivo de alumbrado en calles, barrios privados, countries, playones, estacionamientos e industrias. Recambio de luminarias a LED para reducir el consumo, reparación de fotocélulas y tableros de comando, y revisión completa de columnas. Servicio ágil con equipo propio: diagnóstico, presupuesto y ejecución sin intermediarios.

*(imagen: TODO)*

### 3. Trabajos sobre Postes y Líneas
Ejecutamos acometidas, tendidos aéreos, reparaciones y adecuaciones sobre postes y líneas de baja tensión. Colocación y recambio de postes, brazos y crucetas, retiro de instalaciones fuera de servicio y montaje de equipamiento en altura. Personal habilitado para trabajo en altura, con elementos de seguridad certificados y señalización de la zona de trabajo.

*(imagen: TODO — foto brazo hidráulico sobre poste)*

## Fotos de campo (galería nueva — bloque opcional reutilizable)

- **Título:** Fotos de campo
- **Subtítulo:** Obras reales de nuestro equipo, sin producción. Así trabajamos.
- **Link:** Mirá más obras en nuestro Instagram → (URL del IG de SESC)
- **Layout:** mosaico de 6 fotos — 1 grande + 2 chicas arriba, 3 anchas abajo. Cada foto lleva un chip con pin naranja y caption corta.

Captions placeholder (reemplazar con las fotos reales):

1. Recambio LED en cancha de tenis — Córdoba *(foto grande)*
2. Enfoque de proyectores
3. Trabajo sobre línea de BT
4. Mantenimiento de columnas
5. Hidroelevador en obra
6. Cancha iluminada — resultado final

### Extensión del tipo `ServicePage` (para reutilizar en las otras SPAs)

```ts
gallery?: {
  title: string;
  subtitle?: string;
  instagramUrl?: string;
  items: { image: string; caption: string }[]; // 6 fotos: [0] es la destacada
};
```

Y en el snippet de abajo agregar:

```ts
gallery: {
  title: "Fotos de campo",
  subtitle: "Obras reales de nuestro equipo, sin producción. Así trabajamos.",
  instagramUrl: "https://www.instagram.com/...", // TODO
  items: [
    { image: "/campo/altura-1.webp", caption: "Recambio LED en cancha de tenis — Córdoba" }, // TODO
    { image: "/campo/altura-2.webp", caption: "Enfoque de proyectores" },
    { image: "/campo/altura-3.webp", caption: "Trabajo sobre línea de BT" },
    { image: "/campo/altura-4.webp", caption: "Mantenimiento de columnas" },
    { image: "/campo/altura-5.webp", caption: "Hidroelevador en obra" },
    { image: "/campo/altura-6.webp", caption: "Cancha iluminada — resultado final" },
  ],
},
```

## CTA final

- **Título:** ¿Necesitás trabajos en altura?
- **Texto:** Te asesoramos sin compromiso. Presupuesto sin cargo.
- **Botón:** Contactar por WhatsApp

## Snippet listo para `services-pages.ts`

```ts
"trabajos-en-altura": {
  slug: "trabajos-en-altura",
  title: "Trabajos en Altura",
  metaTitle:
    "Trabajos en Altura con Hidroelevador en Córdoba | Iluminación Deportiva y Alumbrado - SESC",
  metaDescription:
    "Trabajos en altura con hidroelevador propio de hasta 11 metros en Córdoba: iluminación deportiva LED para canchas y clubes, mantenimiento de alumbrado público y privado, acometidas y trabajos sobre postes y líneas. Personal habilitado, presupuesto sin cargo.",
  hero: {
    image: "/trabajos-altura-1.webp", // TODO: foto real
    headline: "Trabajos en Altura",
    subheadline:
      "Hidroelevador propio con alcance de hasta 11 metros. Iluminación deportiva, alumbrado público y privado, y trabajos sobre postes y líneas en toda la provincia de Córdoba.",
  },
  sections: [
    {
      title: "Iluminación Deportiva",
      image: "/trabajos-altura-2.webp", // TODO
      body: "Proyectamos, instalamos y renovamos la iluminación de canchas de tenis, pádel, fútbol y predios deportivos. Realizamos recambio de proyectores a tecnología LED, orientación y enfoque de artefactos, y mantenimiento de columnas y estructuras de iluminación. Con nuestro hidroelevador trabajamos directamente sobre la cancha, de forma rápida y segura, sin dañar la superficie de juego.",
    },
    {
      title: "Alumbrado Público y Privado",
      image: "/trabajos-altura-3.webp", // TODO
      body: "Mantenimiento preventivo y correctivo de alumbrado en calles, barrios privados, countries, playones, estacionamientos e industrias. Recambio de luminarias a LED para reducir el consumo, reparación de fotocélulas y tableros de comando, y revisión completa de columnas. Servicio ágil con equipo propio: diagnóstico, presupuesto y ejecución sin intermediarios.",
    },
    {
      title: "Trabajos sobre Postes y Líneas",
      image: "/trabajos-altura-4.webp", // TODO
      body: "Ejecutamos acometidas, tendidos aéreos, reparaciones y adecuaciones sobre postes y líneas de baja tensión. Colocación y recambio de postes, brazos y crucetas, retiro de instalaciones fuera de servicio y montaje de equipamiento en altura. Personal habilitado para trabajo en altura, con elementos de seguridad certificados y señalización de la zona de trabajo.",
    },
  ],
  features: [
    "Hidroelevador propio con alcance de hasta 11 m",
    "Iluminación LED para canchas y clubes",
    "Recambio y reparación de luminarias en altura",
    "Mantenimiento de alumbrado público y privado",
    "Acometidas y tendidos aéreos",
    "Colocación y recambio de postes y brazos",
    "Personal habilitado para trabajo en altura",
    "Cobertura en toda la provincia de Córdoba",
  ],
},
```

## Checklist de integración (cuando pasemos a código)

- [x] Agregar entrada en `src/utils/services-pages.ts`
- [x] Crear `src/routes/trabajos-en-altura.tsx` (copiar patrón de `movilidad-electrica.tsx`)
- [x] Agregar link en `Nav.tsx` (desktop + menú mobile)
- [x] Sumar keywords en `entry-server.tsx`
- [~] Subir fotos reales (interim: recortes del screenshot; reemplazar por originales) a `/public` como `.webp` y reemplazar TODOs
- [x] Revisar si va card nueva en la home (`info.ts` / `index.tsx`)
- [x] Agregar `gallery?` al tipo `ServicePage` y renderizarla en `ServicePageLayout.tsx` (entre las secciones y la banda naranja de CTA)
- [ ] Cuando estén las fotos de campo de los otros rubros, cargar `gallery` en las otras 4 páginas de servicio con sus fotos de campo
