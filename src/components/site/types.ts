export type PartnerResortItem = {
  id: number;
  slug: string;
  name: string;
  location: string;
  country: string;
  description: string;
  image: string | null;
  gallery: string[] | null;
  rating: string;
  reviewScore: string | null;
  reviewCount: number | null;
  priceMin: number | null;
  priceMax: number | null;
  priceTier: string | null;
  partnerSince: string | null;
  activities: string[] | null;
  watersportsActivities: string[] | null;
  divingActivities: string[] | null;
  excursionActivities: string[] | null;
  website: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  established: string | null;
  totalRooms: string | null;
  checkIn: string | null;
  checkOut: string | null;
  awards: string[] | null;
};

export type PartnerBrandItem = {
  id: number;
  name: string;
  logoUrl: string | null;
  initials: string | null;
};

export type ShopProductItem = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  salePrice: number | null;
  sku: string;
  stockQuantity: number;
  image: string | null;
  brand: string | null;
  categorySlug: string;
  categoryName: string;
};
