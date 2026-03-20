// Pre-build script: generates placeholder PNG files for all figma:asset references
// Run this before `vite build` to ensure all asset aliases in vite.config.ts resolve
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 1x1 transparent PNG (smallest valid PNG)
const PLACEHOLDER_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
  'base64'
);

// Read vite.config.ts and extract all asset filenames
const viteConfig = readFileSync(join(__dirname, 'vite.config.ts'), 'utf-8');
const assetRegex = /\/src\/assets\/([a-f0-9]+\.png)/g;
const assets = new Set();
let match;
while ((match = assetRegex.exec(viteConfig)) !== null) {
  assets.add(match[1]);
}

// Create src/assets directory
const assetsDir = join(__dirname, 'src', 'assets');
if (!existsSync(assetsDir)) {
  mkdirSync(assetsDir, { recursive: true });
}

// Generate placeholder PNGs for each missing asset
let created = 0;
for (const filename of assets) {
  const filepath = join(assetsDir, filename);
  if (!existsSync(filepath)) {
    writeFileSync(filepath, PLACEHOLDER_PNG);
    created++;
  }
}

console.log(`Generated ${created} placeholder assets in src/assets/ (${assets.size} total referenced)`);
