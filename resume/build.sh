#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="$(dirname "$SCRIPT_DIR")/public"

cd "$SCRIPT_DIR"

for tex in boring styled; do
  tectonic "$tex.tex"
done

cp boring.pdf "$OUT_DIR/Haris_Khan_Resume.pdf"
cp styled.pdf "$OUT_DIR/Haris_Khan_Resume_Styled.pdf"

# Clean up
rm -f *.aux *.log *.out *.pdf

echo "Built resumes → $OUT_DIR"
