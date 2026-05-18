import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updatePartnerResort } from "@/lib/admin-actions";
import { inputClass } from "@/components/admin/admin-form";

export const dynamic = "force-dynamic";

function linesFromJson(value: unknown): string {
  if (!value || !Array.isArray(value)) return "";
  return (value as string[]).join("\n");
}

export default async function EditResortPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const resort = await prisma.partnerResort.findUnique({ where: { id: parseInt(id, 10) } });
  if (!resort) notFound();

  const update = updatePartnerResort.bind(null, resort.id);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Edit Partner Resort</h1>
      <form action={update} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" defaultValue={resort.name} required className={inputClass} />
        <input name="slug" defaultValue={resort.slug} className={inputClass} />
        <input name="location" defaultValue={resort.location} required className={inputClass} />
        <input name="country" defaultValue={resort.country} required className={inputClass} />
        <textarea name="description" defaultValue={resort.description} required rows={4} className={inputClass} />
        <input name="image" defaultValue={resort.image ?? ""} className={inputClass} />
        <textarea name="gallery" defaultValue={linesFromJson(resort.gallery)} rows={2} className={inputClass} />
        <div className="grid grid-cols-2 gap-4">
          <input
            name="priceMin"
            type="number"
            step="0.01"
            defaultValue={resort.priceMin ? Number(resort.priceMin) : ""}
            className={inputClass}
          />
          <input
            name="priceMax"
            type="number"
            step="0.01"
            defaultValue={resort.priceMax ? Number(resort.priceMax) : ""}
            className={inputClass}
          />
        </div>
        <input name="priceTier" defaultValue={resort.priceTier ?? ""} className={inputClass} />
        <input name="reviewScore" defaultValue={resort.reviewScore ?? ""} className={inputClass} />
        <input name="reviewCount" type="number" defaultValue={resort.reviewCount ?? ""} className={inputClass} />
        <input name="partnerSince" defaultValue={resort.partnerSince ?? ""} className={inputClass} />
        <select name="rating" defaultValue={resort.rating} className={inputClass}>
          {["3", "4", "5", "6"].map((r) => (
            <option key={r} value={r}>
              {r} stars
            </option>
          ))}
        </select>
        <textarea name="amenities" defaultValue={linesFromJson(resort.amenities)} rows={2} className={inputClass} />
        <textarea
          name="watersportsActivities"
          defaultValue={linesFromJson(resort.watersportsActivities)}
          rows={2}
          className={inputClass}
        />
        <textarea name="divingActivities" defaultValue={linesFromJson(resort.divingActivities)} rows={2} className={inputClass} />
        <textarea
          name="excursionActivities"
          defaultValue={linesFromJson(resort.excursionActivities)}
          rows={2}
          className={inputClass}
        />
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Save
        </button>
      </form>
    </div>
  );
}
