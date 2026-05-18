import { WatersportsPage } from "@/components/site/pages/WatersportsPage";
import { getSiteSettings } from "@/lib/settings";

export const revalidate = 60;

export default async function Page() {
  const settings = await getSiteSettings();
  return <WatersportsPage settings={settings} />;
}
