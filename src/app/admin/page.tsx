import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { AdminCard } from "@/components/admin/AdminCard";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";

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
    { label: "Enquiries", value: enquiries, href: "/admin/enquiries", color: "bg-blue-500" },
    { label: "Contacts", value: contacts, href: "/admin/contacts", color: "bg-violet-500" },
    { label: "Quote Requests", value: quotes, href: "/admin/quote-requests", color: "bg-amber-500" },
    { label: "Resorts", value: resorts, href: "/admin/partner-resorts", color: "bg-cyan-500" },
    { label: "Products", value: products, href: "/admin/shop-products", color: "bg-emerald-500" },
    { label: "Brands", value: brands, href: "/admin/partner-brands", color: "bg-rose-500" },
  ];

  const quickLinks = [
    { label: "Add resort", href: "/admin/partner-resorts/new" },
    { label: "Add product", href: "/admin/shop-products/new" },
    { label: "Add brand", href: "/admin/partner-brands/new" },
    { label: "Site settings", href: "/admin/settings" },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Dashboard"
        description="Overview of your site content, shop, and customer requests."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {stats.map((s) => (
          <Link key={s.href} href={s.href} className="group">
            <AdminCard className="p-5 hover:shadow-md hover:border-cyan-200/80 transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{s.label}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-1">{s.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg ${s.color} opacity-90 group-hover:scale-105 transition-transform`} />
              </div>
            </AdminCard>
          </Link>
        ))}
      </div>

      <AdminCard className="p-6">
        <h2 className="font-semibold text-slate-900 mb-4">Quick actions</h2>
        <div className="flex flex-wrap gap-3">
          {quickLinks.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-cyan-600 hover:text-white transition-colors"
            >
              {q.label}
            </Link>
          ))}
        </div>
      </AdminCard>
    </div>
  );
}
