import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage() {
  const enquiries = await prisma.enquiry.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Enquiries</h1>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Service</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e.id} className="border-t">
                <td className="px-4 py-3">{e.name}</td>
                <td className="px-4 py-3">{e.service}</td>
                <td className="px-4 py-3">{e.status}</td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/enquiries/${e.id}`} className="text-cyan-600">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
