// Pre-build script: generates placeholder PNGs AND patches source imports
// Removes all figma:asset/ dependencies so the project builds standalone
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PLACEHOLDER_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
  'base64'
);

const viteConfig = readFileSync(join(__dirname, 'vite.config.ts'), 'utf-8');
const assetRegex = /\/src\/assets\/([a-f0-9]+\.png)/g;
const assets = new Set();
let match;
while ((match = assetRegex.exec(viteConfig)) !== null) {
  assets.add(match[1]);
}

const assetsDir = join(__dirname, 'src', 'assets');
if (!existsSync(assetsDir)) {
  mkdirSync(assetsDir, { recursive: true });
}
let created = 0;
for (const filename of assets) {
  const filepath = join(assetsDir, filename);
  if (!existsSync(filepath)) {
    writeFileSync(filepath, PLACEHOLDER_PNG);
    created++;
  }
}
console.log('Generated ' + created + ' placeholder assets (' + assets.size + ' total)');

function walkDir(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (entry === 'node_modules' || entry === 'dist' || entry === '.git') continue;
    if (statSync(full).isDirectory()) {
      files.push(...walkDir(full));
    } else if (/\.(tsx?|jsx?)$/.test(entry)) {
      files.push(full);
    }
  }
  return files;
}

const srcDir = join(__dirname, 'src');
const sourceFiles = walkDir(srcDir);
let patchedFiles = 0;

for (const file of sourceFiles) {
  let content = readFileSync(file, 'utf-8');
  if (content.includes('figma:asset/')) {
    const fileDir = dirname(file);
    let relPath = relative(fileDir, assetsDir).replace(/\\\\/g, '/');
    // Ensure relative path starts with ./ for proper module resolution
    if (!relPath.startsWith('.')) {
      relPath = './' + relPath;
    }
    content = content.replace(/figma:asset\/([a-f0-9]+\.png)/g, relPath + '/$1');
    writeFileSync(file, content);
    patchedFiles++;
  }
}
console.log('Patched ' + patchedFiles + ' source files - project is now Figma-independent');// Pre-build script: generates placeholder PNGs AND patches source imports
// Removes all figma:asset/ dependencies so the project builds standalone
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs';
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PLACEHOLDER_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
  'base64'
);

const viteConfig = readFileSync(join(__dirname, 'vite.config.ts'), 'utf-8');
const assetRegex = /\/src\/assets\/([a-f0-9]+\.png)/g;
const assets = new Set();
let match;
while ((match = assetRegex.exec(viteConfig)) !== null) {
  assets.add(match[1]);
}

const assetsDir = join(__dirname, 'src', 'assets');
if (!existsSync(assetsDir)) {
  mkdirSync(assetsDir, { recursive: true });
}
let created = 0;
for (const filename of assets) {
  const filepath = join(assetsDir, filename);
  if (!existsSync(filepath)) {
    writeFileSync(filepath, PLACEHOLDER_PNG);
    created++;
  }
}
console.log('Generated ' + created + ' placeholder assets (' + assets.size + ' total)');

function walkDir(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (entry === 'node_modules' || entry === 'dist' || entry === '.git') continue;
    if (statSync(full).isDirectory()) {
      files.push(...walkDir(full));
    } else if (/\.(tsx?|jsx?)$/.test(entry)) {
      files.push(full);
    }
  }
  return files;
}

const srcDir = join(__dirname, 'src');
const sourceFiles = walkDir(srcDir);
let patchedFiles = 0;

for (const file of sourceFiles) {
  let content = readFileSync(file, 'utf-8');
  if (content.includes('figma:asset/')) {
    const fileDir = dirname(file);
    const relPath = relative(fileDir, assetsDir).replace(/\\\\/g, '/');
    const prefix = relPath || '.';
    content = content.replace(/figma:asset\/([a-f0-9]+\.png)/g, prefix + '/$1');
    writeFileSync(file, content);
    patchedFiles++;
  }
}
console.log('Patched ' + patchedFiles + ' source files - project is now Figma-independent');
