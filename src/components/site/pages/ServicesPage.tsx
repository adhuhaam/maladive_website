import Link from "next/link";

export function ServicesPage({ settings, resorts }: { settings: Record<string, string>; resorts?: unknown[] }) {
  return (
    <>
{/*  Hero Section  */}
<section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From thrilling adventures to premium equipment, we provide everything you need for the perfect watersports experience
        </p>
    </div>
</section>

{/*  Services Overview Section  */}
<section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/*  Watersports  */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Watersports</h3>
                <p className="text-gray-600 mb-6">
                    Experience the thrill of jet skis, kayaks, paddleboards and exciting water adventures
                </p>
                <ul className="text-left text-gray-600 mb-6 space-y-2">
                    <li>• Jet Ski Rentals</li>
                    <li>• Kayak Tours</li>
                    <li>• Paddleboard Lessons</li>
                    <li>• Water Skiing</li>
                    <li>• Wakeboarding</li>
                </ul>
                <Link href="/watersports" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                </Link>
            </div>
            
            {/*  Diving  */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Diving</h3>
                <p className="text-gray-600 mb-6">
                    Explore underwater worlds with professional scuba diving and snorkeling experiences
                </p>
                <ul className="text-left text-gray-600 mb-6 space-y-2">
                    <li>• Scuba Diving</li>
                    <li>• Snorkeling Tours</li>
                    <li>• PADI Certification</li>
                    <li>• Night Diving</li>
                    <li>• Wreck Diving</li>
                </ul>
                <Link href="/diving" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                </Link>
            </div>
            
            {/*  Excursions  */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excursions</h3>
                <p className="text-gray-600 mb-6">
                    Discover amazing destinations with guided tours, fishing trips and cultural experiences
                </p>
                <ul className="text-left text-gray-600 mb-6 space-y-2">
                    <li>• Island Hopping</li>
                    <li>• Fishing Trips</li>
                    <li>• Cultural Tours</li>
                    <li>• Sunset Cruises</li>
                    <li>• Dolphin Watching</li>
                </ul>
                <Link href="/excursions" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                </Link>
            </div>
            
            {/*  Equipment Sales  */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Equipment Sales</h3>
                <p className="text-gray-600 mb-6">
                    Premium watersports equipment for resorts, businesses and individual enthusiasts
                </p>
                <ul className="text-left text-gray-600 mb-6 space-y-2">
                    <li>• Jet Skis</li>
                    <li>• Kayaks & Paddleboards</li>
                    <li>• Diving Gear</li>
                    <li>• Safety Equipment</li>
                    <li>• Maintenance Services</li>
                </ul>
                <Link href="/shop" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Shop Now
                </Link>
            </div>
        </div>
    </div>
</section>

{/*  Why Choose Us Section  */}
<section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Maladive?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just another watersports company - we're your partners in creating unforgettable adventures
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*  Safety  */}
            <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
                <p className="text-gray-600">
                    Certified instructors, top-quality equipment, and comprehensive safety protocols ensure your adventure is both thrilling and secure.
                </p>
            </div>
            
            {/*  Experience  */}
            <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Experience</h3>
                <p className="text-gray-600">
                    Operating in the world's most beautiful destinations with local expertise and international standards.
                </p>
            </div>
            
            {/*  Quality  */}
            <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                    We partner with leading brands and maintain only the highest quality equipment for your adventures.
                </p>
            </div>
        </div>
    </div>
</section>

{/*  CTA Section  */}
<section className="py-20 bg-blue-600 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Adventure?</h2>
        <p className="text-xl text-blue-100 mb-8">
            Choose your preferred service and let us create an unforgettable experience for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Started
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
            </Link>
        </div>
    </div>
</section>

    </>
  );
}
