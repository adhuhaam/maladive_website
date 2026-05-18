import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password", 12);

  await prisma.user.upsert({
    where: { username: "admin" },
    update: { password },
    create: {
      name: "Admin",
      username: "admin",
      email: "admin@maladive.com",
      password,
    },
  });

  const settings: Record<string, string> = {
    site_name: "Maladive",
    site_tagline: "Premium Watersports Experiences",
    hero_title: "Experience the Ultimate",
    hero_subtitle:
      "Discover thrilling watersports activities and premium equipment at the world's most beautiful resort destinations",
    about_intro:
      "Maladive brings world-class watersports to premier resort destinations across the globe.",
    contact_email: "info@malavaramaldives.com",
    contact_phone: "+960 777 9131",
    contact_address: "H.Alimas Ge, K.Male' Maldives",
  };

  for (const [key, value] of Object.entries(settings)) {
    await prisma.siteSetting.upsert({
      where: { key },
      create: { key, value },
      update: { value },
    });
  }

  const brands = [
    { name: "Waydoo", initials: "W", sortOrder: 1 },
    { name: "JP Australia", initials: "JP", sortOrder: 2 },
    { name: "Connelly", initials: "C", sortOrder: 3 },
    { name: "GoPro", initials: "G", sortOrder: 4 },
    { name: "Saeko", initials: "S", sortOrder: 5 },
    { name: "Mesle", initials: "M", sortOrder: 6 },
  ];

  for (const brand of brands) {
    const existing = await prisma.partnerBrand.findFirst({ where: { name: brand.name } });
    if (existing) {
      await prisma.partnerBrand.update({ where: { id: existing.id }, data: brand });
    } else {
      await prisma.partnerBrand.create({ data: brand });
    }
  }

  const ayadaImage =
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop";

  await prisma.partnerResort.upsert({
    where: { slug: "ayada-maldives" },
    create: {
      slug: "ayada-maldives",
      name: "Ayada Maldives",
      location: "South Huvadhoo (Gaafu Dhaalu) Atoll, Maguhdhuvaa",
      country: "Maldives",
      description:
        "Located on a beautiful private island with pristine beaches and lush tropical greenery, Ayada Maldives offers a truly luxurious retreat with a genuine Maldivian style. A wide range of restaurants, large villas with private infinity pools, and our multiple award-winning AySpa make Ayada Maldives an excellent choice.",
      website: "https://www.ayadamaldives.com/",
      contactPhone: "+960 684 4444",
      contactEmail: "info@ayadamaldives.com",
      image: ayadaImage,
      gallery: [ayadaImage],
      rating: "5",
      reviewScore: "4.9",
      reviewCount: 6829,
      priceMin: 502,
      priceMax: 2177,
      priceTier: "Luxury",
      partnerSince: "2018",
      amenities: ["Overwater Villas", "Private Beach", "Spa", "Fine Dining"],
      activities: ["Jet Ski", "Snorkeling", "Sunset Cruise"],
      watersportsActivities: [
        "Jet Ski Safari",
        "Kayaking",
        "Banana Boat",
        "Seabob",
        "Stand-Up Paddleboarding",
        "Parasailing",
        "Wakeboarding",
        "Windsurfing",
        "Catamaran Sailing",
        "Flyboarding",
        "Kite Surfing",
        "Snorkeling",
      ],
      divingActivities: ["House Reef Diving", "Night Dives", "PADI Courses"],
      excursionActivities: ["Island Hopping", "Fishing Trips", "Dolphin Cruise"],
      established: "2011",
      totalRooms: "112",
      checkIn: "14:00",
      checkOut: "12:00",
      awards: ["World Travel Awards", "Condé Nast Johansens"],
    },
    update: {
      name: "Ayada Maldives",
      image: ayadaImage,
      reviewScore: "9.4",
      reviewCount: 1284,
      priceMin: 450,
      priceMax: 1200,
    },
  });

  await prisma.partnerResort.upsert({
    where: { slug: "meyyafushi" },
    create: {
      slug: "meyyafushi",
      name: "Meyyafushi Maldives",
      location: "Lhaviyani Atoll, Meyyafushi Maldives",
      country: "Maldives",
      description:
        "Family-friendly resort with spectacular sunsets and exciting water activities.",
      image: ayadaImage,
      rating: "5",
      reviewScore: "0",
      reviewCount: 0,
      priceTier: "$$$$",
      website: "https://www.meyyafushi.com/",
      contactPhone: "+960 662 0303",
      contactEmail: "info@meyyafushi.com",
      watersportsActivities: [
        "Kayaking",
        "Banana Boat",
        "Wakeboarding",
        "Stand-Up Paddleboarding",
        "Jet Ski Tours",
        "Parasailing",
        "Hydrofoil",
        "Windsurfing",
        "Catamaran",
        "Tube Ride",
      ],
      divingActivities: [
        "Scuba Diving",
        "Snorkeling Tours",
        "Manta Ray Snorkeling",
        "Night Diving",
        "Deep Sea Diving",
        "Coral Restoration",
        "Discover Scuba",
        "Underwater Photography",
      ],
      excursionActivities: [
        "Fishing Trips",
        "Whale Watching",
        "Beach Volleyball",
        "Sunset Cruises",
        "Cultural Tours",
        "Tequila Tasting",
        "Island Picnic",
        "Dolphin Watching",
      ],
    },
    update: {},
  });

  await prisma.partnerResort.upsert({
    where: { slug: "paradise-island-resort" },
    create: {
      slug: "paradise-island-resort",
      name: "Paradise Island Resort",
      location: "North Male Atoll",
      country: "Maldives",
      description:
        "Luxury overwater villas with direct access to crystal-clear waters perfect for watersports.",
      rating: "5",
      amenities: ["Overwater Villas", "Private Beach", "Spa"],
      activities: ["Jet Ski Adventures", "Scuba Diving", "Kayak Tours"],
      watersportsActivities: ["Jet Ski", "Parasailing", "Windsurfing"],
      divingActivities: ["Reef Diving", "Discover Scuba"],
      excursionActivities: ["Sunset Cruise", "Sandbank Picnic"],
    },
    update: {},
  });

  const categories = [
    { name: "Jet Skis", slug: "jet-skis", description: "High-performance jet skis", sortOrder: 1 },
    { name: "Kayaks", slug: "kayaks", description: "Kayaks and paddles", sortOrder: 2 },
    { name: "Diving Gear", slug: "diving-gear", description: "Diving equipment", sortOrder: 3 },
  ];

  const categoryIds: Record<string, number> = {};
  for (const cat of categories) {
    const row = await prisma.shopCategory.upsert({
      where: { slug: cat.slug },
      create: cat,
      update: { name: cat.name, description: cat.description, sortOrder: cat.sortOrder },
    });
    categoryIds[cat.slug] = row.id;
  }

  const products = [
    {
      name: "Yamaha VX Cruiser Jet Ski",
      slug: "yamaha-vx-cruiser",
      sku: "JS-001",
      price: 12999.99,
      categorySlug: "jet-skis",
      brand: "Yamaha",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
      isFeatured: true,
    },
    {
      name: "Sea-Doo GTX Limited 300",
      slug: "sea-doo-gtx-limited",
      sku: "JS-002",
      price: 14999.99,
      salePrice: 13999.99,
      categorySlug: "jet-skis",
      brand: "Sea-Doo",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      isFeatured: true,
    },
    {
      name: "Ocean Kayak Malibu Two XL",
      slug: "ocean-kayak-malibu",
      sku: "KY-001",
      price: 899.99,
      categorySlug: "kayaks",
      brand: "Ocean Kayak",
      image: "https://images.unsplash.com/photo-1544551763-77ef1d996daa?w=600&h=400&fit=crop",
    },
    {
      name: "Aqualung Pro HD BCD",
      slug: "aqualung-pro-hd-bcd",
      sku: "DV-001",
      price: 549.99,
      categorySlug: "diving-gear",
      brand: "Aqualung",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
    },
  ];

  for (const p of products) {
    const { categorySlug, salePrice, ...rest } = p;
    await prisma.shopProduct.upsert({
      where: { slug: p.slug },
      create: {
        ...rest,
        description: `Premium ${p.name} for resort watersports operations.`,
        salePrice: salePrice ?? null,
        stockQuantity: 10,
        categoryId: categoryIds[categorySlug],
      },
      update: {
        name: p.name,
        price: p.price,
        salePrice: salePrice ?? null,
        image: p.image,
        isFeatured: p.isFeatured ?? false,
      },
    });
  }

  // Backfill slug on legacy resorts missing slug
  const legacy = await prisma.partnerResort.findMany({ where: { slug: "" } });
  for (const r of legacy) {
    const slug = r.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    await prisma.partnerResort.update({
      where: { id: r.id },
      data: { slug: `${slug}-${r.id}` },
    });
  }

  console.log("Seed complete. Admin: admin / password");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
