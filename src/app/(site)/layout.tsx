import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getSiteSettings } from "@/lib/settings";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  return (
    <>
      <SiteHeader settings={settings} />
      <main className="flex-1 flex flex-col">{children}</main>
      <SiteFooter settings={settings} />
    </>
  );
}
