import type { PartnerBrandItem } from "./types";

export function BrandsCarousel({ brands }: { brands: PartnerBrandItem[] }) {
  const items = brands.length > 0 ? [...brands, ...brands] : [];

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50 -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-overpass uppercase">
            Partnered Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading brands to deliver exceptional watersports experiences
          </p>
        </div>
        <div className="relative overflow-hidden h-32">
          <div className="flex items-center justify-center h-full">
            <div className="flex brand-carousel" style={{ width: `${Math.max(items.length, 1) * 200}px` }}>
              {items.map((brand, i) => (
                <div
                  key={`${brand.id}-${i}`}
                  className="flex-shrink-0 w-[200px] flex items-center justify-center opacity-40"
                >
                  <div className="text-center">
                    {brand.logoUrl ? (
                      <img
                        src={brand.logoUrl}
                        alt={brand.name}
                        className="w-16 h-16 object-contain mx-auto mb-2"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-gray-600 font-bold text-sm">
                          {brand.initials ?? brand.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <p className="text-sm font-medium text-gray-700">{brand.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
