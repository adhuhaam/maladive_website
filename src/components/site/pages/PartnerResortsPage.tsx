import Link from "next/link";
import { ResortCard } from "../ResortCard";
import type { PartnerResortItem } from "../types";

export function PartnerResortsPage({
  settings,
  resorts = [],
}: {
  settings: Record<string, string>;
  resorts?: PartnerResortItem[];
}) {
  return (
    <>
{/*  Hero Section  */}
<section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Partner Resorts</h1>
        <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Experience Maladive watersports at the world's most prestigious and beautiful resort destinations
        </p>
    </div>
</section>

{/*  Featured Resorts Section  */}
<section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From the pristine waters of the Maldives to exotic locations worldwide, our partner resorts offer the perfect setting for your watersports adventure.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resorts.map((resort, loop) => (
              <ResortCard key={resort.id} resort={resort} loop={loop} />
            ))}
        </div>
    </div>
</section>

{/*  Partnership Benefits Section  */}
<section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Partner With Maladive?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive watersports solutions that enhance your resort's guest experience and revenue
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/*  Professional Service  */}
            <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Service</h3>
                <p className="text-gray-600">
                    Certified instructors and professional staff ensure exceptional guest experiences.
                </p>
            </div>
            
            {/*  Premium Equipment  */}
            <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Equipment</h3>
                <p className="text-gray-600">
                    Top-quality, well-maintained equipment from leading international brands.
                </p>
            </div>
            
            {/*  Revenue Generation  */}
            <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Revenue Generation</h3>
                <p className="text-gray-600">
                    Increase your resort's revenue with premium watersports activities and packages.
                </p>
            </div>
            
            {/*  Guest Satisfaction  */}
            <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Guest Satisfaction</h3>
                <p className="text-gray-600">
                    Enhance guest experience with exciting activities that create lasting memories.
                </p>
            </div>
        </div>
    </div>
</section>

{/*  Partnership CTA Section  */}
<section className="py-20 bg-cyan-600 text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Interested in Partnership?</h2>
        <p className="text-xl text-cyan-100 mb-8">
            Join our network of premium resorts and offer your guests world-class watersports experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-50 transition-colors">
                Become a Partner
            </Link>
            <Link href="/enquiry" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                Learn More
            </Link>
        </div>
    </div>
</section>

    </>
  );
}
