import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const output = join(root, "public");

const files = [
  "index.html",
  "style.css",
  "script.js",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "apple-touch-icon.png",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon.ico",
  "favicon.svg",
  "robots.txt",
  "site.webmanifest",
  "sitemap.xml",
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of files) {
  await cp(join(root, file), join(output, file));
}

await cp(join(root, "images"), join(output, "images"), { recursive: true });

console.log("Site estatico copiado para public.");
