import { submitEnquiry } from "@/lib/actions";

export function EnquiryForm() {
  return (
    <form action={submitEnquiry} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your full name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your email address" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your phone number" />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
          <select id="service" name="service" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Select a service</option>
            <option value="watersports">Watersports</option>
            <option value="diving">Diving</option>
            <option value="excursions">Excursions</option>
            <option value="equipment">Equipment Sales</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <input type="text" id="destination" name="destination" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., Maldives, Bali, etc." />
        </div>
        <div>
          <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-2">Preferred Dates</label>
          <input type="text" id="dates" name="dates" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="e.g., June 15-20, 2025" />
        </div>
      </div>
      <div>
        <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-2">Number of Participants</label>
        <input type="number" id="participants" name="participants" min={1} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="How many people?" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
        <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us more about your requirements..." />
      </div>
      <div className="text-center">
        <button type="submit" className="relative overflow-hidden px-8 py-4 border-2 border-blue-600 bg-transparent text-blue-600 font-bold text-lg tracking-wide transition-all duration-300 font-overpass whitespace-nowrap hover:text-white water-fill-button">
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}
