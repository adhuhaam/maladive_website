import { prisma } from "@/lib/prisma";
import { createShopProduct } from "@/lib/admin-actions";
import { inputClass } from "@/components/admin/admin-form";

export const dynamic = "force-dynamic";

export default async function NewShopProductPage() {
  const categories = await prisma.shopCategory.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add Shop Product</h1>
      <form action={createShopProduct} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" placeholder="Product name" required className={inputClass} />
        <input name="slug" placeholder="Slug (optional)" className={inputClass} />
        <textarea name="description" placeholder="Description" required rows={4} className={inputClass} />
        <input name="sku" placeholder="SKU" required className={inputClass} />
        <input name="price" type="number" step="0.01" placeholder="Price" required className={inputClass} />
        <input name="salePrice" type="number" step="0.01" placeholder="Sale price (optional)" className={inputClass} />
        <input name="stockQuantity" type="number" defaultValue={0} className={inputClass} />
        <input name="image" placeholder="Image URL" className={inputClass} />
        <input name="brand" placeholder="Brand" className={inputClass} />
        <input name="model" placeholder="Model" className={inputClass} />
        <select name="categoryId" required className={inputClass}>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select name="status" className={inputClass}>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
        </select>
        <label className="flex items-center gap-2 text-sm">
          <input name="isFeatured" type="checkbox" />
          Featured
        </label>
        <input name="sortOrder" type="number" defaultValue={0} className={inputClass} />
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Create
        </button>
      </form>
    </div>
  );
}
