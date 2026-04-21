const sharp = require('sharp');
const path = require('path');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="110" fill="#3f51b5"/>
  <rect x="112" y="96" width="288" height="336" rx="32" fill="white" opacity="0.95"/>
  <rect x="96" y="96" width="48" height="336" rx="24" fill="#7986cb"/>
  <line x1="176" y1="208" x2="352" y2="208" stroke="#e0e0e0" stroke-width="20" stroke-linecap="round"/>
  <line x1="176" y1="272" x2="352" y2="272" stroke="#e0e0e0" stroke-width="20" stroke-linecap="round"/>
  <line x1="176" y1="336" x2="288" y2="336" stroke="#e0e0e0" stroke-width="20" stroke-linecap="round"/>
  <circle cx="352" cy="352" r="88" fill="#43a047"/>
  <polyline points="312,352 336,376 400,312" stroke="white" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

const svgBuffer = Buffer.from(svg);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const outDir = path.join(__dirname, 'public', 'icons');

Promise.all(
  sizes.map(size =>
    sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(outDir, `icon-${size}x${size}.png`))
      .then(() => console.log(`✅ icon-${size}x${size}.png`))
  )
).then(() => console.log('Done!'));

