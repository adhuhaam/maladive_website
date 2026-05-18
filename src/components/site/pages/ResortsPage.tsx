import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ActivityTagsExpandable } from "../ActivityTagsExpandable";
import { WaterButtonLink } from "../WaterButton";
import type { PartnerResortItem } from "../types";

function StarRating({ score }: { score: number }) {
  const full = Math.round(score);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < full ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-200"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ResortCard({ resort }: { resort: PartnerResortItem }) {
  const priceLabel =
    resort.priceMin != null && resort.priceMax != null
      ? `$${Math.round(resort.priceMin)} - $${Math.round(resort.priceMax)}`
      : null;
  const score = resort.reviewScore ? parseFloat(resort.reviewScore) : parseFloat(resort.rating);
  const reviewText =
    resort.reviewScore && resort.reviewCount != null
      ? `${resort.reviewScore} (${resort.reviewCount.toLocaleString()} reviews)`
      : `${resort.rating}-Star`;

  const watersports = resort.watersportsActivities ?? resort.activities ?? [];
  const diving = resort.divingActivities ?? [];
  const excursions = resort.excursionActivities ?? [];
  const initials = resort.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="relative h-[320px] md:h-[380px] bg-gradient-to-br from-cyan-500 to-cyan-800">
        {resort.image ? (
          <OptimizedImage
            src={resort.image}
            alt={resort.name}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/30 text-7xl font-bold">
            {initials}
          </div>
        )}

        <div className="absolute top-5 left-5 w-14 h-14 bg-white rounded-md shadow-md flex items-center justify-center">
          <span className="text-gray-800 font-bold text-sm font-overpass">{initials}</span>
        </div>

        {priceLabel && (
          <span className="absolute top-5 left-24 bg-white text-gray-900 text-sm font-bold px-4 py-2 shadow-md">
            {priceLabel}
          </span>
        )}
        {resort.priceTier && (
          <span className="absolute top-5 right-5 bg-gray-900 text-white text-sm font-bold px-4 py-2 tracking-wide">
            {resort.priceTier}
          </span>
        )}
      </div>

      <div className="px-6 md:px-10 py-8 md:py-10">
        <h2 className="text-2xl md:text-[1.75rem] font-bold text-gray-900 font-overpass leading-tight">
          {resort.name}
        </h2>

        <div className="flex items-center gap-2 mt-3">
          <StarRating score={score} />
          <span className="text-sm text-gray-600 font-medium">{reviewText}</span>
        </div>

        <p className="flex items-start gap-2 text-gray-600 mt-3 text-sm md:text-base">
          <svg
            className="w-4 h-4 mt-0.5 shrink-0 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>
            {resort.location}
            {resort.country ? `, ${resort.country}` : ""}
          </span>
        </p>

        <p className="text-gray-600 mt-5 leading-relaxed text-sm md:text-base">{resort.description}</p>

        {watersports.length > 0 && (
          <ActivityTagsExpandable title="Watersports" items={watersports} variant="watersports" />
        )}
        {diving.length > 0 && (
          <ActivityTagsExpandable title="Diving" items={diving} variant="diving" />
        )}
        {excursions.length > 0 && (
          <ActivityTagsExpandable title="Excursions" items={excursions} variant="excursions" />
        )}

        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-6 text-sm text-gray-700">
          {resort.contactPhone && <span>{resort.contactPhone}</span>}
          {resort.contactEmail && <span>{resort.contactEmail}</span>}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
          <WaterButtonLink href={`/resorts/${resort.slug}`} size="md" className="text-center">
            View Details
          </WaterButtonLink>
          {resort.website && (
            <a
              href={resort.website}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center border-2 border-[#06e6da] bg-transparent text-[#06e6da] font-bold text-xs uppercase tracking-widest px-8 py-3.5 font-overpass water-fill-button hover:text-white transition-all duration-300 text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500">
                Visit Website
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ResortsPage({ resorts }: { resorts: PartnerResortItem[] }) {
  return (
    <>
      <section className="bg-white py-14 md:py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-overpass mb-4">
            Our Partner Resorts
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover world-class resorts where luxury meets adventure. Each destination offers unique
            watersports experiences in breathtaking locations.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10">
          {resorts.map((resort) => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
          {resorts.length === 0 && (
            <p className="text-center text-gray-500 py-16 xl:col-span-2">Partner resorts coming soon.</p>
          )}
        </div>
      </section>

      <section className="py-14 md:py-16 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-overpass mb-4 uppercase">
            Ready to Experience Paradise?
          </h2>
          <p className="text-cyan-50/95 mb-8 text-sm md:text-base leading-relaxed">
            Contact us today to plan your perfect watersports vacation at any of our partner resorts.
          </p>
          <WaterButtonLink href="/enquiry" size="lg" className="!border-white !text-white hover:!text-white">
            Start Your Enquiry
          </WaterButtonLink>
        </div>
      </section>
    </>
  );
}
