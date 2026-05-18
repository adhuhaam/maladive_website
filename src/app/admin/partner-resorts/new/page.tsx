import { createPartnerResort } from "@/lib/admin-actions";

export default function NewResortPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Add Partner Resort</h1>
      <form action={createPartnerResort} className="bg-white p-6 rounded-lg shadow space-y-4">
        <input name="name" placeholder="Name" required className="w-full border rounded px-3 py-2" />
        <input name="location" placeholder="Location" required className="w-full border rounded px-3 py-2" />
        <input name="country" placeholder="Country" required className="w-full border rounded px-3 py-2" />
        <textarea name="description" placeholder="Description" required rows={4} className="w-full border rounded px-3 py-2" />
        <textarea name="activities" placeholder="Activities (one per line)" rows={3} className="w-full border rounded px-3 py-2" />
        <select name="rating" className="w-full border rounded px-3 py-2">
          {["3", "4", "5", "6"].map((r) => (
            <option key={r} value={r}>{r} stars</option>
          ))}
        </select>
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">Create</button>
      </form>
    </div>
  );
}
