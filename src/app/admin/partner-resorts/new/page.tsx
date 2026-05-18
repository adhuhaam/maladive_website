import { createPartnerResort } from "@/lib/admin-actions";
import { inputClass } from "@/components/admin/admin-form";

export default function NewResortPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Add Partner Resort</h1>
      <form action={createPartnerResort} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" placeholder="Name" required className={inputClass} />
        <input name="slug" placeholder="Slug (optional, auto from name)" className={inputClass} />
        <input name="location" placeholder="Location" required className={inputClass} />
        <input name="country" placeholder="Country" defaultValue="Maldives" required className={inputClass} />
        <textarea name="description" placeholder="Description" required rows={4} className={inputClass} />
        <input name="image" placeholder="Hero image URL" className={inputClass} />
        <textarea name="gallery" placeholder="Gallery URLs (one per line)" rows={2} className={inputClass} />
        <div className="grid grid-cols-2 gap-4">
          <input name="priceMin" type="number" step="0.01" placeholder="Price min" className={inputClass} />
          <input name="priceMax" type="number" step="0.01" placeholder="Price max" className={inputClass} />
        </div>
        <input name="priceTier" placeholder="Price tier (e.g. Luxury)" className={inputClass} />
        <input name="reviewScore" placeholder="Review score (e.g. 9.4)" className={inputClass} />
        <input name="reviewCount" type="number" placeholder="Review count" className={inputClass} />
        <input name="partnerSince" placeholder="Partner since" className={inputClass} />
        <select name="rating" className={inputClass}>
          {["3", "4", "5", "6"].map((r) => (
            <option key={r} value={r}>
              {r} stars
            </option>
          ))}
        </select>
        <textarea name="amenities" placeholder="Amenities (one per line)" rows={2} className={inputClass} />
        <textarea name="watersportsActivities" placeholder="Watersports (one per line)" rows={2} className={inputClass} />
        <textarea name="divingActivities" placeholder="Diving (one per line)" rows={2} className={inputClass} />
        <textarea name="excursionActivities" placeholder="Excursions (one per line)" rows={2} className={inputClass} />
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">
          Create
        </button>
      </form>
    </div>
  );
}
