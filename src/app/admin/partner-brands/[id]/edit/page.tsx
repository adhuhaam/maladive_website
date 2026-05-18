import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updatePartnerBrand } from "@/lib/admin-actions";
import { inputClass } from "@/components/admin/admin-form";

export const dynamic = "force-dynamic";

export default async function EditBrandPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const brand = await prisma.partnerBrand.findUnique({ where: { id: parseInt(id, 10) } });
  if (!brand) notFound();

  const update = updatePartnerBrand.bind(null, brand.id);

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit Partner Brand</h1>
      <form action={update} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" defaultValue={brand.name} required className={inputClass} />
        <input name="initials" defaultValue={brand.initials ?? ""} className={inputClass} />
        <input name="logoUrl" defaultValue={brand.logoUrl ?? ""} className={inputClass} />
        <input name="sortOrder" type="number" defaultValue={brand.sortOrder} className={inputClass} />
        <label className="flex items-center gap-2 text-sm">
          <input name="isActive" type="checkbox" defaultChecked={brand.isActive} />
          Visible on homepage
        </label>
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Save
        </button>
      </form>
    </div>
  );
}
