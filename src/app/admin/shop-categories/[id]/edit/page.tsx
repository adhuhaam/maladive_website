import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateShopCategory } from "@/lib/admin-actions";
import { inputClass } from "@/components/admin/admin-form";

export const dynamic = "force-dynamic";

export default async function EditShopCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cat = await prisma.shopCategory.findUnique({ where: { id: parseInt(id, 10) } });
  if (!cat) notFound();

  const update = updateShopCategory.bind(null, cat.id);

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit Category</h1>
      <form action={update} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" defaultValue={cat.name} required className={inputClass} />
        <input name="slug" defaultValue={cat.slug} className={inputClass} />
        <textarea name="description" defaultValue={cat.description ?? ""} rows={3} className={inputClass} />
        <input name="image" defaultValue={cat.image ?? ""} className={inputClass} />
        <input name="sortOrder" type="number" defaultValue={cat.sortOrder} className={inputClass} />
        <label className="flex items-center gap-2 text-sm">
          <input name="isActive" type="checkbox" defaultChecked={cat.isActive} />
          Active
        </label>
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Save
        </button>
      </form>
    </div>
  );
}
