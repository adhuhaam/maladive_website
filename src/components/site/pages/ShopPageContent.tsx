import type { ShopCategory, ShopProduct } from "@prisma/client";

type CategoryWithProducts = ShopCategory & { products: ShopProduct[] };

export function ShopPageContent({ categories }: { categories: CategoryWithProducts[] }) {
  return (
    <>
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment Shop</h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Premium watersports equipment for your adventures
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category.id} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
              {category.description && (
                <p className="text-gray-600 mb-6">{category.description}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product) => {
                  const price = Number(product.salePrice ?? product.price);
                  return (
                    <div key={product.id} className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                      {product.brand && <p className="text-cyan-600 text-sm">{product.brand}</p>}
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">
                          ${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                        {product.isFeatured && (
                          <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          {categories.length === 0 && (
            <p className="text-center text-gray-500">Shop inventory coming soon.</p>
          )}
        </div>
      </section>
    </>
  );
}
