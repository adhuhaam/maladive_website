import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function ServicesPage() {
  const services = [
    { href: "/watersports", title: "Watersports", desc: "Thrilling activities on the water" },
    { href: "/diving", title: "Diving", desc: "Underwater exploration" },
    { href: "/excursions", title: "Excursions", desc: "Island adventures and tours" },
  ];
  return (
    <>
      <PageHero title="Our Services" subtitle="World-class watersports for every adventure" />
      <section className="py-20 container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="block p-8 bg-white rounded-xl shadow hover:shadow-lg">
            <h2 className="text-xl font-bold text-cyan-700">{s.title}</h2>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
