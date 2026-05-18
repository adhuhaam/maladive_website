import { subscribeNewsletter } from "@/lib/actions";

export function NewsletterForm() {
  return (
    <form action={subscribeNewsletter} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        name="email"
        required
        className="flex h-11 w-full border border-gray-600 px-3 py-2 text-sm bg-gray-800 text-white font-overpass placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#06e6da] min-w-0"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="relative overflow-hidden shrink-0 px-6 h-11 border-2 border-[#06e6da] bg-transparent text-[#06e6da] font-bold text-xs uppercase tracking-wide font-overpass water-fill-button"
      >
        <span className="relative z-10 transition-colors duration-500">Subscribe</span>
      </button>
    </form>
  );
}
