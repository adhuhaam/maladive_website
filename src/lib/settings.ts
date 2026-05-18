import { unstable_cache } from "next/cache";
import { prisma } from "./prisma";
import { SITE_REVALIDATE } from "./cache";

const defaults: Record<string, string> = {
  site_name: "Maladive",
  site_tagline: "Premium Watersports Experiences",
  hero_title: "Experience the Ultimate",
  hero_subtitle:
    "Discover thrilling watersports activities and premium equipment at the world's most beautiful resort destinations",
  about_intro:
    "Maladive brings world-class watersports to premier resort destinations across the globe.",
  contact_email: "info@maladive.com",
  contact_phone: "+960 777 9131",
  contact_address: "H.Alimas Ge, K.Male' Maldives",
};

async function fetchSiteSettings(): Promise<Record<string, string>> {
  try {
    const rows = await prisma.siteSetting.findMany();
    const settings = { ...defaults };
    for (const row of rows) {
      if (row.value != null) settings[row.key] = row.value;
    }
    return settings;
  } catch {
    return { ...defaults };
  }
}

export const getSiteSettings = unstable_cache(fetchSiteSettings, ["site-settings"], {
  revalidate: SITE_REVALIDATE,
});

export async function setSiteSettings(data: Record<string, string>) {
  for (const [key, value] of Object.entries(data)) {
    await prisma.siteSetting.upsert({
      where: { key },
      create: { key, value },
      update: { value },
    });
  }
}
