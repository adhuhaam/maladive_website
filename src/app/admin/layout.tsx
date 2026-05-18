import { AdminNav } from "@/components/admin/AdminNav";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminNav />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <span className="text-gray-700 text-sm">Signed in as {session?.username}</span>
          <LogoutButton />
        </header>
        <div className="flex-1 p-6">{children}</div>
      </div>
    </div>
  );
}
