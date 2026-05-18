import Link from "next/link";
import type { PartnerResortItem } from "./types";

export function ResortDetailPage({ resort }: { resort: PartnerResortItem }) {
  const watersports = resort.watersportsActivities ?? resort.activities ?? [];
  const gallery = resort.gallery ?? (resort.image ? [resort.image] : []);

  return (
    <>
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-5xl mx-auto px-4">
          <Link href="/resorts" className="text-cyan-600 text-sm font-medium hover:underline">
            ← Back to Partner Resorts
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold text-gray-900 font-overpass">{resort.name}</h1>
          <p className="text-cyan-600 text-lg mt-2">
            {resort.location}, {resort.country}
          </p>
          {resort.reviewScore && (
            <p className="text-amber-600 font-semibold mt-2">
              {resort.reviewScore}
              {resort.reviewCount != null ? ` (${resort.reviewCount} reviews)` : ""}
            </p>
          )}

          <div className="mt-8 prose max-w-none">
            <h2 className="text-xl font-bold text-gray-900">About {resort.name}</h2>
            <p className="text-gray-600 leading-relaxed mt-3">{resort.description}</p>
          </div>

          {gallery.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Resort gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((src) => (
                  <img key={src} src={src} alt="" className="w-full h-40 object-cover rounded" />
                ))}
              </div>
            </div>
          )}

          {watersports.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Watersports</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {watersports.map((a) => (
                  <div key={a} className="border border-gray-100 p-4 bg-gray-50">
                    <h3 className="font-semibold text-gray-900">{a}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 grid md:grid-cols-2 gap-8 bg-gray-50 p-6 border border-gray-100">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Resort information</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {resort.established && <li>Established: {resort.established}</li>}
                {resort.totalRooms && <li>Total rooms: {resort.totalRooms}</li>}
                {resort.checkIn && <li>Check-in: {resort.checkIn}</li>}
                {resort.checkOut && <li>Check-out: {resort.checkOut}</li>}
                {resort.priceMin != null && resort.priceMax != null && (
                  <li>
                    Price range: ${Math.round(resort.priceMin)} - ${Math.round(resort.priceMax)}
                  </li>
                )}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-3">Contact resort</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {resort.contactPhone && <li>{resort.contactPhone}</li>}
                {resort.contactEmail && <li>{resort.contactEmail}</li>}
                {resort.website && (
                  <li>
                    <a href={resort.website} className="text-cyan-600 hover:underline" target="_blank" rel="noreferrer">
                      Visit website
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {resort.awards && resort.awards.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Awards & recognition</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {resort.awards.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
