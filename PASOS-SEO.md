# Pasos para terminar de optimizar el SEO de sesc.com.ar

Estas son las tareas **manuales** que hay que hacer fuera del código para que el trabajo SEO esté completo. Están ordenadas por impacto y urgencia.

---

## ✅ Lo que ya está hecho en el código

- Metadatos completos (title, description, canonical, lang="es-AR")
- Open Graph + Twitter Cards
- JSON-LD: `LocalBusiness`, `Electrician`, `WebSite`, `FAQPage` + `aggregateRating` 5.0/41
- `robots.txt` + `sitemap.xml` (5 URLs)
- 4 páginas por servicio (`/electricidad`, `/seguridad-electronica`, `/energia-solar`, `/climatizacion`) con SEO propio
- Imágenes optimizadas a WebP (~70% menos peso)
- Performance: preload del LCP, lazy loading, fuentes optimizadas
- Accesibilidad WCAG (alts, aria-labels, focus-visible, prefers-reduced-motion)
- Schema markup validable con [validator.schema.org](https://validator.schema.org/)
- Banda de certificaciones, FAQ con schema, sección "Cómo trabajamos"
- Página de FAQ con datos estructurados (rich snippets en SERP)

---

## 🔴 Prioridad alta (hacer apenas se deploye)

### 1. Google Search Console

Sin esto, Google tarda más en indexar y no tenés métricas.

1. Entrar a https://search.google.com/search-console con cuenta Google de SESC.
2. **Agregar propiedad** → "Prefijo de URL" → `https://www.sesc.com.ar/`.
3. Verificar mediante:
   - **Etiqueta HTML** → te da un meta tag → mandármelo y lo pego en `entry-server.tsx`
   - O **Archivo HTML** → te da un archivo → lo subimos a `public/`
4. Una vez verificado:
   - Sitemaps → agregar `sitemap.xml` → enviar.
   - Inspección de URL → pegar cada una de las 5 URLs → "Solicitar indexación".
5. Resultado esperado: 24–72hs aparece todo en Google.

### 2. Google Business Profile

Lo más importante para SEO local. Es lo que aparece a la derecha cuando buscan "SESC Córdoba".

1. https://www.google.com/business
2. **Reclamar** el listing existente (ya tenés reseñas en Maps con el nombre "Servicio Especializado SC | Instalaciones Eléctricas Certificadas").
3. Completar:
   - Categoría primaria: **Electricista**
   - Categorías secundarias: **Empresa de paneles solares**, **Servicio de instalación de cámaras de seguridad**, **Servicio de calefacción**
   - Sitio web: `https://www.sesc.com.ar/`
   - Teléfono: `+54 351 2922784`
   - Horarios reales
   - Zona de servicio: Córdoba Capital + localidades que cubren
4. Subir 10–15 fotos de trabajos hechos (usar las mismas de `/jobs/` pero con buena calidad).
5. Escribir descripción de 750 caracteres con keywords:
   - "electricista matriculado", "Córdoba", "instalaciones industriales", "paneles solares", "cámaras de seguridad", "20 años de experiencia"

### 3. Verificar schema con Rich Results Test

Antes de pasar al SEO orgánico, comprobá que Google entiende todo.

1. https://search.google.com/test/rich-results
2. Pegar `https://www.sesc.com.ar/`
3. Tiene que detectar:
   - ✅ `LocalBusiness` (con stars/aggregateRating)
   - ✅ `WebSite`
   - ✅ `FAQPage`
4. Si alguno marca error: avisame con screenshot.

Repetir el test para cada página de servicio:
- `https://www.sesc.com.ar/electricidad`
- `https://www.sesc.com.ar/seguridad-electronica`
- `https://www.sesc.com.ar/energia-solar`
- `https://www.sesc.com.ar/climatizacion`

### 4. Pedir reseñas a clientes activos

El JSON-LD declara 41 reseñas con 5 estrellas. Cuanto más Google encuentre coincidencias reales en tu Google Business, más confianza te da.

1. Hacer una lista de los últimos 30–40 clientes contentos (los que YA dejaron review + los que no).
2. Mandarles por WhatsApp un mensaje tipo:
   > "Hola [nombre], gracias por confiar en SESC. ¿Nos podrías dejar una reseña en Google? Te demora 30 segundos: [link directo]"
3. **Link directo a tu formulario de reseña**:
   ```
   https://www.google.com/search?q=Servicio+Especializado+SC&hl=es-AR#lrd=0x45fef3f80ebbd4c3:0x5453af7c769d3a2e,3
   ```
4. Objetivo: pasar de 41 a 60+ reseñas en 3 meses.

---

## 🟡 Prioridad media (mes 1)

### 5. Google Analytics 4 + Tag Manager

Para medir qué funciona.

1. Crear cuenta GA4 en https://analytics.google.com/ → seguir guía en `INSTRUCCIONES-CLIENTE.md` (ya está en el repo).
2. Pasarme los IDs (`G-XXXXXXXXXX` o `GTM-XXXXXXX`) y los configuro en Vercel.
3. Eventos a configurar después en GA4:
   - `click_phone` (clicks en `tel:`)
   - `click_whatsapp` (clicks en wa.me)
   - `click_email`
   - `service_view` (entrada a página de servicio)

### 6. PageSpeed Insights baseline

1. https://pagespeed.web.dev/
2. Pegar `https://www.sesc.com.ar/` → correr análisis.
3. Repetir para cada página de servicio.
4. Anotar scores iniciales (Performance / Accessibility / Best Practices / SEO).
5. Re-medir cada 30 días para ver progreso.

Objetivos:
- Performance: 85+
- Accessibility: 95+
- SEO: 100
- Best Practices: 95+

### 7. Instagram — desactivar restricción de edad

Para que el carrusel de Instagram del sitio muestre embeds reales en vez de cards CSS.

Pasos completos en `instrucciones-cliente.md` y la conversación con el dev. Resumen:
1. Instagram app → Configuración → Restricciones de país y edad → "Sin requisito de edad mínima".
2. Configuración → Compartir y reutilización → activar **"Permitir incrustar"**.
3. Cuando esté hecho, avisarme y cambio en el código `kind: "card"` → `kind: "embed"`.

### 8. Resolver inconsistencias NAP (Name, Address, Phone)

NAP = información de contacto consistente en todos lados. Google penaliza diferencias.

Verificar que estos 4 datos sean **idénticos** en:

| Lugar | Estado |
|---|---|
| Sitio (`Contact.tsx`, `Footer.tsx`, `entry-server.tsx`) | ✅ |
| Google Business Profile | ⏳ verificar |
| Instagram bio | ⏳ verificar |
| Facebook page | ⏳ verificar |

Datos canónicos:
- **Nombre**: Servicio Especializado SC | Instalaciones Eléctricas Certificadas
- **Teléfono**: +54 351 2922784
- **Email**: sesc.especializado@gmail.com
- **Dirección/zona**: Córdoba, Argentina

---

## 🟢 Prioridad baja (mes 2-3 — crecimiento orgánico)

### 9. Link building local

Conseguir backlinks de sitios locales sube tu autoridad.

Lugares para registrarse:
- [ ] Cámara de Comercio de Córdoba
- [ ] AEA (Asociación Electrotécnica Argentina) — directorio de empresas
- [ ] Páginas Amarillas / Páginas Doradas online
- [ ] Foros locales (Pulso Córdoba, etc.)
- [ ] Directorios de electricistas en Argentina (Cronoshare, Habitissimo)
- [ ] Si trabajan con clientes empresa: pedirle a esos clientes link en su web (ej: "Empresas asociadas").

### 10. Contenido — blog técnico (opcional, alto impacto)

Si querés capturar tráfico orgánico de fondo de embudo, publicar 1 post/mes.

Ideas iniciales con potencial alto:
- "Cuánto cuesta instalar paneles solares en Córdoba en 2026" (long-tail informacional)
- "Diferencia entre instalación monofásica y trifásica para PYMES"
- "Checklist eléctrico antes de comprar una casa"
- "Cómo dimensionar un aire acondicionado según los m² del ambiente"
- "Hikvision vs Dahua: qué cámaras de seguridad elegir"
- "Cuándo necesito un electricista matriculado y cómo verificarlo"

Cada post de 800–1500 palabras, con imágenes propias.

### 11. Estrategia de keywords (lo que querés rankear)

Keywords primarias (alto volumen, alta competencia):
- electricista Córdoba
- instalación eléctrica Córdoba
- paneles solares Córdoba
- cámaras de seguridad Córdoba

Long-tail (más fácil rankear, conversión más alta):
- electricista matriculado Córdoba
- instalación cámaras Hikvision Córdoba
- panel solar OnGrid Córdoba precio
- bomba de calor para piscina Córdoba
- certificación eléctrica 10kva Córdoba
- electricista urgencias Córdoba 24hs

Buscarlas en Google cada 2 semanas (en incógnito) y anotar la posición de SESC.

### 12. Microdata adicional

Cuando tengas tiempo se puede sumar:
- Schema `BreadcrumbList` en páginas de servicio
- Schema `Service` específico por servicio (ya está parcialmente)
- Schema `HowTo` en posts del blog (cuando se cree)

---

## 📊 Métricas a trackear cada 30 días

Crear un Google Sheet con estas filas:

| Métrica | Fuente | Valor inicial | Mes 1 | Mes 3 | Mes 6 |
|---|---|---|---|---|---|
| Impresiones orgánicas | Search Console | — | | | |
| Clicks orgánicos | Search Console | — | | | |
| CTR promedio | Search Console | — | | | |
| Posición media | Search Console | — | | | |
| Reseñas Google | Google Business | 41 | | | |
| Rating | Google Business | 5.0 | | | |
| Performance Lighthouse | PageSpeed | — | | | |
| SEO Lighthouse | PageSpeed | — | | | |
| Sesiones GA4 | Analytics | — | | | |
| Clicks WhatsApp | GA4 evento | — | | | |
| Clicks teléfono | GA4 evento | — | | | |
| Posición "electricista Córdoba" | Búsqueda manual | — | | | |
| Posición "paneles solares Córdoba" | Búsqueda manual | — | | | |

---

## 🚨 Cosas que NO hacer (perjudican el SEO)

- ❌ Borrar páginas indexadas sin redirect 301
- ❌ Cambiar URLs de las páginas de servicio sin avisar a Google
- ❌ Comprar backlinks (Google penaliza)
- ❌ Stuffing de keywords en el contenido (suena spam)
- ❌ Duplicar contenido entre páginas
- ❌ Publicar reseñas falsas
- ❌ Cambiar el nombre del negocio en Google Business y la web a la vez (perdés ranking local)

---

## 📞 Cuando dudes

- **Schema/JSON-LD malformed** → https://validator.schema.org/
- **Indexación lenta** → Search Console → Inspección de URL → Solicitar indexación
- **Caída de tráfico** → revisar Search Console "Cobertura" y "Mejoras" por errores nuevos
- **Competidor te pasó en ranking** → revisar qué cambiaron (con [Wayback Machine](https://web.archive.org/)) y mejorar contenido propio
