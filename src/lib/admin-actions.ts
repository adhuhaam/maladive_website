"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { slugify } from "./slug";

function lines(value: FormDataEntryValue | null): string[] {
  if (!value) return [];
  return String(value)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

function optionalDecimal(value: FormDataEntryValue | null): number | null {
  if (!value || String(value).trim() === "") return null;
  return parseFloat(String(value));
}

function optionalInt(value: FormDataEntryValue | null): number | null {
  if (!value || String(value).trim() === "") return null;
  return parseInt(String(value), 10);
}

// ——— Partner resorts ———

function resortDataFromForm(formData: FormData, slug: string) {
  return {
    slug,
    name: String(formData.get("name")),
    location: String(formData.get("location")),
    country: String(formData.get("country") ?? "Maldives"),
    description: String(formData.get("description")),
    image: formData.get("image") ? String(formData.get("image")) : null,
    gallery: lines(formData.get("gallery")),
    rating: String(formData.get("rating") ?? "4"),
    reviewScore: formData.get("reviewScore") ? String(formData.get("reviewScore")) : null,
    reviewCount: optionalInt(formData.get("reviewCount")),
    priceMin: optionalDecimal(formData.get("priceMin")),
    priceMax: optionalDecimal(formData.get("priceMax")),
    priceTier: formData.get("priceTier") ? String(formData.get("priceTier")) : null,
    partnerSince: formData.get("partnerSince") ? String(formData.get("partnerSince")) : null,
    status: String(formData.get("status") ?? "active"),
    amenities: lines(formData.get("amenities")),
    activities: lines(formData.get("activities")),
    watersportsActivities: lines(formData.get("watersportsActivities")),
    divingActivities: lines(formData.get("divingActivities")),
    excursionActivities: lines(formData.get("excursionActivities")),
    website: formData.get("website") ? String(formData.get("website")) : null,
    contactEmail: formData.get("contactEmail") ? String(formData.get("contactEmail")) : null,
    contactPhone: formData.get("contactPhone") ? String(formData.get("contactPhone")) : null,
    established: formData.get("established") ? String(formData.get("established")) : null,
    totalRooms: formData.get("totalRooms") ? String(formData.get("totalRooms")) : null,
    checkIn: formData.get("checkIn") ? String(formData.get("checkIn")) : null,
    checkOut: formData.get("checkOut") ? String(formData.get("checkOut")) : null,
    awards: lines(formData.get("awards")),
  };
}

export async function createPartnerResort(formData: FormData) {
  const name = String(formData.get("name"));
  const slug = slugify(String(formData.get("slug") || name));
  await prisma.partnerResort.create({ data: resortDataFromForm(formData, slug) });
  revalidatePath("/partner-resorts");
  revalidatePath("/resorts");
  redirect("/admin/partner-resorts");
}

export async function updatePartnerResort(id: number, formData: FormData) {
  const name = String(formData.get("name"));
  const slug = slugify(String(formData.get("slug") || name));
  await prisma.partnerResort.update({
    where: { id },
    data: resortDataFromForm(formData, slug),
  });
  revalidatePath("/partner-resorts");
  revalidatePath("/resorts");
  revalidatePath(`/resorts/${slug}`);
  redirect("/admin/partner-resorts");
}

export async function deletePartnerResort(id: number) {
  await prisma.partnerResort.delete({ where: { id } });
  revalidatePath("/partner-resorts");
  revalidatePath("/resorts");
  redirect("/admin/partner-resorts");
}

// ——— Partner brands ———

export async function createPartnerBrand(formData: FormData) {
  await prisma.partnerBrand.create({
    data: {
      name: String(formData.get("name")),
      logoUrl: formData.get("logoUrl") ? String(formData.get("logoUrl")) : null,
      initials: formData.get("initials") ? String(formData.get("initials")) : null,
      sortOrder: optionalInt(formData.get("sortOrder")) ?? 0,
      isActive: formData.get("isActive") === "on",
    },
  });
  revalidatePath("/");
  redirect("/admin/partner-brands");
}

export async function updatePartnerBrand(id: number, formData: FormData) {
  await prisma.partnerBrand.update({
    where: { id },
    data: {
      name: String(formData.get("name")),
      logoUrl: formData.get("logoUrl") ? String(formData.get("logoUrl")) : null,
      initials: formData.get("initials") ? String(formData.get("initials")) : null,
      sortOrder: optionalInt(formData.get("sortOrder")) ?? 0,
      isActive: formData.get("isActive") === "on",
    },
  });
  revalidatePath("/");
  redirect("/admin/partner-brands");
}

export async function deletePartnerBrand(id: number) {
  await prisma.partnerBrand.delete({ where: { id } });
  revalidatePath("/");
  redirect("/admin/partner-brands");
}

// ——— Shop categories ———

export async function createShopCategory(formData: FormData) {
  const name = String(formData.get("name"));
  const slug = slugify(String(formData.get("slug") || name));
  await prisma.shopCategory.create({
    data: {
      name,
      slug,
      description: formData.get("description") ? String(formData.get("description")) : null,
      image: formData.get("image") ? String(formData.get("image")) : null,
      sortOrder: optionalInt(formData.get("sortOrder")) ?? 0,
      isActive: formData.get("isActive") !== "off",
    },
  });
  revalidatePath("/shop");
  redirect("/admin/shop-categories");
}

export async function updateShopCategory(id: number, formData: FormData) {
  const name = String(formData.get("name"));
  const slug = slugify(String(formData.get("slug") || name));
  await prisma.shopCategory.update({
    where: { id },
    data: {
      name,
      slug,
      description: formData.get("description") ? String(formData.get("description")) : null,
      image: formData.get("image") ? String(formData.get("image")) : null,
      sortOrder: optionalInt(formData.get("sortOrder")) ?? 0,
      isActive: formData.get("isActive") === "on",
    },
  });
  revalidatePath("/shop");
  redirect("/admin/shop-categories");
}

export async function deleteShopCategory(id: number) {
  await prisma.shopCategory.delete({ where: { id } });
  revalidatePath("/shop");
  redirect("/admin/shop-categories");
}

// ——— Shop products ———

export async function createShopProduct(formData: FormData) {
  const name = String(formData.get("name"));
  const slug = slugify(String(formData.get("slug") || name));
  await prisma.shopProduct.create({
    data: {
      name,
      slug,
      description: String(formData.get("description")),
      price: optionalDecimal(formData.get("price")) ?? 0,
      salePrice: optionalDecimal(formData.get("salePrice")),
      sku: String(formData.get("sku")),
      stockQuantity: optionalInt(formData.get("stockQuantity")) ?? 0,
      image: formData.get("image") ? String(formData.get("image")) : null,
      categoryId: parseInt(String(formData.get("categoryId")), 10),
      brand: formData.get("brand") ? String(formData.get("brand")) : null,
      model: formData.get("model") ? String(formData.get("model")) : null,
      status: String(formData.get("status") ?? "active"),
      isFeatured: formData.get("isFeatured") === "on",
      sortOrder: optionalInt(formData.get("sortOrder")) ?? 0,
    },
  });
  revalidatePath("/shop");
  redirect("/admin/shop-products");
}

export async function updateShopProduct(id: number, formData: FormData) {
  const name = String(formData.get("name"));
  const slug = slugify(String(formData.get("slug") || name));
  await prisma.shopProduct.update({
    where: { id },
    data: {
      name,
      slug,
      description: String(formData.get("description")),
      price: optionalDecimal(formData.get("price")) ?? 0,
      salePrice: optionalDecimal(formData.get("salePrice")),
      sku: String(formData.get("sku")),
      stockQuantity: optionalInt(formData.get("stockQuantity")) ?? 0,
      image: formData.get("image") ? String(formData.get("image")) : null,
      categoryId: parseInt(String(formData.get("categoryId")), 10),
      brand: formData.get("brand") ? String(formData.get("brand")) : null,
      model: formData.get("model") ? String(formData.get("model")) : null,
      status: String(formData.get("status") ?? "active"),
      isFeatured: formData.get("isFeatured") === "on",
      sortOrder: optionalInt(formData.get("sortOrder")) ?? 0,
    },
  });
  revalidatePath("/shop");
  redirect("/admin/shop-products");
}

export async function deleteShopProduct(id: number) {
  await prisma.shopProduct.delete({ where: { id } });
  revalidatePath("/shop");
  redirect("/admin/shop-products");
}

export async function updateQuoteRequestStatus(id: number, formData: FormData) {
  await prisma.quoteRequest.update({
    where: { id },
    data: {
      status: String(formData.get("status")),
      adminNotes: formData.get("adminNotes") ? String(formData.get("adminNotes")) : null,
    },
  });
  revalidatePath("/admin/quote-requests");
  redirect(`/admin/quote-requests/${id}`);
}
