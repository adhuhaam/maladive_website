import { AboutPage } from "@/components/site/pages/AboutPage";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Page() {
  const settings = await getSiteSettings();
  return <AboutPage settings={settings} />;
}
