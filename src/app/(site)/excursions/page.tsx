import { PageHero } from "@/components/PageHero";
import Link from "next/link";

export default function ExcursionsPage() {
  return (
    <>
      <PageHero title="Excursions" subtitle="Unforgettable island adventures" />
      <section className="py-16 max-w-3xl mx-auto px-4 text-center">
        <p className="text-gray-600 mb-8">Sunset cruises, island hopping, and cultural tours.</p>
        <Link href="/enquiry" className="inline-block bg-cyan-600 text-white px-8 py-3 rounded-lg font-bold">
          Request a Quote
        </Link>
      </section>
    </>
  );
}
