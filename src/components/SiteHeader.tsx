import Link from "next/link";

const navLeft = [
  { href: "/", label: "HOME" },
  { href: "/partner-resorts", label: "PARTNER RESORTS" },
  { href: "/shop", label: "SHOP" },
];

const navRight = [
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

const services = [
  { href: "/watersports", label: "Watersports" },
  { href: "/diving", label: "Diving" },
  { href: "/excursions", label: "Excursions" },
];

export function SiteHeader({ settings }: { settings: Record<string, string> }) {
  return (
    <>
      <div className="bg-gray-50 border-b border-gray-200 text-sm">
        <div className="container mx-auto px-6 flex justify-between h-10 items-center">
          <span className="text-gray-600 font-bold">FOLLOW US</span>
          <div className="hidden md:flex gap-6 text-gray-600 text-xs">
            <span>{settings.contact_phone}</span>
            <span>{settings.contact_email}</span>
          </div>
        </div>
      </div>
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between relative">
          <Link
            href="/enquiry"
            className="px-6 py-3 border-2 border-[#06e6da] text-[#06e6da] font-bold text-xs tracking-wide hover:bg-[#06e6da] hover:text-white transition-colors"
          >
            ENQUIRY
          </Link>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-bold text-2xl text-cyan-600">
            {settings.site_name ?? "Maladive"}
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-gray-700">
            {navLeft.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[#06e6da]">
                {l.label}
              </Link>
            ))}
            {navRight.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[#06e6da]">
                {l.label}
              </Link>
            ))}
            <div className="relative group">
              <button type="button" className="hover:text-[#06e6da]">
                SERVICES ▾
              </button>
              <div className="absolute right-0 top-full hidden group-hover:block bg-white shadow-lg py-2 min-w-[180px]">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm hover:bg-cyan-50">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
