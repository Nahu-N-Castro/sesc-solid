# Lo que necesito del cliente para activar Analytics

## Google Analytics 4 (mínimo)

1. Ir a https://analytics.google.com/ con la cuenta de Google del cliente.
2. **Crear cuenta** (si no tiene): nombre = "SESC".
3. **Crear propiedad**:
   - Nombre: "sesc.com.ar"
   - Zona horaria: Argentina
   - Moneda: ARS
4. **Datos de la empresa**: industria = "Otros", tamaño = pequeño.
5. **Plataforma**: Web → URL = `https://www.sesc.com.ar` → Nombre = "SESC sitio".
6. Copiar el **ID de medición** que arranca con `G-XXXXXXXXXX`.
7. Pasame ese ID y lo configuro como `VITE_GA4_ID` en Vercel.

## Google Tag Manager (recomendado, en lugar de GA4 directo)

GTM permite agregar más cosas después (Meta Pixel, conversiones, formularios) sin tocar el código.

1. Ir a https://tagmanager.google.com/
2. Crear cuenta → "SESC" → contenedor "sesc.com.ar" → tipo Web.
3. Copiar el **ID** que arranca con `GTM-XXXXXXX`.
4. Pasame ese ID y lo configuro como `VITE_GTM_ID` en Vercel.
5. Después dentro de GTM creás el tag de GA4 apuntando al `G-XXXXXXXXXX`.

## Cómo se configura en Vercel

Dashboard del proyecto → Settings → Environment Variables → Add:

| Name | Value |
|---|---|
| `VITE_GA4_ID` | `G-XXXXXXXXXX` (si NO usás GTM) |
| `VITE_GTM_ID` | `GTM-XXXXXXX` (si usás GTM, deja GA4 vacío) |

Después de agregarlas, hacer un nuevo deploy (Vercel → Deployments → ⋯ → Redeploy).

## Verificación

Una vez deployado:
- **GA4**: Reports → Realtime → entrar al sitio en otra pestaña → tiene que aparecer una sesión activa.
- **GTM**: instalar la extensión "Tag Assistant" de Chrome → entrar al sitio → debería decir que el contenedor está activo.

## Eventos que sugiero trackear

Estos se pueden configurar después en GTM o GA4:

1. `click_phone` — clicks en `tel:+543512922784`
2. `click_whatsapp` — clicks en wa.me
3. `click_email` — clicks en mailto:
4. `scroll_50` — scroll al 50% de la página (interés)
5. `service_view` — apertura de modal de servicio o entrada a página de servicio

Con esos 5 eventos sabés exactamente qué CTA convierte y desde qué dispositivo.
