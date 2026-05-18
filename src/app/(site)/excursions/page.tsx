import { ExcursionsPage } from "@/components/site/pages/ExcursionsPage";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Page() {
  const settings = await getSiteSettings();
  return <ExcursionsPage settings={settings} />;
}
