import { subscribeNewsletter } from "@/lib/actions";

export function NewsletterForm() {
  return (
    <form action={subscribeNewsletter} className="flex space-x-2">
      <input
        type="email"
        name="email"
        required
        className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-800 border-gray-700 text-white font-overpass"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-cyan-600 text-white hover:bg-cyan-700 h-10 px-4 py-2"
      >
        Subscribe
      </button>
    </form>
  );
}
