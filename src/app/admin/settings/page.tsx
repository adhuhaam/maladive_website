import { getSiteSettings } from "@/lib/settings";
import { updateSiteSettings } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const settings = await getSiteSettings();
  const params = await searchParams;

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Site Settings</h1>
      {params.saved && <p className="mb-4 text-green-700 bg-green-50 p-3 rounded text-sm">Settings saved.</p>}
      <form action={updateSiteSettings} className="bg-white p-6 rounded-lg shadow space-y-4">
        {[
          ["site_name", "Site Name"],
          ["site_tagline", "Tagline"],
          ["hero_title", "Hero Title"],
          ["contact_email", "Contact Email"],
          ["contact_phone", "Contact Phone"],
        ].map(([key, label]) => (
          <div key={key}>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <input name={key} defaultValue={settings[key] ?? ""} className="w-full border rounded px-3 py-2" />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium mb-1">Hero Subtitle</label>
          <textarea name="hero_subtitle" defaultValue={settings.hero_subtitle} rows={2} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">About Intro</label>
          <textarea name="about_intro" defaultValue={settings.about_intro} rows={4} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contact Address</label>
          <textarea name="contact_address" defaultValue={settings.contact_address} rows={2} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">Save Settings</button>
      </form>
    </div>
  );
}
