<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Maladive - Premium Watersports Experiences')</title>
    <meta name="description" content="Premium watersports experiences and equipment at the world's most beautiful resort destinations.">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link href="{{ asset('build/css/css.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    
    @stack('styles')
</head>
<body class="font-sans antialiased">
    <!-- Contact Info Header -->
    <div class="bg-gray-50 border-b border-gray-200">
        <div class="container mx-auto px-6 md:px-8 lg:px-12">
            <div class="flex items-center justify-between h-10 text-sm">
                <div class="flex items-center space-x-4">
                    <span class="text-gray-600 font-bold font-overpass">FOLLOW US:</span>
                    <div class="flex items-center space-x-2">
                        <a class="text-gray-500 hover:text-cyan-600 transition-colors" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter w-4 h-4">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a class="text-gray-500 hover:text-cyan-600 transition-colors" href="https://www.facebook.com/maladive.mv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-4 h-4">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a class="text-gray-500 hover:text-cyan-600 transition-colors" href="https://www.instagram.com/maladive.mv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-4 h-4">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="hidden md:flex items-center space-x-6 text-gray-600 font-overpass text-xs">
                    <div class="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span class="hover:text-cyan-600 transition-colors cursor-pointer">+960 777 9131</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span class="hover:text-cyan-600 transition-colors cursor-pointer">info@malavaramaldives.com</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span class="hover:text-cyan-600 transition-colors cursor-pointer">H.Alimas Ge, K.Male' Maldives</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Header -->
    <div class="w-full bg-white relative z-30">
        <!-- Main Top Navigation -->
        <div class="bg-white shadow-sm">
        <div class="container mx-auto px-6 md:px-8 lg:px-12">
            <div class="flex items-center justify-between h-28 relative">
                <!-- Search Bar Mode - Full Width with Slower Fade -->
                <div id="search-bar-top" class="absolute inset-0 flex items-center px-6 md:px-8 lg:px-12 bg-white transition-all duration-700 ease-in-out z-10 opacity-0 invisible transform -translate-y-3">
                    <div class="flex items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-6 h-6 text-gray-400 mr-4 flex-shrink-0">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <form class="flex-1">
                            <input type="text" id="search-input-top" class="flex rounded-md border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 font-overpass text-lg h-12" placeholder="Search..." value="">
                        </form>
                        <button id="search-close-top" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 w-10 ml-4 text-gray-500 hover:text-gray-700 flex-shrink-0" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Regular Navigation with Slower Fade -->
                <div id="regular-nav-top" class="w-full flex items-center justify-between transition-all duration-700 ease-in-out opacity-100 visible transform translate-y-0">
                    <!-- Left Side - Enquiry Button -->
                <div class="flex items-center min-w-0">
                    <a href="{{ route('enquiry') }}">
                        <button class="relative overflow-hidden px-6 py-3 border-2 border-[#06e6da] bg-transparent text-[#06e6da] font-bold text-xs tracking-wide transition-all duration-300 font-overpass whitespace-nowrap hover:text-white water-fill-button">
                            ENQUIRY
                        </button>
                    </a>
                </div>
                
                <!-- Logo in Center -->
                <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <a class="flex items-center" href="{{ route('home') }}">
                        <div class="relative w-24 h-20">
                            <img src="{{ asset('images/maladive-logo.png') }}" alt="Maladive Logo" class="object-contain" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent">
                        </div>
                    </a>
                </div>
                
                <!-- Left Navigation -->
                <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-full pr-16 xl:pr-20">
                    <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('home') }}">HOME</a>
                    <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('partner-resorts') }}">PARTNER RESORTS</a>
                    <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('shop') }}">SHOP</a>
                </nav>
                
                <!-- Right Navigation -->
                <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform translate-x-0 pl-16 xl:pl-20">
                    <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('about') }}">ABOUT</a>
                    <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('contact') }}">CONTACT</a>
                    <div class="relative group">
                        <button class="flex items-center text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors focus:outline-none font-overpass whitespace-nowrap">
                            SERVICES
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-4 h-4 ml-1 transition-transform group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        <div class="absolute w-56 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 overflow-hidden z-50 top-10 left-0 shadow-lg mt-2">
                            <div class="py-3">
                                <a class="relative group/item flex items-center px-6 py-3 text-sm text-gray-600 hover:text-[#06e6da] transition-all duration-300 font-normal font-overpass border-b border-gray-100 last:border-b-0 hover:bg-cyan-50/30" href="{{ route('watersports') }}">
                                    <div class="w-2 h-2 rounded-full bg-cyan-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 mr-0 group-hover/item:mr-3 transform -translate-x-2 group-hover/item:translate-x-0"></div>
                                    <span class="transform transition-all duration-300 ease-out group-hover/item:translate-x-2">Watersports</span>
                                </a>
                                <a class="relative group/item flex items-center px-6 py-3 text-sm text-gray-600 hover:text-[#06e6da] transition-all duration-300 font-normal font-overpass border-b border-gray-100 last:border-b-0 hover:bg-cyan-50/30" href="{{ route('diving') }}">
                                    <div class="w-2 h-2 rounded-full bg-cyan-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 mr-0 group-hover/item:mr-3 transform -translate-x-2 group-hover/item:translate-x-0"></div>
                                    <span class="transform transition-all duration-300 ease-out group-hover/item:translate-x-2">Diving</span>
                                </a>
                                <a class="relative group/item flex items-center px-6 py-3 text-sm text-gray-600 hover:text-[#06e6da] transition-all duration-300 font-normal font-overpass border-b border-gray-100 last:border-b-0 hover:bg-cyan-50/30" href="{{ route('excursions') }}">
                                    <div class="w-2 h-2 rounded-full bg-cyan-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 mr-0 group-hover/item:mr-3 transform -translate-x-2 group-hover/item:translate-x-0"></div>
                                    <span class="transform transition-all duration-300 ease-out group-hover/item:translate-x-2">Excursions</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                
                    <!-- Right Side - Search Button -->
                    <div class="flex items-center min-w-0">
                        <button id="search-button-top" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 w-10 text-gray-700 hover:text-[#06e6da]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-5 h-5">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Mobile menu button -->
                <div class="absolute right-0 lg:hidden z-20">
                    <button id="mobile-menu-button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground bg-cyan-400 hover:bg-cyan-500 text-white rounded-none w-12 h-12" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«R1pdb»" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-6 h-6">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- FLOATING NAVBAR - Appears Only When Scrolling (NO SOCIAL BAR) -->
    <div id="floating-navbar" class="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg transition-all duration-500 ease-in-out -translate-y-full opacity-0">
        <div class="container mx-auto px-6 md:px-8 lg:px-12">
            <div class="flex items-center justify-between h-24 relative">
                <!-- Search Bar Mode - Full Width for Floating Nav with Slower Fade -->
                <div id="search-bar-floating" class="absolute inset-0 flex items-center px-6 md:px-8 lg:px-12 bg-white/95 backdrop-blur-md transition-all duration-700 ease-in-out z-10 opacity-0 invisible transform -translate-y-3">
                    <div class="flex items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-6 h-6 text-gray-400 mr-4 flex-shrink-0">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <form class="flex-1">
                            <input type="text" id="search-input-floating" class="flex rounded-md border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full border-0 bg-transparent focus:ring-0 focus:outline-none text-gray-700 placeholder-gray-400 font-overpass text-lg h-12" placeholder="Search..." value="">
                        </form>
                        <button id="search-close-floating" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 w-10 ml-4 text-gray-500 hover:text-gray-700 flex-shrink-0" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x w-6 h-6">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Regular Floating Navigation with Slower Fade -->
                <div id="regular-nav-floating" class="w-full flex items-center justify-between transition-all duration-700 ease-in-out opacity-100 visible transform translate-y-0">
                    <!-- Left Side - Enquiry Button -->
                    <div class="flex items-center min-w-0">
                        <a href="{{ route('enquiry') }}">
                            <button class="relative overflow-hidden px-3 py-2 border-2 border-[#06e6da] bg-transparent text-[#06e6da] font-bold text-xs tracking-wide transition-all duration-300 font-overpass whitespace-nowrap hover:text-white water-fill-button">
                                ENQUIRY
                            </button>
                        </a>
                    </div>
                    
                    <!-- Center - Logo and Navigation -->
                    <!-- Absolutely Centered Logo -->
                    <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <a class="flex items-center" href="{{ route('home') }}">
                            <div class="relative w-20 h-16">
                                <img src="{{ asset('images/maladive-logo.png') }}" alt="Maladive Logo" class="object-contain" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent">
                            </div>
                        </a>
                    </div>
                    
                    <!-- Left Navigation - Positioned to avoid logo -->
                    <nav class="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform -translate-x-full pr-12 xl:pr-16">
                        <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('home') }}">HOME</a>
                        <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('partner-resorts') }}">PARTNER RESORTS</a>
                        <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('shop') }}">SHOP</a>
                    </nav>
                    
                    <!-- Right Navigation - Positioned to avoid logo -->
                    <nav class="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform translate-x-0 pl-12 xl:pl-16">
                        <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('about') }}">ABOUT</a>
                        <a class="text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors font-overpass whitespace-nowrap" href="{{ route('contact') }}">CONTACT</a>
                        <div class="relative group">
                            <button class="flex items-center text-gray-700 hover:text-[#06e6da] font-bold text-xs tracking-wide transition-colors focus:outline-none font-overpass whitespace-nowrap">
                                SERVICES
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down w-3 h-3 ml-1 transition-transform group-hover:rotate-180">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>
                            <div class="absolute w-56 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 overflow-hidden z-50 top-10 left-0 shadow-lg mt-2">
                                <div class="py-3">
                                    <a class="relative group/item flex items-center px-6 py-3 text-sm text-gray-600 hover:text-[#06e6da] transition-all duration-300 font-normal font-overpass border-b border-gray-100 last:border-b-0 hover:bg-cyan-50/30" href="{{ route('watersports') }}">
                                        <div class="w-2 h-2 rounded-full bg-cyan-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 mr-0 group-hover/item:mr-3 transform -translate-x-2 group-hover/item:translate-x-0"></div>
                                        <span class="transform transition-all duration-300 ease-out group-hover/item:translate-x-2">Watersports</span>
                                    </a>
                                    <a class="relative group/item flex items-center px-6 py-3 text-sm text-gray-600 hover:text-[#06e6da] transition-all duration-300 font-normal font-overpass border-b border-gray-100 last:border-b-0 hover:bg-cyan-50/30" href="{{ route('diving') }}">
                                        <div class="w-2 h-2 rounded-full bg-cyan-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 mr-0 group-hover/item:mr-3 transform -translate-x-2 group-hover/item:translate-x-0"></div>
                                        <span class="transform transition-all duration-300 ease-out group-hover/item:translate-x-2">Diving</span>
                                    </a>
                                    <a class="relative group/item flex items-center px-6 py-3 text-sm text-gray-600 hover:text-[#06e6da] transition-all duration-300 font-normal font-overpass border-b border-gray-100 last:border-b-0 hover:bg-cyan-50/30" href="{{ route('excursions') }}">
                                        <div class="w-2 h-2 rounded-full bg-cyan-600 opacity-0 group-hover/item:opacity-100 transition-all duration-300 mr-0 group-hover/item:mr-3 transform -translate-x-2 group-hover/item:translate-x-0"></div>
                                        <span class="transform transition-all duration-300 ease-out group-hover/item:translate-x-2">Excursions</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    
                    <!-- Right Side - Search Button -->
                    <div class="flex items-center min-w-0">
                        <button id="search-button-floating" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent text-gray-700 hover:text-[#06e6da] w-8 h-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search w-4 h-4">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Menu Button for Floating Nav -->
                <div class="absolute right-0 lg:hidden z-20">
                    <button id="mobile-menu-button-floating" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground bg-cyan-400 hover:bg-cyan-500 text-white rounded-none w-8 h-8" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«Redb»" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-4 h-4">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
        
        <!-- Mobile menu -->
        <div class="lg:hidden hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
                <a href="{{ route('home') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">HOME</a>
                <a href="{{ route('partner-resorts') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">PARTNER RESORTS</a>
                <a href="{{ route('shop') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">SHOP</a>
                <a href="{{ route('about') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">ABOUT</a>
                <a href="{{ route('contact') }}" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">CONTACT</a>
                <div class="border-t border-gray-200 my-2"></div>
                <div class="px-3 py-2">
                    <span class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Services</span>
                </div>
                <a href="{{ route('watersports') }}" class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">Watersports</a>
                <a href="{{ route('diving') }}" class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">Diving</a>
                <a href="{{ route('excursions') }}" class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-gray-50 rounded-md transition-colors">Excursions</a>
                <div class="border-t border-gray-200 my-2"></div>
                <a href="{{ route('enquiry') }}" class="block px-3 py-2 text-base font-medium text-cyan-600 hover:bg-cyan-50 rounded-md transition-colors">ENQUIRY</a>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
        <div class="container mx-auto px-6 md:px-8 lg:px-12 py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="space-y-4">
                    <div class="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves w-8 h-8 text-cyan-400">
                            <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                            <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                            <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                        </svg>
                        <span class="text-xl font-bold">MALADIVE</span>
                    </div>
                    <p class="text-gray-400 font-overpass font-light">Premium watersports experiences and equipment at the world's most beautiful resort destinations.</p>
                    <div class="flex space-x-4">
                        <a class="text-gray-500 hover:text-cyan-600 transition-colors" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter w-4 h-4">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a class="text-gray-500 hover:text-cyan-600 transition-colors" href="https://www.facebook.com/maladive.mv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook w-4 h-4">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a class="text-gray-500 hover:text-cyan-600 transition-colors" href="https://www.instagram.com/maladive.mv">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram w-4 h-4">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4 font-overpass uppercase">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a class="text-gray-400 hover:text-cyan-400 transition-colors font-overpass font-light" href="{{ route('partner-resorts') }}">Partner Resorts</a></li>
                        <li><a class="text-gray-400 hover:text-cyan-400 transition-colors font-overpass font-light" href="{{ route('shop') }}">Equipment Shop</a></li>
                        <li><a class="text-gray-400 hover:text-cyan-400 transition-colors font-overpass font-light" href="{{ route('about') }}">About Us</a></li>
                        <li><a class="text-gray-400 hover:text-cyan-400 transition-colors font-overpass font-light" href="{{ route('contact') }}">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4 font-overpass uppercase">Services</h3>
                    <ul class="space-y-2">
                        <li><span class="text-gray-400 font-overpass font-light">Jet Ski Rentals</span></li>
                        <li><span class="text-gray-400 font-overpass font-light">Kayak Tours</span></li>
                        <li><span class="text-gray-400 font-overpass font-light">Paddleboard Lessons</span></li>
                        <li><span class="text-gray-400 font-overpass font-light">Equipment Sales</span></li>
                        <li><span class="text-gray-400 font-overpass font-light">Resort Partnerships</span></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4 font-overpass uppercase">Stay Updated</h3>
                    <p class="text-gray-400 mb-4 font-overpass font-light">Subscribe to our newsletter for the latest updates and offers.</p>
                    <div class="flex space-x-2">
                        <input type="email" class="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-800 border-gray-700 text-white font-overpass" placeholder="Enter your email"/>
                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-cyan-600 text-white hover:bg-cyan-700 h-10 px-4 py-2">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-12 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <p class="text-gray-400 text-sm font-overpass font-light">© 2025 Maladive. All rights reserved.</p>
                    <div class="flex space-x-6 mt-4 md:mt-0">
                        <a class="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-overpass font-light" href="#">Privacy Policy</a>
                        <a class="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-overpass font-light" href="#">Terms of Service</a>
                        <a class="text-gray-400 hover:text-cyan-400 text-sm transition-colors font-overpass font-light" href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="{{ asset('build/js/app.js') }}"></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <script>
        // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                    
                    // Update aria-expanded attribute
                    const isExpanded = !mobileMenu.classList.contains('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', isExpanded);
                });
            }
        });

        // Floating navbar and search functionality
        document.addEventListener('DOMContentLoaded', function() {
            let scrollTimeout;
            let isScrolling = false;
            
            // Elements
            const floatingNavbar = document.getElementById('floating-navbar');
            const searchBarTop = document.getElementById('search-bar-top');
            const searchBarFloating = document.getElementById('search-bar-floating');
            const regularNavTop = document.getElementById('regular-nav-top');
            const regularNavFloating = document.getElementById('regular-nav-floating');
            const searchButtonTop = document.getElementById('search-button-top');
            const searchButtonFloating = document.getElementById('search-button-floating');
            const searchCloseTop = document.getElementById('search-close-top');
            const searchCloseFloating = document.getElementById('search-close-floating');
            const searchInputTop = document.getElementById('search-input-top');
            const searchInputFloating = document.getElementById('search-input-floating');

            // Scroll handler
            function handleScroll() {
                const scrollPosition = window.scrollY;
                
                // Set scrolling state
                isScrolling = true;
                
                // Clear existing timeout
                clearTimeout(scrollTimeout);
                
                // Hide search bars immediately when scrolling starts
                if (searchBarTop && searchBarTop.classList.contains('opacity-100')) {
                    hideSearchBar('top');
                }
                if (searchBarFloating && searchBarFloating.classList.contains('opacity-100')) {
                    hideSearchBar('floating');
                }
                
                // Show floating navbar after scrolling 300px from top
                if (scrollPosition > 300) {
                    showFloatingNavbar();
                } else {
                    hideFloatingNavbar();
                }
                
                // Reset scrolling state after scroll ends
                scrollTimeout = setTimeout(() => {
                    isScrolling = false;
                }, 150);
            }

            // Show/hide floating navbar
            function showFloatingNavbar() {
                if (floatingNavbar) {
                    floatingNavbar.classList.remove('-translate-y-full', 'opacity-0');
                    floatingNavbar.classList.add('translate-y-0', 'opacity-100');
                }
            }

            function hideFloatingNavbar() {
                if (floatingNavbar) {
                    floatingNavbar.classList.remove('translate-y-0', 'opacity-100');
                    floatingNavbar.classList.add('-translate-y-full', 'opacity-0');
                }
            }

            // Show/hide search bars
            function showSearchBar(type) {
                if (isScrolling) return;
                
                if (type === 'top') {
                    if (searchBarTop && regularNavTop) {
                        searchBarTop.classList.remove('opacity-0', 'invisible', '-translate-y-3');
                        searchBarTop.classList.add('opacity-100', 'visible', 'translate-y-0');
                        regularNavTop.classList.remove('opacity-100', 'visible', 'translate-y-0');
                        regularNavTop.classList.add('opacity-0', 'invisible', 'translate-y-3');
                        setTimeout(() => searchInputTop?.focus(), 100);
                    }
                } else if (type === 'floating') {
                    if (searchBarFloating && regularNavFloating) {
                        searchBarFloating.classList.remove('opacity-0', 'invisible', '-translate-y-3');
                        searchBarFloating.classList.add('opacity-100', 'visible', 'translate-y-0');
                        regularNavFloating.classList.remove('opacity-100', 'visible', 'translate-y-0');
                        regularNavFloating.classList.add('opacity-0', 'invisible', 'translate-y-3');
                        setTimeout(() => searchInputFloating?.focus(), 100);
                    }
                }
            }

            function hideSearchBar(type) {
                if (type === 'top') {
                    if (searchBarTop && regularNavTop) {
                        searchBarTop.classList.remove('opacity-100', 'visible', 'translate-y-0');
                        searchBarTop.classList.add('opacity-0', 'invisible', '-translate-y-3');
                        regularNavTop.classList.remove('opacity-0', 'invisible', 'translate-y-3');
                        regularNavTop.classList.add('opacity-100', 'visible', 'translate-y-0');
                        if (searchInputTop) searchInputTop.value = '';
                    }
                } else if (type === 'floating') {
                    if (searchBarFloating && regularNavFloating) {
                        searchBarFloating.classList.remove('opacity-100', 'visible', 'translate-y-0');
                        searchBarFloating.classList.add('opacity-0', 'invisible', '-translate-y-3');
                        regularNavFloating.classList.remove('opacity-0', 'invisible', 'translate-y-3');
                        regularNavFloating.classList.add('opacity-100', 'visible', 'translate-y-0');
                        if (searchInputFloating) searchInputFloating.value = '';
                    }
                }
            }

            // Event listeners
            window.addEventListener('scroll', handleScroll, { passive: true });

            if (searchButtonTop) {
                searchButtonTop.addEventListener('click', () => showSearchBar('top'));
            }
            if (searchButtonFloating) {
                searchButtonFloating.addEventListener('click', () => showSearchBar('floating'));
            }
            if (searchCloseTop) {
                searchCloseTop.addEventListener('click', () => hideSearchBar('top'));
            }
            if (searchCloseFloating) {
                searchCloseFloating.addEventListener('click', () => hideSearchBar('floating'));
            }

            // Handle search form submission
            function handleSearchSubmit(e, type) {
                e.preventDefault();
                const input = type === 'top' ? searchInputTop : searchInputFloating;
                if (input && input.value.trim()) {
                    console.log('Search query:', input.value.trim());
                    // Add search logic here
                    hideSearchBar(type);
                }
            }

            // Add form submission handlers
            const searchFormTop = searchBarTop?.querySelector('form');
            const searchFormFloating = searchBarFloating?.querySelector('form');
            
            if (searchFormTop) {
                searchFormTop.addEventListener('submit', (e) => handleSearchSubmit(e, 'top'));
            }
            if (searchFormFloating) {
                searchFormFloating.addEventListener('submit', (e) => handleSearchSubmit(e, 'floating'));
            }
        });
    </script>
    
    @stack('scripts')
</body>
</html>
