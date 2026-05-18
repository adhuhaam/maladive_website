#!/usr/bin/env node
/**
 * Converts Laravel Blade snippets to JSX for Next.js (Maladive site).
 */
import fs from "fs";
import path from "path";

const ROUTES = {
  home: "/",
  "partner-resorts": "/partner-resorts",
  shop: "/shop",
  about: "/about",
  contact: "/contact",
  enquiry: "/enquiry",
  watersports: "/watersports",
  diving: "/motion-diving",
  excursions: "/excursions",
  services: "/services",
};

function convert(html) {
  let s = html;
  s = s.replace(/@extends\([^)]+\)\s*/g, "");
  s = s.replace(/@section\([^)]+\)\s*/g, "");
  s = s.replace(/@endsection\s*/g, "");
  s = s.replace(/@csrf\s*/g, "");
  s = s.replace(/@stack\([^)]+\)\s*/g, "");

  s = s.replace(/\{\{\s*route\(['"]([^'"]+)['"]\)\s*\}\}/g, (_, name) => ROUTES[name] ?? `/${name}`);

  s = s.replace(/\{\{\s*asset\(['"]([^'"]+)['"]\)\s*\}\}/g, (_, p) => `/${p.replace(/^\//, "")}`);

  s = s.replace(
    /\{\{\s*\$siteSettings\[['"]([^'"]+)['"]\]\s*\?\?\s*([^}]+)\s*\}\}/g,
    (_, key, def) => `{settings?.${key.replace(/-/g, "_")} ?? ${def.trim()}}`,
  );
  s = s.replace(/\{\{\s*\$siteSettings\[['"]([^'"]+)['"]\]\s*\}\}/g, (_, key) => `{settings?.${key}}`);

  s = s.replace(/\{\{\s*session\(['"]success['"]\)\s*\}\}/g, "");
  s = s.replace(/\{\{\s*old\([^)]+\)\s*\}\}/g, "");
  s = s.replace(/\{\{\s*\$errors->any\(\)\s*\}\}/g, "false");
  s = s.replace(/\{\{\s*\$errors->all\(\)\s*as\s*\$error\s*\}\}[\s\S]*?@endforeach/g, "");
  s = s.replace(/@error\([^)]+\)[\s\S]*?@enderror/g, "");
  s = s.replace(/@if\s*\([^)]+\)[\s\S]*?@endif/g, "");

  s = s.replace(/\{\{\s*\$enquiry->([^}]+)\s*\}\}/g, "{enquiry.$1}");
  s = s.replace(/\{\{\s*\$contact->([^}]+)\s*\}\}/g, "{contact.$1}");
  s = s.replace(/\{\{\s*\$resort->([^}]+)\s*\}\}/g, "{resort.$1}");
  s = s.replace(/\{\{\s*Str::limit\([^)]+\)\s*\}\}/g, "{resort.description}");

  s = s.replace(/@forelse\(\$resorts[^)]*\)/g, "{resorts.map((resort, loop) => (");
  s = s.replace(/@empty[\s\S]*?@endforelse/g, "))}");
  s = s.replace(/@include\([^)]+\)/g, "");

  s = s.replace(/\{\{\s*([^}]+)\s*\}\}/g, "{$1}");

  s = s.replace(/\bclass=/g, "className=");
  s = s.replace(/className="([^"]*)\{\{[^}]+\}\}([^"]*)"/g, 'className="$1$2"');

  const attrs = [
    "stroke-width",
    "stroke-linecap",
    "stroke-linejoin",
    "fill-rule",
    "clip-rule",
    "xmlns",
    "viewBox",
    "aria-expanded",
    "aria-haspopup",
    "aria-controls",
    "data-state",
    "decoding",
    "loading",
    "autoplay",
    "autocomplete",
  ];
  for (const a of attrs) {
    const camel = a.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    if (camel !== a) s = s.replace(new RegExp(`\\b${a}=`, "g"), `${camel}=`);
  }

  s = s.replace(/<img([^>]*)\/>/g, "<img$1 />");
  s = s.replace(/<input([^>]*)\/>/g, "<input$1 />");
  s = s.replace(/<lottie-player/g, "<lottie-player");
  s = s.replace(/<br>/g, "<br />");

  return s;
}

const input = process.argv[2];
const output = process.argv[3];
if (!input || !output) {
  console.error("Usage: node blade-to-jsx.mjs input.blade.php output.tsx");
  process.exit(1);
}
const raw = fs.readFileSync(input, "utf8");
const content = convert(raw);
const base = path.basename(output, ".tsx");
const wrapper = `/* Auto-converted from Blade — preserve markup for visual parity */
import type { SiteSettings } from "@/lib/settings-types";

export function ${base.replace(/-/g, "")}Content({ settings }: { settings: Record<string, string> }) {
  return (
    <>
${content
  .split("\n")
  .map((l) => "      " + l)
  .join("\n")}
    </>
  );
}
`;
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, wrapper);
console.log("Wrote", output);
