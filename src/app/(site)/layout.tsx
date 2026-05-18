import { SiteChrome } from "@/components/site/SiteChrome";
import { getSiteSettings } from "@/lib/settings";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();
  return <SiteChrome settings={settings}>{children}</SiteChrome>;
}
