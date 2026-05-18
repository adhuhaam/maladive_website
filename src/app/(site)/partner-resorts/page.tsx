import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { PageHero } from "@/components/PageHero";

export const dynamic = "force-dynamic";

export default async function PartnerResortsPage() {
  const resorts = await prisma.partnerResort.findMany({
    where: { status: "active" },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <PageHero
        title="Partner Resorts"
        subtitle="Experience Maladive watersports at prestigious resort destinations worldwide"
      />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resorts.map((resort, i) => {
            const activities = (resort.activities as string[] | null) ?? [];
            return (
              <article key={resort.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${["from-blue-500 to-cyan-600", "from-green-500 to-emerald-600", "from-purple-500 to-indigo-600"][i % 3]} flex items-center justify-center text-white text-6xl`}>
                  {resort.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={resort.image} alt="" className="w-full h-full object-cover" />
                  ) : (
                    "🌊"
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold">{resort.name}</h2>
                  <p className="text-cyan-600 text-sm mb-2">
                    {resort.location}, {resort.country}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{resort.description}</p>
                  {activities.length > 0 && (
                    <ul className="text-sm text-gray-500 mb-4 space-y-1">
                      {activities.slice(0, 4).map((a) => (
                        <li key={a}>• {a}</li>
                      ))}
                    </ul>
                  )}
                  <Link href="/enquiry" className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm">
                    Book Now
                  </Link>
                </div>
              </article>
            );
          })}
          {resorts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">No resorts listed yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
