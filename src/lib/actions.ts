"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { setSiteSettings } from "./settings";

export async function submitEnquiry(formData: FormData) {
  await prisma.enquiry.create({
    data: {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      phone: formData.get("phone") ? String(formData.get("phone")) : null,
      service: String(formData.get("service")),
      destination: formData.get("destination") ? String(formData.get("destination")) : null,
      dates: formData.get("dates") ? String(formData.get("dates")) : null,
      participants: formData.get("participants")
        ? parseInt(String(formData.get("participants")), 10)
        : null,
      message: formData.get("message") ? String(formData.get("message")) : null,
    },
  });
  redirect("/enquiry?sent=1");
}

export async function submitContact(formData: FormData) {
  await prisma.contact.create({
    data: {
      name: String(formData.get("name")),
      email: String(formData.get("email")),
      subject: String(formData.get("subject")),
      message: String(formData.get("message")),
    },
  });
  redirect("/contact?sent=1");
}

export async function subscribeNewsletter(formData: FormData) {
  const email = String(formData.get("email"));
  await prisma.newsletterSubscriber.upsert({
    where: { email },
    create: { email },
    update: {},
  });
}

export async function updateEnquiry(id: number, formData: FormData) {
  await prisma.enquiry.update({
    where: { id },
    data: {
      status: String(formData.get("status")),
      adminNotes: formData.get("adminNotes") ? String(formData.get("adminNotes")) : null,
    },
  });
  revalidatePath("/admin/enquiries");
  redirect(`/admin/enquiries/${id}`);
}

export async function updateContact(id: number, formData: FormData) {
  await prisma.contact.update({
    where: { id },
    data: {
      status: String(formData.get("status")),
      adminNotes: formData.get("adminNotes") ? String(formData.get("adminNotes")) : null,
    },
  });
  revalidatePath("/admin/contacts");
  redirect(`/admin/contacts/${id}`);
}

export async function updateSiteSettings(formData: FormData) {
  await setSiteSettings({
    site_name: String(formData.get("site_name")),
    site_tagline: String(formData.get("site_tagline") ?? ""),
    hero_title: String(formData.get("hero_title") ?? ""),
    hero_subtitle: String(formData.get("hero_subtitle") ?? ""),
    about_intro: String(formData.get("about_intro") ?? ""),
    contact_email: String(formData.get("contact_email") ?? ""),
    contact_phone: String(formData.get("contact_phone") ?? ""),
    contact_address: String(formData.get("contact_address") ?? ""),
  });
  revalidatePath("/");
  revalidatePath("/admin/settings");
  redirect("/admin/settings?saved=1");
}

export async function deleteEnquiry(id: number) {
  await prisma.enquiry.delete({ where: { id } });
  revalidatePath("/admin/enquiries");
  redirect("/admin/enquiries");
}

export async function deleteContact(id: number) {
  await prisma.contact.delete({ where: { id } });
  revalidatePath("/admin/contacts");
  redirect("/admin/contacts");
}
