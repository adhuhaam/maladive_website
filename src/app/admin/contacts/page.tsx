import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminContactsPage() {
  const contacts = await prisma.contact.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Contacts</h1>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="px-4 py-3">{c.name}</td>
                <td className="px-4 py-3">{c.subject}</td>
                <td className="px-4 py-3">{c.status}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/contacts/${c.id}`} className="text-cyan-600">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
