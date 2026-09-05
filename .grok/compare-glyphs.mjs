#!/usr/bin/env node
import { chromium } from "playwright";
import { writeFileSync } from "node:fs";

const FOREST = "#1f3d34";
const CREAM = "#f7f1e6";

const designs = {
  c: `<rect width="32" height="32" rx="7" fill="${FOREST}"/>
    <path fill="none" stroke="${CREAM}" stroke-width="4.2" stroke-linecap="round"
      d="M22.6 9.4a8.6 8.6 0 1 0 0 13.2"/>`,
  swap: `<rect width="32" height="32" rx="7" fill="${FOREST}"/>
    <path fill="${CREAM}" d="M6 10.6h13.2V7.4L26.2 12.8 19.2 18.2v-3.2H6z"/>
    <path fill="${CREAM}" d="M26 21.4H12.8v3.2L5.8 19.2 12.8 13.8v3.2H26z"/>`,
  exchange: `<rect width="32" height="32" rx="7" fill="${FOREST}"/>
    <path fill="none" stroke="${CREAM}" stroke-width="3.2" stroke-linecap="round"
      d="M10.2 12.4a7.4 7.4 0 0 1 10.6 1.4"/>
    <path fill="${CREAM}" d="M20.4 8.8l4.6 3.6-4.8.2z"/>
    <path fill="none" stroke="${CREAM}" stroke-width="3.2" stroke-linecap="round"
      d="M21.8 19.6a7.4 7.4 0 0 1-10.6-1.4"/>
    <path fill="${CREAM}" d="M11.6 23.2 7 19.6l4.8-.2z"/>`,
  cycle: `<rect width="32" height="32" rx="7" fill="${FOREST}"/>
    <path fill="${CREAM}" d="
      M16 7.2a8.8 8.8 0 0 1 8.2 5.4l2.4-2.6v7.2h-7.2l2.6-2.4A5.8 5.8 0 0 0 16 10.2
      a5.8 5.8 0 0 0-5.8 5.8H7.2A8.8 8.8 0 0 1 16 7.2z
      M16 24.8a8.8 8.8 0 0 1-8.2-5.4L5.4 22v-7.2h7.2l-2.6 2.4A5.8 5.8 0 0 0 16 21.8
      a5.8 5.8 0 0 0 5.8-5.8h3A8.8 8.8 0 0 1 16 24.8z"/>`,
};

function html(inner, size) {
  return `<!DOCTYPE html><html><head><style>
    html,body{margin:0;padding:0;width:${size}px;height:${size}px;background:${FOREST};}
    svg{display:block;width:${size}px;height:${size}px;}
  </style></head><body>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}">${inner}</svg>
  </body></html>`;
}

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
try {
  for (const [name, inner] of Object.entries(designs)) {
    for (const size of [16, 32, 128]) {
      const page = await browser.newPage({
        viewport: { width: size, height: size },
        deviceScaleFactor: 1,
      });
      await page.setContent(html(inner, size), { waitUntil: "domcontentloaded" });
      const out = `/workspace/.grok/cmp-${name}-${size}.png`;
      await page.screenshot({ path: out, type: "png", clip: { x: 0, y: 0, width: size, height: size } });
      await page.close();
      console.log(out);
    }
  }
} finally {
  await browser.close();
}
