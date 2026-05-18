import { prisma } from "@/lib/prisma";
import { PageHero } from "@/components/PageHero";

export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const categories = await prisma.shopCategory.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
    include: {
      products: {
        where: { status: "active" },
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  return (
    <>
      <PageHero title="Equipment Shop" subtitle="Premium watersports equipment for your adventures" />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {categories.map((cat) => (
            <div key={cat.id}>
              <h2 className="text-2xl font-bold mb-2">{cat.name}</h2>
              {cat.description && <p className="text-gray-600 mb-6">{cat.description}</p>}
              <div className="grid md:grid-cols-3 gap-6">
                {cat.products.map((p) => (
                  <div key={p.id} className="bg-white rounded-xl shadow p-6">
                    <h3 className="font-semibold text-lg">{p.name}</h3>
                    {p.brand && <p className="text-cyan-600 text-sm">{p.brand}</p>}
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{p.description}</p>
                    <p className="mt-4 text-xl font-bold">
                      ${Number(p.salePrice ?? p.price).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {categories.length === 0 && <p className="text-center text-gray-500">Shop coming soon.</p>}
        </div>
      </section>
    </>
  );
}
