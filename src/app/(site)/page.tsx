import { HomePage } from "@/components/site/pages/HomePage";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Page() {
  const settings = await getSiteSettings();
  return <HomePage settings={settings} />;
}
