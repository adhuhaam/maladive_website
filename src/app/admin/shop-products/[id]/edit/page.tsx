import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateShopProduct } from "@/lib/admin-actions";
import { inputClass } from "@/components/admin/admin-form";

export const dynamic = "force-dynamic";

export default async function EditShopProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.shopProduct.findUnique({ where: { id: parseInt(id, 10) } });
  if (!product) notFound();

  const categories = await prisma.shopCategory.findMany({ orderBy: { name: "asc" } });
  const update = updateShopProduct.bind(null, product.id);

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <form action={update} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" defaultValue={product.name} required className={inputClass} />
        <input name="slug" defaultValue={product.slug} className={inputClass} />
        <textarea name="description" defaultValue={product.description} required rows={4} className={inputClass} />
        <input name="sku" defaultValue={product.sku} required className={inputClass} />
        <input name="price" type="number" step="0.01" defaultValue={Number(product.price)} required className={inputClass} />
        <input
          name="salePrice"
          type="number"
          step="0.01"
          defaultValue={product.salePrice ? Number(product.salePrice) : ""}
          className={inputClass}
        />
        <input name="stockQuantity" type="number" defaultValue={product.stockQuantity} className={inputClass} />
        <input name="image" defaultValue={product.image ?? ""} className={inputClass} />
        <input name="brand" defaultValue={product.brand ?? ""} className={inputClass} />
        <input name="model" defaultValue={product.model ?? ""} className={inputClass} />
        <select name="categoryId" defaultValue={product.categoryId} required className={inputClass}>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select name="status" defaultValue={product.status} className={inputClass}>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
        </select>
        <label className="flex items-center gap-2 text-sm">
          <input name="isFeatured" type="checkbox" defaultChecked={product.isFeatured} />
          Featured
        </label>
        <input name="sortOrder" type="number" defaultValue={product.sortOrder} className={inputClass} />
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Save
        </button>
      </form>
    </div>
  );
}
