import { submitContact } from "@/lib/actions";
import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="Get in touch with our team" />
      <section className="py-20 max-w-2xl mx-auto px-4">
        <form action={submitContact} className="space-y-4 bg-white p-8 rounded-xl shadow">
          <div>
            <label className="block text-sm font-medium mb-1">Name *</label>
            <input name="name" required className="w-full border rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input name="email" type="email" required className="w-full border rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject *</label>
            <input name="subject" required className="w-full border rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea name="message" required rows={5} className="w-full border rounded-lg px-4 py-2" />
          </div>
          <button type="submit" className="w-full bg-cyan-600 text-white py-3 rounded-lg font-bold hover:bg-cyan-700">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
