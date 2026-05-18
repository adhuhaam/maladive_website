#!/usr/bin/env python3
"""Convert Maladive Blade templates to JSX fragments."""
import re
import sys
from pathlib import Path

ROUTES = {
    "home": "/",
    "partner-resorts": "/partner-resorts",
    "shop": "/shop",
    "about": "/about",
    "contact": "/contact",
    "enquiry": "/enquiry",
    "watersports": "/watersports",
    "diving": "/diving",
    "excursions": "/excursions",
    "services": "/services",
}


def blade_to_jsx(html: str, settings_expr: str = "settings") -> str:
    s = html
    s = re.sub(r"@extends\([^)]+\)\s*", "", s)
    s = re.sub(r"@section\([^)]+\)\s*", "", s)
    s = re.sub(r"@endsection\s*", "", s)
    s = re.sub(r"@csrf\s*", "", s)
    s = re.sub(r"@stack\([^)]+\)\s*", "", s)
    s = re.sub(r"@method\([^)]+\)\s*", "", s)

    s = re.sub(
        r"\{\{\s*route\(['\"]([^'\"]+)['\"]\)\s*\}\}",
        lambda m: ROUTES.get(m.group(1), f"/{m.group(1)}"),
        s,
    )
    s = re.sub(
        r"\{\{\s*asset\(['\"]([^'\"]+)['\"]\)\s*\}\}",
        lambda m: "/" + m.group(1).lstrip("/"),
        s,
    )

    def site_setting(m):
        key = m.group(1)
        default = m.group(2).strip() if m.lastindex >= 2 else None
        if default:
            return f"{{{settings_expr}.{key} ?? {default}}}"
        return f"{{{settings_expr}.{key}}}"

    s = re.sub(
        r"\{\{\s*\$siteSettings\[['\"]([^'\"]+)['\"]\]\s*\?\?\s*([^}]+)\s*\}\}",
        site_setting,
        s,
    )
    s = re.sub(
        r"\{\{\s*\$siteSettings\[['\"]([^'\"]+)['\"]\]\s*\}\}",
        lambda m: f"{{{settings_expr}.{m.group(1)}}}",
        s,
    )

    # Remove blade control structures (simplified pages)
    s = re.sub(r"@if\s*\([^)]+\)[\s\S]*?@endif", "", s)
    s = re.sub(r"@error\([^)]+\)[\s\S]*?@enderror", "", s)
    s = re.sub(r"@forelse\([\s\S]*?@endforelse", "", s)

    s = re.sub(r"<a\s+", '<Link ', s)
    s = re.sub(r"</a>", "</Link>", s)
    s = re.sub(r'href="(/[^"]*)"', r'href="\1"', s)

    s = re.sub(r"\bclass=", "className=", s)
    for attr in ["stroke-width", "stroke-linecap", "stroke-linejoin", "viewBox", "xmlns", "aria-expanded", "aria-haspopup", "aria-controls", "data-state", "decoding", "loading", "autoplay", "autocomplete", "fill-rule", "clip-rule"]:
        camel = re.sub(r"-([a-z])", lambda x: x.group(1).upper(), attr)
        s = s.replace(f"{attr}=", f"{camel}=")

    s = re.sub(r"<img([^>]*)(?<!/)>", r"<img\1 />", s)
    s = re.sub(r"<input([^>]*)(?<!/)>", r"<input\1 />", s)
    s = re.sub(r"<br>", "<br />", s)

    s = s.replace("{{--", "{/*").replace("--}}", "*/}")
    return s


def extract_layout_parts(layout: str):
    main_start = layout.find("<main>")
    main_end = layout.find("</main>")
    header = layout[layout.find("<body"):main_start]
    footer_start = layout.find("<!-- Footer -->")
    scripts_start = layout.find("<!-- Scripts -->")
    footer = layout[footer_start:scripts_start]
    scripts = layout[scripts_start : layout.find("@stack('scripts')")]
    return header, footer, scripts


def main():
    blade_path = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    content = blade_path.read_text()
    name = blade_path.stem.replace(".blade", "")

    if name == "app" and "layouts" in str(blade_path):
        header, footer, scripts = extract_layout_parts(content)
        out_dir.mkdir(parents=True, exist_ok=True)
        (out_dir / "SiteHeader.tsx").write_text(
            f'''import Link from "next/link";

export function SiteHeader({{ settings }}: {{ settings: Record<string, string> }}) {{
  return (
    <>
{blade_to_jsx(header)}
    </>
  );
}}
'''
        )
        (out_dir / "SiteFooter.tsx").write_text(
            f'''export function SiteFooter() {{
  return (
    <>
{blade_to_jsx(footer)}
    </>
  );
}}
'''
        )
        (out_dir / "site-nav-scripts.ts").write_text(
            scripts.replace("<script>", "").replace("</script>", "").strip()
        )
        print("Wrote layout parts")
        return

    jsx = blade_to_jsx(content)
    component = "".join(
        c.capitalize() for c in name.replace("-", " ").split()
    )
    if not component:
        component = "Page"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_file = out_dir / f"{component}Content.tsx"
    out_file.write_text(
        f'''import Link from "next/link";

export function {component}Content({{ settings }}: {{ settings: Record<string, string> }}) {{
  return (
    <>
{jsx}
    </>
  );
}}
'''
    )
    print("Wrote", out_file)


if __name__ == "__main__":
    main()
