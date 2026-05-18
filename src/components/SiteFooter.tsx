import Link from "next/link";

export function SiteFooter({ settings }: { settings: Record<string, string> }) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{settings.site_name}</h3>
          <p className="text-sm">{settings.site_tagline}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-cyan-400">Services</Link></li>
            <li><Link href="/partner-resorts" className="hover:text-cyan-400">Partner Resorts</Link></li>
            <li><Link href="/shop" className="hover:text-cyan-400">Shop</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">{settings.contact_email}</p>
          <p className="text-sm">{settings.contact_phone}</p>
          <p className="text-sm">{settings.contact_address}</p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-8">© {new Date().getFullYear()} {settings.site_name}</p>
    </footer>
  );
}
