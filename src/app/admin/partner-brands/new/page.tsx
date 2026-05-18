import { createPartnerBrand } from "@/lib/admin-actions";
import { inputClass } from "@/components/admin/admin-form";

export default function NewBrandPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add Partner Brand</h1>
      <form action={createPartnerBrand} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" placeholder="Brand name" required className={inputClass} />
        <input name="initials" placeholder="Initials (e.g. W)" className={inputClass} />
        <input name="logoUrl" placeholder="Logo image URL" className={inputClass} />
        <input name="sortOrder" type="number" placeholder="Sort order" defaultValue={0} className={inputClass} />
        <label className="flex items-center gap-2 text-sm">
          <input name="isActive" type="checkbox" defaultChecked />
          Visible on homepage
        </label>
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Create
        </button>
      </form>
    </div>
  );
}
