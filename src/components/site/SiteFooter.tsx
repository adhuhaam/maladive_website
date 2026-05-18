import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter() {
  return (
    <>
{/*  Footer  */}
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves w-8 h-8 text-cyan-400">
                            <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                            <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                            <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                        </svg>
                        <span className="text-xl font-bold">MALADIVE</span>
                    </div>
                    <p className="text-gray-400 font-overpass font-light">Premium watersports experiences and equipment at the world's most beautiful resort destinations.</p>
                    <div className="flex space-x-4">
                        <Link className="text-gray-500 hover:text-cyan-600 transition-colors" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-4 h-4">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </Link>
                        <Link className="text-gray-500 hover:text-cyan-600 transition-colors" href="https://www.facebook.com/maladive.mv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-4 h-4">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </Link>
                        <Link className="text-gray-500 hover:text-cyan-600 transition-colors" href="https://www.instagram.com/maladive.mv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-4 h-4">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 font-overpass uppercase">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link className="text-gray-400 hover:text-cyan-400 transition-colors font-overpass font-light" href="/resorts">Partner Resorts</Link></li>
                        <li><Link className="text-gray-400 hover:text-cyan-400 transition-colors font-overpass font-light" href="/shop">Equipment Shop</Link></li>
                        <li><Link className="text-gray-400 hover:text-cyan-400 transition-colors font-overpass font-light" href="/about">About Us</Link></li>
                        <li><Link className="text-gray-400 hover:text-cyan-400 transition-colors font-overpass font-light" href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 font-overpass uppercase">Services</h3>
                    <ul className="space-y-2">
                        <li><span className="text-gray-400 font-overpass font-light">Jet Ski Rentals</span></li>
                        <li><span className="text-gray-400 font-overpass font-light">Kayak Tours</span></li>
                        <li><span className="text-gray-400 font-overpass font-light">Paddleboard Lessons</span></li>
                        <li><span className="text-gray-400 font-overpass font-light">Equipment Sales</span></li>
                        <li><span className="text-gray-400 font-overpass font-light">Resort Partnerships</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 font-overpass uppercase">Stay Updated</h3>
                    <p className="text-gray-400 mb-4 font-overpass font-light">Subscribe to our newsletter for the latest updates and offers.</p>
                    <NewsletterForm />
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm font-overpass font-light">© 2025 Maladive. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link className="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-overpass font-light" href="#">Privacy Policy</Link>
                        <Link className="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-overpass font-light" href="#">Terms of Service</Link>
                        <Link className="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-overpass font-light" href="#">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    
    </>
  );
}
