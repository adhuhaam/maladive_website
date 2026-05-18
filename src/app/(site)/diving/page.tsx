import { DivingPage } from "@/components/site/pages/DivingPage";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Page() {
  const settings = await getSiteSettings();
  return <DivingPage settings={settings} />;
}
