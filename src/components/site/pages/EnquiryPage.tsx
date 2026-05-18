import Link from "next/link";
import { EnquiryForm } from "../EnquiryForm";

export function EnquiryPage({ settings, resorts }: { settings: Record<string, string>; resorts?: unknown[] }) {
  return (
    <>
{/*  Hero Section  */}
<section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Make an Enquiry</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to start your watersports adventure? Fill out the form below and we'll get back to you with a personalized quote.
        </p>
    </div>
</section>

{/*  Enquiry Form Section  */}
<section className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
            

            <EnquiryForm />
        </div>
        
        {/*  Contact Information  */}
        <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Immediate Assistance?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                    <p className="text-blue-600 font-medium">+960 777 9131</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                    <p className="text-blue-600 font-medium">info@malavaramaldives.com</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                    <p className="text-gray-600 text-sm">H.Alimas Ge, K.Male' Maldives</p>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  );
}
