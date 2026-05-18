import Link from "next/link";
import { getSiteSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const settings = await getSiteSettings();

  return (
    <>
      <section className="relative h-[85vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1730789702936-8C9L5KNE0B6NGV4Z8J40/DSC00842.jpg?format=1500w')",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase">
            {settings.hero_title}
            <span className="block text-cyan-400">Watersports Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">{settings.hero_subtitle}</p>
          <Link
            href="/enquiry"
            className="inline-block px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold hover:bg-cyan-400 hover:text-gray-900 transition-colors"
          >
            GET A QUOTE
          </Link>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { href: "/watersports", title: "Watersports", desc: "Jet skis, kayaks, and more" },
            { href: "/diving", title: "Diving", desc: "Explore underwater worlds" },
            { href: "/excursions", title: "Excursions", desc: "Unforgettable island adventures" },
          ].map((s) => (
            <Link
              key={s.title}
              href={s.href === "/diving" ? "/diving" : s.href}
              className="p-8 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-cyan-700 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
