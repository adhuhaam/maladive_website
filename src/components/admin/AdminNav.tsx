import Link from "next/link";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/enquiries", label: "Enquiries" },
  { href: "/admin/contacts", label: "Contacts" },
  { href: "/admin/partner-resorts", label: "Partner Resorts" },
  { href: "/admin/shop-categories", label: "Shop Categories" },
  { href: "/admin/shop-products", label: "Shop Products" },
  { href: "/admin/settings", label: "Settings" },
];

export function AdminNav() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-300 min-h-screen p-4">
      <h1 className="text-white font-bold text-lg mb-8 px-2">Maladive Admin</h1>
      <nav className="space-y-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-white text-sm"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
