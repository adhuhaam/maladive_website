"use client";

import { useEffect } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteChrome({
  children,
  settings,
}: {
  children: React.ReactNode;
  settings: Record<string, string>;
}) {
  useEffect(() => {
    import("./site-nav-scripts").then((mod) => mod.initSiteNav());
  }, []);

  return (
    <>
      <SiteHeader settings={settings} />
      <main className="animate-fadeIn">{children}</main>
      <SiteFooter />
    </>
  );
}
