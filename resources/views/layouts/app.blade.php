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
    <header class="bg-white shadow-sm">
        <div class="container mx-auto px-6 md:px-8 lg:px-12">
            <div class="flex items-center justify-between h-20">
                <!-- Logo -->
                <div class="flex items-center">
                    <a class="flex items-center" href="{{ route('home') }}">
                        <div class="text-2xl font-bold text-gray-900 font-overpass">MALADIVE</div>
                    </a>
                </div>
                
                <!-- Navigation -->
                <nav class="hidden lg:flex items-center space-x-8">
                    <a class="text-gray-700 hover:text-cyan-600 font-bold text-sm tracking-wide transition-colors font-overpass" href="{{ route('home') }}">HOME</a>
                    <a class="text-gray-700 hover:text-cyan-600 font-bold text-sm tracking-wide transition-colors font-overpass" href="{{ route('partner-resorts') }}">PARTNER RESORTS</a>
                    <a class="text-gray-700 hover:text-cyan-600 font-bold text-sm tracking-wide transition-colors font-overpass" href="{{ route('shop') }}">SHOP</a>
                    <a class="text-gray-700 hover:text-cyan-600 font-bold text-sm tracking-wide transition-colors font-overpass" href="{{ route('about') }}">ABOUT</a>
                    <a class="text-gray-700 hover:text-cyan-600 font-bold text-sm tracking-wide transition-colors font-overpass" href="{{ route('contact') }}">CONTACT</a>
                    <div class="relative group">
                        <button class="flex items-center text-gray-700 hover:text-cyan-600 font-bold text-sm tracking-wide transition-colors focus:outline-none font-overpass">
                            SERVICES
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1 transition-transform group-hover:rotate-180">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        <div class="absolute w-48 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 overflow-hidden z-50 top-8 left-0 shadow-lg mt-2">
                            <div class="py-2">
                                <a class="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors font-overpass hover:bg-cyan-50" href="{{ route('watersports') }}">Watersports</a>
                                <a class="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors font-overpass hover:bg-cyan-50" href="{{ route('diving') }}">Diving</a>
                                <a class="block px-4 py-2 text-sm text-gray-600 hover:text-cyan-600 transition-colors font-overpass hover:bg-cyan-50" href="{{ route('excursions') }}">Excursions</a>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <!-- ENQUIRY Button -->
                <div class="flex items-center">
                    <a href="{{ route('enquiry') }}">
                        <button class="relative overflow-hidden px-6 py-3 border-2 border-cyan-600 bg-transparent text-cyan-600 font-bold text-xs tracking-wide transition-all duration-300 font-overpass whitespace-nowrap hover:text-white water-fill-button">
                            ENQUIRY
                        </button>
                    </a>
                </div>
                
                <!-- Mobile menu button -->
                <div class="lg:hidden">
                    <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500" type="button" aria-controls="mobile-menu" aria-expanded="false">
                        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
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
    </script>
    
    @stack('scripts')
</body>
</html>
