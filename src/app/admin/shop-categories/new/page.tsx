import { createShopCategory } from "@/lib/admin-actions";
import { inputClass } from "@/components/admin/admin-form";

export default function NewShopCategoryPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add Shop Category</h1>
      <form action={createShopCategory} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" placeholder="Name" required className={inputClass} />
        <input name="slug" placeholder="Slug (optional)" className={inputClass} />
        <textarea name="description" placeholder="Description" rows={3} className={inputClass} />
        <input name="image" placeholder="Image URL" className={inputClass} />
        <input name="sortOrder" type="number" defaultValue={0} className={inputClass} />
        <label className="flex items-center gap-2 text-sm">
          <input name="isActive" type="checkbox" defaultChecked />
          Active
        </label>
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Create
        </button>
      </form>
    </div>
  );
}
