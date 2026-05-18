import { HomePage } from "@/components/site/pages/HomePage";
import { getActiveBrands } from "@/lib/brands";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function Page() {
  const [settings, brands] = await Promise.all([getSiteSettings(), getActiveBrands()]);
  return <HomePage settings={settings} brands={brands} />;
}
