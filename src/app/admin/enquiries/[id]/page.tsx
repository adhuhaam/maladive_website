import { prisma } from "@/lib/prisma";
import { updateEnquiry, deleteEnquiry } from "@/lib/actions";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EnquiryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const enquiry = await prisma.enquiry.findUnique({ where: { id: parseInt(id, 10) } });
  if (!enquiry) notFound();

  const update = updateEnquiry.bind(null, enquiry.id);
  const del = deleteEnquiry.bind(null, enquiry.id);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Enquiry from {enquiry.name}</h1>
      <div className="bg-white p-6 rounded-lg shadow mb-6 space-y-2 text-sm">
        <p><strong>Email:</strong> {enquiry.email}</p>
        <p><strong>Service:</strong> {enquiry.service}</p>
        <p><strong>Message:</strong> {enquiry.message}</p>
      </div>
      <form action={update} className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select name="status" defaultValue={enquiry.status} className="w-full border rounded px-3 py-2">
            {["new", "in_progress", "completed", "cancelled"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Admin notes</label>
          <textarea name="adminNotes" defaultValue={enquiry.adminNotes ?? ""} rows={3} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">Save</button>
      </form>
      <form action={del} className="mt-4">
        <button type="submit" className="text-red-600 text-sm">Delete enquiry</button>
      </form>
    </div>
  );
}
