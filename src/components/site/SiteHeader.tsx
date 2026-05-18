"use client";
import Link from "next/link";
import { SiteCartLink } from "./SiteCartLink";
import { SiteNavCenter } from "./SiteNavLinks";

export function SiteHeader({ settings }: { settings: Record<string, string> }) {
  return (
    <>

    {/*  Contact Info Header  */}
    <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex items-center justify-between h-10 text-sm">
                <div className="flex items-center space-x-4">
                    <span className="text-gray-600 font-bold font-overpass">FOLLOW US:</span>
                    <div className="flex items-center space-x-2">
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
                <div className="hidden md:flex items-center space-x-6 text-gray-600 font-overpass text-xs">
                    <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span className="hover:text-cyan-600 transition-colors cursor-pointer">+960 777 9131</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span className="hover:text-cyan-600 transition-colors cursor-pointer">info@malavaramaldives.com</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="hover:text-cyan-600 transition-colors cursor-pointer">H.Alimas Ge, K.Male' Maldives</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  Header  */}
    <div className="w-full bg-white relative z-30">
        {/*  Main Top Navigation  */}
        <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex items-center justify-between h-28 relative">
                {/*  Search Bar Mode - Full Width with Slower Fade  */}
                <div id="search-bar-top" className="absolute inset-0 flex items-center px-6 md:px-8 lg:px-12 bg-white transition-all duration-700 ease-in-out z-10 opacity-0 invisible transform -translate-y-3">
                    <div className="flex items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-6 h-6 text-gray-400 mr-4 flex-shrink-0">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <form className="flex-1">
                            <input type="text" id="search-input-top" className="flex rounded-md border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 font-overpass text-lg h-12" placeholder="Search..." value="" />
                        </form>
                        <button id="search-close-top" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 w-10 ml-4 text-gray-500 hover:text-gray-700 flex-shrink-0" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-6 h-6">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                {/*  Regular Navigation with Slower Fade  */}
                <div id="regular-nav-top" className="w-full flex items-center justify-between gap-4 transition-all duration-700 ease-in-out opacity-100 visible translate-y-0">
                    <div className="flex items-center shrink-0 z-20 min-w-[7rem]">
                    <Link href="/enquiry">
                        <button type="button" className="relative overflow-hidden px-6 py-3 border-2 border-[#06e6da] bg-transparent text-[#06e6da] font-bold text-xs tracking-wide transition-all duration-300 font-overpass whitespace-nowrap hover:text-white water-fill-button">
                            ENQUIRY
                        </button>
                    </Link>
                </div>
                <div className="flex-1 flex justify-center min-w-0 px-2">
                    <SiteNavCenter />
                </div>
                    <div className="flex items-center justify-end gap-1 shrink-0 z-20 min-w-[7rem]">
                        <SiteCartLink />
                        <button id="search-button-top" type="button" className="inline-flex items-center justify-center rounded-md h-10 w-10 text-gray-700 hover:text-[#06e6da] hover:bg-gray-50 transition-colors outline-none focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-5 h-5">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                                {/*  Mobile menu button  */}
                <div className="absolute right-0 lg:hidden z-20">
                    <button id="mobile-menu-button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground bg-cyan-400 hover:bg-cyan-500 text-white rounded-none w-12 h-12" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«R1pdb»" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    {/*  FLOATING NAVBAR - Appears Only When Scrolling (NO SOCIAL BAR)  */}
    <div id="floating-navbar" className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg transition-all duration-500 ease-in-out -translate-y-full opacity-0">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="flex items-center justify-between h-24 relative">
                {/*  Search Bar Mode - Full Width for Floating Nav with Slower Fade  */}
                <div id="search-bar-floating" className="absolute inset-0 flex items-center px-6 md:px-8 lg:px-12 bg-white/95 backdrop-blur-md transition-all duration-700 ease-in-out z-10 opacity-0 invisible transform -translate-y-3">
                    <div className="flex items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-6 h-6 text-gray-400 mr-4 flex-shrink-0">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <form className="flex-1">
                            <input type="text" id="search-input-floating" className="flex rounded-md border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 font-overpass text-lg h-12" placeholder="Search..." value="" />
                        </form>
                        <button id="search-close-floating" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 w-10 ml-4 text-gray-500 hover:text-gray-700 flex-shrink-0" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-6 h-6">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                {/*  Regular Floating Navigation with Slower Fade  */}
                <div id="regular-nav-floating" className="w-full flex items-center justify-between gap-4 transition-all duration-700 ease-in-out opacity-100 visible translate-y-0">
                    <div className="flex items-center shrink-0 z-20 min-w-[6rem]">
                        <Link href="/enquiry">
                            <button type="button" className="relative overflow-hidden px-3 py-2 border-2 border-[#06e6da] bg-transparent text-[#06e6da] font-bold text-xs tracking-wide transition-all duration-300 font-overpass whitespace-nowrap hover:text-white water-fill-button">
                                ENQUIRY
                            </button>
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center min-w-0 px-2">
                        <SiteNavCenter compact />
                    </div>
                    <div className="flex items-center justify-end shrink-0 z-20 min-w-[6rem]">
                        <button id="search-button-floating" type="button" className="inline-flex items-center justify-center rounded-md h-8 w-8 text-gray-700 hover:text-[#06e6da] hover:bg-gray-50 transition-colors outline-none focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-4 h-4">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                                {/*  Mobile Menu Button for Floating Nav  */}
                <div className="absolute right-0 lg:hidden z-20">
                    <button id="mobile-menu-button-floating" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground bg-cyan-400 hover:bg-cyan-500 text-white rounded-none w-8 h-8" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«Redb»" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-4 h-4">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
        
        {/*  Mobile menu  */}
        <div className="lg:hidden hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
                <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">HOME</Link>
                <Link href="/resorts" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">PARTNER RESORTS</Link>
                <Link href="/shop" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">SHOP</Link>
                <Link href="/shop/quote" className="block px-6 py-2 text-sm font-medium text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors">Quote cart</Link>
                <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">ABOUT</Link>
                <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">CONTACT</Link>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="px-3 py-2">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Services</span>
                </div>
                <Link href="/watersports" className="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">Watersports</Link>
                <Link href="/diving" className="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">Diving</Link>
                <Link href="/excursions" className="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">Excursions</Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link href="/enquiry" className="block px-3 py-2 text-base font-medium text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors">ENQUIRY</Link>
            </div>
        </div>
    </div>

    </>
  );
}
