import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteShopProduct } from "@/lib/admin-actions";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminTable, AdminTableRow, AdminTableCell } from "@/components/admin/AdminTable";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await prisma.shopProduct.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <AdminPageHeader
        title="Shop Products"
        description="Products available in the equipment shop and quote requests."
        action={{ label: "Add product", href: "/admin/shop-products/new" }}
      />

      {products.length === 0 ? (
        <p className="text-slate-400 text-sm text-center py-16 bg-white rounded-xl border">No products yet.</p>
      ) : (
        <AdminTable headers={["Product", "Category", "Price", "Stock", "Actions"]}>
          {products.map((p) => (
            <AdminTableRow key={p.id}>
              <AdminTableCell className="font-medium text-slate-900">{p.name}</AdminTableCell>
              <AdminTableCell>{p.category.name}</AdminTableCell>
              <AdminTableCell>${Number(p.price).toFixed(2)}</AdminTableCell>
              <AdminTableCell>{p.stockQuantity}</AdminTableCell>
              <AdminTableCell>
                <div className="flex gap-3">
                  <Link href={`/admin/shop-products/${p.id}/edit`} className="text-cyan-600 font-medium hover:underline">
                    Edit
                  </Link>
                  <form action={deleteShopProduct.bind(null, p.id)}>
                    <button type="submit" className="text-red-600 font-medium hover:underline">
                      Delete
                    </button>
                  </form>
                </div>
              </AdminTableCell>
            </AdminTableRow>
          ))}
        </AdminTable>
      )}
    </div>
  );
}
