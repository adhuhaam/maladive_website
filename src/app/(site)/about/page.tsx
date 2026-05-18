import { getSiteSettings } from "@/lib/settings";
import { PageHero } from "@/components/PageHero";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const settings = await getSiteSettings();
  return (
    <>
      <PageHero title="About Maladive" subtitle={settings.site_tagline} />
      <section className="py-20 max-w-3xl mx-auto px-4 prose prose-lg">
        <p>{settings.about_intro}</p>
      </section>
    </>
  );
}
