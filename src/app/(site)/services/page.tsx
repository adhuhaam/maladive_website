import { ServicesPage } from "@/components/site/pages/ServicesPage";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Page() {
  const settings = await getSiteSettings();
  return <ServicesPage settings={settings} />;
}
