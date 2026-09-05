#!/usr/bin/env node
/**
 * Rasterize the Cambio C-monogram to PWA icons + inspection previews.
 * Stages PNGs under /workspace/.grok/ — never inside public/.
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

const FOREST = "#1f3d34";
const CREAM = "#f7f1e6";
const C_PATH = `M22.6 9.4a8.6 8.6 0 1 0 0 13.2`;

function svgMarkup({ rounded, scaleGlyph }) {
  const rx = rounded ? 7 : 0;
  const glyph = scaleGlyph
    ? `<g transform="translate(16,16) scale(${scaleGlyph}) translate(-16,-16)">
    <path fill="none" stroke="${CREAM}" stroke-width="4.2" stroke-linecap="round" d="${C_PATH}"/>
  </g>`
    : `<path fill="none" stroke="${CREAM}" stroke-width="4.2" stroke-linecap="round" d="${C_PATH}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="${rx}" fill="${FOREST}"/>
  ${glyph}
</svg>`;
}

function pageHtml(size, { rounded, scaleGlyph }) {
  const svg = svgMarkup({ rounded, scaleGlyph });
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
  html, body { margin: 0; padding: 0; width: ${size}px; height: ${size}px; background: ${FOREST}; overflow: hidden; }
  svg { display: block; width: ${size}px; height: ${size}px; }
</style>
</head>
<body>${svg}</body>
</html>`;
}

const jobs = [
  { size: 16, rounded: true, scaleGlyph: null, out: "/workspace/.grok/favicon-16-preview.png" },
  { size: 32, rounded: true, scaleGlyph: null, out: "/workspace/.grok/favicon-32-preview.png" },
  { size: 128, rounded: true, scaleGlyph: null, out: "/workspace/.grok/favicon-128-preview.png" },
  { size: 192, rounded: false, scaleGlyph: 1.18, out: "/workspace/.grok/icon-192.png.tmp" },
  { size: 512, rounded: false, scaleGlyph: 1.18, out: "/workspace/.grok/icon-512.png.tmp" },
];

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  for (const job of jobs) {
    mkdirSync(dirname(job.out), { recursive: true });
    const page = await browser.newPage({
      viewport: { width: job.size, height: job.size },
      deviceScaleFactor: 1,
    });
    await page.setContent(pageHtml(job.size, job), { waitUntil: "domcontentloaded" });
    await page.screenshot({
      path: job.out,
      type: "png",
      omitBackground: false,
      clip: { x: 0, y: 0, width: job.size, height: job.size },
    });
    await page.close();
    console.log(`wrote ${job.out}`);
  }
} finally {
  await browser.close();
}
