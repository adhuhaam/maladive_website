"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";

function lines(value: FormDataEntryValue | null): string[] {
  if (!value) return [];
  return String(value)
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function createPartnerResort(formData: FormData) {
  await prisma.partnerResort.create({
    data: {
      name: String(formData.get("name")),
      location: String(formData.get("location")),
      country: String(formData.get("country")),
      description: String(formData.get("description")),
      image: formData.get("image") ? String(formData.get("image")) : null,
      rating: String(formData.get("rating") ?? "4"),
      status: String(formData.get("status") ?? "active"),
      amenities: lines(formData.get("amenities")),
      activities: lines(formData.get("activities")),
      website: formData.get("website") ? String(formData.get("website")) : null,
      contactEmail: formData.get("contactEmail") ? String(formData.get("contactEmail")) : null,
      contactPhone: formData.get("contactPhone") ? String(formData.get("contactPhone")) : null,
    },
  });
  revalidatePath("/partner-resorts");
  redirect("/admin/partner-resorts");
}

export async function deletePartnerResort(id: number) {
  await prisma.partnerResort.delete({ where: { id } });
  revalidatePath("/partner-resorts");
  redirect("/admin/partner-resorts");
}
