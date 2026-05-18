import { DivingPage } from "@/components/site/pages/DivingPage";
import { getSiteSettings } from "@/lib/settings";

export const revalidate = 60;

export default async function Page() {
  const settings = await getSiteSettings();
  return <DivingPage settings={settings} />;
}
