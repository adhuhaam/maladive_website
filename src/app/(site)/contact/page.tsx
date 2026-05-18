import { ContactPage } from "@/components/site/pages/ContactPage";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Page() {
  const settings = await getSiteSettings();
  return <ContactPage settings={settings} />;
}
