import { PartnerResortsPage } from "@/components/site/pages/PartnerResortsPage";
import { getActiveResorts } from "@/lib/resorts";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [settings, resorts] = await Promise.all([getSiteSettings(), getActiveResorts()]);
  return <PartnerResortsPage settings={settings} resorts={resorts} />;
}
