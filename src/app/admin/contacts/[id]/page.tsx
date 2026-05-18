import { prisma } from "@/lib/prisma";
import { updateContact, deleteContact } from "@/lib/actions";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ContactDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const contact = await prisma.contact.findUnique({ where: { id: parseInt(id, 10) } });
  if (!contact) notFound();

  const update = updateContact.bind(null, contact.id);
  const del = deleteContact.bind(null, contact.id);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">{contact.subject}</h1>
      <div className="bg-white p-6 rounded-lg shadow mb-6 text-sm space-y-2">
        <p><strong>From:</strong> {contact.name} ({contact.email})</p>
        <p>{contact.message}</p>
      </div>
      <form action={update} className="bg-white p-6 rounded-lg shadow space-y-4">
        <select name="status" defaultValue={contact.status} className="w-full border rounded px-3 py-2">
          {["new", "read", "replied", "closed"].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <textarea name="adminNotes" defaultValue={contact.adminNotes ?? ""} rows={3} className="w-full border rounded px-3 py-2" />
        <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded text-sm">Save</button>
      </form>
      <form action={del} className="mt-4">
        <button type="submit" className="text-red-600 text-sm">Delete</button>
      </form>
    </div>
  );
}
