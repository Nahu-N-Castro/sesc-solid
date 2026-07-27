# Copy — Rediseño de páginas de servicio (galerías + CTAs)

Complementa `copy-trabajos-en-altura.md`. El copy base (hero, secciones, features) de estas 4 páginas ya existe en `src/utils/services-pages.ts` — no cambia. Lo nuevo por página es: **galería "Fotos de campo"** y **título de la banda CTA** (antes era genérico "¿Necesitás asesoramiento?").

## Electricidad Integral

- **CTA banda:** ¿Necesitás un electricista matriculado?
- **Galería** (subtítulo: "Obras reales de nuestro equipo, sin producción. Así trabajamos."):
  1. Armado de tablero BT — Córdoba *(destacada)*
  2. Cableado estructurado
  3. Luminarias industriales
  4. Pilar trifásico
  5. Mantenimiento MTO en planta
  6. Medición y certificación

## Seguridad Electrónica

- **CTA banda:** ¿Querés proteger tu casa o negocio?
- **Galería** (subtítulo: "Instalaciones reales de nuestro equipo, sin producción. Así trabajamos."):
  1. Instalación de domo IP — Córdoba *(destacada)*
  2. Rack DVR/NVR
  3. Cerco perimetral 6 hilos
  4. Alarma en comercio
  5. Cámaras en industria
  6. Monitoreo desde el celular

## Energías Renovables

- **CTA banda:** ¿Querés generar tu propia energía?
- **Galería:**
  1. Montaje sobre techo de chapa — Córdoba *(destacada)*
  2. Inversor y protecciones
  3. Estructura y soportes
  4. Sistema híbrido con baterías
  5. Instalación en campo
  6. Puesta en marcha

## Movilidad Eléctrica

- **CTA banda:** ¿Querés cargar tu auto en casa?
- **Galería:**
  1. Instalación de wallbox domiciliario — Córdoba *(destacada)*
  2. Tablero y protecciones dedicadas
  3. Canalización y cableado
  4. Cargador trifásico en cochera
  5. Puesto de carga comercial
  6. Medición y certificación final
- La franja "Marcas con las que trabajamos" se mantiene debajo del hero (en el diseño son pills con el nombre; en código siguen los logos webp de `/brands/`).

## Trabajos en Altura

- Ver `copy-trabajos-en-altura.md` (CTA: "¿Necesitás trabajos en altura?").

## Cambios de layout comunes (para `ServicePageLayout.tsx`)

- Nueva sección `gallery` (mosaico 6 fotos: 1 grande + 2 chicas / 3 anchas, chips con pin naranja y caption, link a Instagram) entre las secciones de contenido y la banda CTA.
- `ctaTitle?: string` en `ServicePage` para personalizar el título de la banda naranja por servicio (fallback: "¿Necesitás asesoramiento?").
- "Otros servicios" pasa a 4 cards (los 5 servicios menos el actual).
- Todas las fotos de galería son placeholders de stock hasta tener las fotos reales de obra de cada rubro.
