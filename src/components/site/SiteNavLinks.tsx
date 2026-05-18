import Link from "next/link";

const navLink =
  "text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap outline-none focus:outline-none focus-visible:outline-none ring-0 focus-visible:ring-0";

export function ServicesMenu() {
  return (
    <div className="relative group">
      <button
        type="button"
        className={`flex items-center ${navLink} bg-transparent border-0 cursor-pointer p-0`}
      >
        SERVICES
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-down w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className="absolute w-56 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 top-full left-0 shadow-lg mt-2">
        <div className="py-3">
          {[
            { href: "/watersports", label: "Watersports" },
            { href: "/diving", label: "Diving" },
            { href: "/excursions", label: "Excursions" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-sm text-gray-600 hover:text-[#06e6da] transition-colors font-overpass border-b border-gray-100 last:border-b-0 hover:bg-cyan-50/30"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteNavCenter({ compact = false }: { compact?: boolean }) {
  const gap = compact ? "gap-5 xl:gap-8" : "gap-6 xl:gap-10";
  const logoSize = compact ? "w-20 h-16" : "w-24 h-20";

  return (
    <div className={`hidden lg:flex items-center justify-center ${gap} min-w-0`}>
      <nav className={`flex items-center ${gap} shrink-0`}>
        <Link href="/" className={navLink}>
          HOME
        </Link>
        <Link href="/partner-resorts" className={navLink}>
          PARTNER RESORTS
        </Link>
        <Link href="/shop" className={navLink}>
          SHOP
        </Link>
      </nav>
      <Link href="/" className="shrink-0 flex items-center" aria-label="Maladive home">
        <div className={`relative ${logoSize}`}>
          <img
            src="/images/maladive-logo.png"
            alt="Maladive Logo"
            className="object-contain w-full h-full"
          />
        </div>
      </Link>
      <nav className={`flex items-center ${gap} shrink-0`}>
        <Link href="/about" className={navLink}>
          ABOUT
        </Link>
        <Link href="/contact" className={navLink}>
          CONTACT
        </Link>
        <ServicesMenu />
      </nav>
    </div>
  );
}
