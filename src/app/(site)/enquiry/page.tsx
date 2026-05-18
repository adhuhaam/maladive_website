import { submitEnquiry } from "@/lib/actions";
import { PageHero } from "@/components/PageHero";

export default function EnquiryPage() {
  return (
    <>
      <PageHero title="Make an Enquiry" subtitle="We'll get back to you with a personalized quote" />
      <section className="py-20 max-w-2xl mx-auto px-4">
        <form action={submitEnquiry} className="space-y-4 bg-white p-8 rounded-xl shadow">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input name="name" required className="w-full border rounded-lg px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input name="email" type="email" required className="w-full border rounded-lg px-4 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input name="phone" className="w-full border rounded-lg px-4 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Service *</label>
            <select name="service" required className="w-full border rounded-lg px-4 py-2">
              <option value="">Select</option>
              <option value="watersports">Watersports</option>
              <option value="diving">Diving</option>
              <option value="excursions">Excursions</option>
              <option value="equipment">Equipment</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea name="message" rows={4} className="w-full border rounded-lg px-4 py-2" />
          </div>
          <button type="submit" className="w-full bg-cyan-600 text-white py-3 rounded-lg font-bold">
            Submit Enquiry
          </button>
        </form>
      </section>
    </>
  );
}
