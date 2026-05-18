import Link from "next/link";

export function WatersportsPage({ settings, resorts }: { settings: Record<string, string>; resorts?: unknown[] }) {
  return (
    <>
{/*  Hero Section  */}
<section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Watersports Adventures</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the thrill of high-speed jet skis, peaceful kayak tours, and exciting paddleboard adventures
        </p>
    </div>
</section>

{/*  Services Overview  */}
<section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*  Jet Ski Rentals  */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Jet Ski Rentals</h3>
                    <p className="text-gray-600 mb-4">
                        Feel the power and excitement of high-speed jet ski adventures across crystal-clear waters.
                    </p>
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Single & Double Seater Options</li>
                        <li>• Guided Tours Available</li>
                        <li>• Safety Equipment Included</li>
                        <li>• Professional Instruction</li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <span className="text-blue-600 font-semibold">From $150/hour</span>
                        <Link href="/enquiry" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
            
            {/*  Kayak Tours  */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5v4m8-4v4m-8 6h8"></path>
                    </svg>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Kayak Tours</h3>
                    <p className="text-gray-600 mb-4">
                        Explore hidden coves, mangrove forests, and pristine beaches with our guided kayak tours.
                    </p>
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Single & Tandem Kayaks</li>
                        <li>• Guided Nature Tours</li>
                        <li>• Sunset Paddling</li>
                        <li>• All Skill Levels Welcome</li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <span className="text-green-600 font-semibold">From $75/tour</span>
                        <Link href="/enquiry" className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
            
            {/*  Paddleboard Lessons  */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                    </svg>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Paddleboard Lessons</h3>
                    <p className="text-gray-600 mb-4">
                        Master the art of stand-up paddleboarding with our expert instructors and premium equipment.
                    </p>
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Beginner to Advanced</li>
                        <li>• Private & Group Lessons</li>
                        <li>• Equipment Provided</li>
                        <li>• Yoga on Paddleboard</li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <span className="text-purple-600 font-semibold">From $60/lesson</span>
                        <Link href="/enquiry" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
            
            {/*  Water Skiing  */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Water Skiing</h3>
                    <p className="text-gray-600 mb-4">
                        Experience the classic thrill of water skiing with professional instruction and safety support.
                    </p>
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Beginner to Expert</li>
                        <li>• Professional Boat Driver</li>
                        <li>• Safety Equipment</li>
                        <li>• Slalom & Trick Skiing</li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <span className="text-orange-600 font-semibold">From $120/session</span>
                        <Link href="/enquiry" className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
            
            {/*  Wakeboarding  */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Wakeboarding</h3>
                    <p className="text-gray-600 mb-4">
                        Master the art of wakeboarding with our expert instructors and specialized equipment.
                    </p>
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• All Skill Levels</li>
                        <li>• Professional Instruction</li>
                        <li>• Custom Wake Setup</li>
                        <li>• Safety Equipment</li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <span className="text-red-600 font-semibold">From $130/session</span>
                        <Link href="/enquiry" className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
            
            {/*  Banana Boat Rides  */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                    </svg>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Banana Boat Rides</h3>
                    <p className="text-gray-600 mb-4">
                        Fun-filled group adventures perfect for families and friends seeking excitement together.
                    </p>
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Group Activity (6-8 people)</li>
                        <li>• Family Friendly</li>
                        <li>• Safety Equipment</li>
                        <li>• Professional Driver</li>
                    </ul>
                    <div className="flex justify-between items-center">
                        <span className="text-yellow-600 font-semibold">From $80/ride</span>
                        <Link href="/enquiry" className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/*  Safety & Equipment Section  */}
<section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Equipment</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Your safety is our top priority. We maintain the highest standards in equipment quality and safety protocols.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">All equipment meets international safety standards</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Certified instructors for all activities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Comprehensive safety briefings before each activity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">Emergency response protocols in place</span>
                    </li>
                </ul>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Equipment Included</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">Life Jackets</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">Safety Equipment</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">Activity Gear</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">Expert Guidance</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/*  CTA Section  */}
<section className="py-20 bg-blue-600 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready for Your Watersports Adventure?</h2>
        <p className="text-xl text-blue-100 mb-8">
            Choose your preferred activity and let us create an unforgettable experience for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Book Your Adventure
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
