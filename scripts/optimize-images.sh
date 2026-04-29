#!/usr/bin/env bash
# Optimiza las imágenes pesadas del directorio public/.
# Requiere: cwebp (brew install webp) e imagemagick (brew install imagemagick).
#
# Uso: bash scripts/optimize-images.sh

set -euo pipefail

PUBLIC_DIR="$(dirname "$0")/../public"

if ! command -v cwebp >/dev/null 2>&1; then
  echo "Falta cwebp. Instalá con: brew install webp"
  exit 1
fi

# Imágenes críticas (peso > 200KB)
HEAVY=(
  "panel.png"
  "panel-2.png"
  "bg2.jpg"
  "camaras.jpg"
  "bomba-calor-2.jpg"
  "automatizaciones.png"
  "bomba-calor-3.png"
)

echo "→ Generando versiones .webp optimizadas..."
for f in "${HEAVY[@]}"; do
  src="$PUBLIC_DIR/$f"
  if [[ -f "$src" ]]; then
    base="${f%.*}"
    out="$PUBLIC_DIR/${base}.webp"
    cwebp -q 78 "$src" -o "$out"
    echo "  ✓ $f → ${base}.webp"
  fi
done

echo ""
echo "→ Tamaños comparativos:"
for f in "${HEAVY[@]}"; do
  base="${f%.*}"
  if [[ -f "$PUBLIC_DIR/${base}.webp" ]]; then
    orig=$(du -h "$PUBLIC_DIR/$f" | cut -f1)
    new=$(du -h "$PUBLIC_DIR/${base}.webp" | cut -f1)
    echo "  $f  $orig → ${base}.webp  $new"
  fi
done

echo ""
echo "Listo. Ahora actualizá los src en los componentes para usar las versiones .webp"
echo "(mantené los originales como fallback con <picture> si querés compatibilidad amplia)."
