import { AdminNav } from "@/components/admin/AdminNav";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminNav />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Signed in</p>
            <p className="text-slate-800 font-semibold text-sm">{session?.username ?? "Admin"}</p>
          </div>
          <LogoutButton />
        </header>
        <main className="flex-1 p-6 md:p-8 max-w-6xl w-full">{children}</main>
      </div>
    </div>
  );
}
