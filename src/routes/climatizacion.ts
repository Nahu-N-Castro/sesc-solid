// La página /climatizacion se dio de baja pero pudo quedar indexada en Google.
// 301 permanente para no perder el ranking acumulado (ver PASOS-SEO.md).
export function GET() {
  return new Response(null, {
    status: 301,
    headers: { Location: "/electricidad" },
  });
}
