import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [enquiries, contacts, quotes, resorts, products, brands] = await Promise.all([
    prisma.enquiry.count(),
    prisma.contact.count(),
    prisma.quoteRequest.count(),
    prisma.partnerResort.count(),
    prisma.shopProduct.count(),
    prisma.partnerBrand.count(),
  ]);

  const stats = [
    { label: "Enquiries", value: enquiries, href: "/admin/enquiries" },
    { label: "Contacts", value: contacts, href: "/admin/contacts" },
    { label: "Quote Requests", value: quotes, href: "/admin/quote-requests" },
    { label: "Partner Resorts", value: resorts, href: "/admin/partner-resorts" },
    { label: "Products", value: products, href: "/admin/shop-products" },
    { label: "Brands", value: brands, href: "/admin/partner-brands" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {stats.map((s) => (
          <Link key={s.href} href={s.href} className="bg-white p-6 rounded-lg shadow hover:shadow-md">
            <p className="text-gray-500 text-sm">{s.label}</p>
            <p className="text-3xl font-bold">{s.value}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-3">
        <Link href="/admin/partner-resorts/new" className="bg-green-600 text-white px-4 py-2 rounded text-sm">
          Add Resort
        </Link>
        <Link href="/admin/settings" className="bg-gray-700 text-white px-4 py-2 rounded text-sm">
          Site Settings
        </Link>
      </div>
    </div>
  );
}
