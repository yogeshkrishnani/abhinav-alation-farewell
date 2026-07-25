#!/bin/bash
# Download photos from Slack for Abhinav's farewell site
# Usage: SLACK_TOKEN=xoxp-... ./scripts/download-photos.sh

if [ -z "$SLACK_TOKEN" ]; then
  echo "Error: Set SLACK_TOKEN environment variable"
  echo "Get your user token from: https://api.slack.com/apps"
  exit 1
fi

DEST="public/images"
mkdir -p "$DEST"

declare -A FILES
# Mayank Shrivastava - Image from iOS
FILES[mayank-shrivastava]="F0BK8RD2BB7"
# Harsh Patel - Pondicherry trip
FILES[harsh-patel]="F0BK78QMRGV"
# Jay Patel - team photo
FILES[jay-patel]="F0BKFS5RKP0"
# Yogesh Doshi
FILES[yogesh-doshi]="F0BKLBRB918"
# Umang Parejiya - Mysore trip
FILES[umang-parejiya]="F0BKMFTJCDA"
# Parth Hirpara - collage
FILES[parth-hirpara]="F0BKJ4ZRPBL"

echo "Downloading ${#FILES[@]} photos..."

for name in "${!FILES[@]}"; do
  file_id="${FILES[$name]}"
  echo "  → $name ($file_id)"

  info=$(curl -s -H "Authorization: Bearer $SLACK_TOKEN" \
    "https://slack.com/api/files.info?file=$file_id")

  url=$(echo "$info" | python3 -c "import sys,json; print(json.load(sys.stdin)['file']['url_private_download'])" 2>/dev/null)

  if [ -z "$url" ]; then
    echo "    ✗ Could not get download URL for $name"
    continue
  fi

  mime=$(echo "$info" | python3 -c "import sys,json; print(json.load(sys.stdin)['file']['mimetype'])" 2>/dev/null)
  case "$mime" in
    image/jpeg) ext="jpg" ;;
    image/png)  ext="png" ;;
    image/webp) ext="webp" ;;
    *)          ext="jpg" ;;
  esac

  curl -s -H "Authorization: Bearer $SLACK_TOKEN" \
    -o "$DEST/$name.$ext" "$url"

  if [ -f "$DEST/$name.$ext" ] && [ -s "$DEST/$name.$ext" ]; then
    size=$(du -h "$DEST/$name.$ext" | cut -f1)
    echo "    ✓ Downloaded ($size)"
  else
    echo "    ✗ Download failed"
    rm -f "$DEST/$name.$ext"
  fi
done

echo ""
echo "Done! Photos saved in $DEST/"
echo ""
echo "Update data/contributors.js photo paths:"
echo "  mayank-shrivastava → /images/mayank-shrivastava.jpg"
echo "  harsh-patel → /images/harsh-patel.jpg"
echo "  jay-patel → /images/jay-patel.jpg"
echo "  yogesh-doshi → /images/yogesh-doshi.jpg"
echo "  umang-parejiya → /images/umang-parejiya.png"
echo "  parth-hirpara → /images/parth-hirpara.jpg"
