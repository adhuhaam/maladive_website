import { EnquiryPage } from "@/components/site/pages/EnquiryPage";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Page() {
  const settings = await getSiteSettings();
  return <EnquiryPage settings={settings} />;
}
