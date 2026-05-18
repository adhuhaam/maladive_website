import Link from "next/link";
import type { PartnerResortItem } from "../types";

function ActivityTags({ title, items }: { title: string; items: string[] }) {
  const visible = items.slice(0, 6);
  const more = items.length - visible.length;
  return (
    <div className="mb-4">
      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">{title}</h4>
      <ul className="flex flex-wrap gap-2">
        {visible.map((a) => (
          <li key={a} className="text-xs bg-cyan-50 text-cyan-800 px-2 py-1 border border-cyan-100">
            {a}
          </li>
        ))}
      </ul>
      {more > 0 && <p className="text-xs text-cyan-600 mt-2 font-medium">Show more ({more} more)</p>}
    </div>
  );
}

function ResortCardV0({ resort }: { resort: PartnerResortItem }) {
  const priceLabel =
    resort.priceMin != null && resort.priceMax != null
      ? `$${Math.round(resort.priceMin)} - $${Math.round(resort.priceMax)}`
      : null;
  const reviewLabel =
    resort.reviewScore && resort.reviewCount != null
      ? `${resort.reviewScore} (${resort.reviewCount} reviews)`
      : `${resort.rating}-Star`;

  const watersports = resort.watersportsActivities ?? resort.activities ?? [];
  const diving = resort.divingActivities ?? [];
  const excursions = resort.excursionActivities ?? [];

  return (
    <article className="bg-white border border-gray-100 shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-64 md:h-auto min-h-[280px] bg-gradient-to-br from-cyan-400 to-cyan-700">
          {resort.image ? (
            <img src={resort.image} alt={resort.name} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/40 text-6xl font-bold">
              {resort.name.charAt(0)}
            </div>
          )}
          {priceLabel && (
            <span className="absolute top-4 left-4 bg-white/95 text-gray-900 text-sm font-bold px-3 py-1 shadow">
              {priceLabel}
            </span>
          )}
          {resort.priceTier && (
            <span className="absolute top-4 right-4 bg-gray-900 text-white text-sm font-bold px-3 py-1">
              {resort.priceTier}
            </span>
          )}
        </div>
        <div className="p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-overpass">{resort.name}</h2>
          <p className="text-cyan-600 font-medium mt-1">
            {resort.location}, {resort.country}
          </p>
          <p className="text-sm text-amber-600 font-semibold mt-2">{reviewLabel}</p>
          <p className="text-gray-600 mt-4 leading-relaxed line-clamp-4">{resort.description}</p>

          {watersports.length > 0 && <ActivityTags title="Watersports" items={watersports} />}
          {diving.length > 0 && <ActivityTags title="Diving" items={diving} />}
          {excursions.length > 0 && <ActivityTags title="Excursions" items={excursions} />}

          <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-600">
            {resort.contactPhone && <span>{resort.contactPhone}</span>}
            {resort.contactEmail && <span>{resort.contactEmail}</span>}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href={`/resorts/${resort.slug}`}
              className="inline-block px-6 py-3 bg-cyan-600 text-white font-bold text-xs uppercase tracking-wide hover:bg-cyan-700 transition-colors"
            >
              View details
            </Link>
            {resort.website && (
              <a
                href={resort.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border-2 border-cyan-600 text-cyan-600 font-bold text-xs uppercase tracking-wide hover:bg-cyan-50 transition-colors"
              >
                Visit website
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ResortsPage({ resorts }: { resorts: PartnerResortItem[] }) {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-cyan-900 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-overpass mb-4">Our Partner Resorts</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Discover world-class resorts where luxury meets adventure. Each destination offers unique
            watersports experiences in breathtaking locations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {resorts.map((resort) => (
            <ResortCardV0 key={resort.id} resort={resort} />
          ))}
          {resorts.length === 0 && (
            <p className="text-center text-gray-500 py-12">Partner resorts coming soon.</p>
          )}
        </div>
      </section>

      <section className="py-16 bg-cyan-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-overpass mb-4">Ready to Experience Paradise?</h2>
          <p className="text-cyan-100 mb-8">
            Contact us today to plan your perfect watersports vacation at any of our partner resorts.
          </p>
          <Link
            href="/enquiry"
            className="inline-block px-8 py-4 bg-white text-cyan-900 font-bold uppercase tracking-wide hover:bg-cyan-50 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
