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

  const resortCount = await prisma.partnerResort.count();
  if (resortCount === 0) {
    await prisma.partnerResort.createMany({
      data: [
        {
          name: "Paradise Island Resort",
          location: "North Male Atoll",
          country: "Maldives",
          description:
            "Luxury overwater villas with direct access to crystal-clear waters perfect for watersports.",
          rating: "5",
          amenities: ["Overwater Villas", "Private Beach", "Spa"],
          activities: ["Jet Ski Adventures", "Scuba Diving", "Kayak Tours"],
        },
        {
          name: "Bali Beach Resort",
          location: "Nusa Dua",
          country: "Indonesia",
          description:
            "Tropical paradise offering world-class watersports in the heart of Southeast Asia.",
          rating: "4",
          amenities: ["Beachfront Rooms", "Swimming Pool"],
          activities: ["Surfing Lessons", "Paddleboarding", "Island Hopping"],
        },
      ],
    });
  }

  const categoryCount = await prisma.shopCategory.count();
  if (categoryCount === 0) {
    const cat = await prisma.shopCategory.create({
      data: {
        name: "Jet Skis",
        slug: "jet-skis",
        description: "High-performance jet skis",
        sortOrder: 1,
      },
    });
    await prisma.shopProduct.create({
      data: {
        name: "Yamaha VX Cruiser Jet Ski",
        slug: "yamaha-vx-cruiser",
        description: "High-performance jet ski for thrilling adventures.",
        price: 12999.99,
        sku: "JS-001",
        stockQuantity: 5,
        categoryId: cat.id,
        brand: "Yamaha",
        isFeatured: true,
      },
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
