@extends('layouts.app')

@section('title', 'Maladive - Premium Watersports Experiences')

@section('content')
<main class="animate-fadeIn">
    <main class="px-4 md:px-8 lg:px-12">
        <!-- Hero Section -->
        <section class="relative h-screen flex items-center justify-center overflow-hidden -mx-4 md:-mx-8 lg:-mx-12">
            <div class="absolute inset-0 z-0">
                <div class="w-full h-full bg-cover bg-center bg-no-repeat" style="background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1730789702936-8C9L5KNE0B6NGV4Z8J40/DSC00842.jpg?format=1500w?height=1080&width=1920')"></div>
            </div>
            <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight font-overpass uppercase">
                    Experience the Ultimate<span class="block text-cyan-600">Watersports Adventure</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    Discover thrilling watersports activities and premium equipment at the world's most beautiful resort destinations
                </p>
            </div>
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div class="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-20 bg-white -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12 relative overflow-hidden">
            <div class="absolute inset-0 opacity-15">
                <img alt="Marine pattern watermark" loading="lazy" decoding="async" class="object-contain" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/images/maladive-pattern.png"/>
            </div>
            <div class="container mx-auto relative z-10">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-overpass uppercase">Our Services</h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">From thrilling adventures to premium equipment, we provide everything you need for the perfect watersports experience</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Watersports -->
                    <div class="bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-shadow rounded-none border border-gray-200 h-80 flex flex-col">
                        <div class="space-y-1.5 p-6 flex-1 flex flex-col justify-center">
                            <div class="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors bg-cyan-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves w-8 h-8 text-white">
                                    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                                    <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                                    <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
                                </svg>
                            </div>
                            <div class="tracking-tight text-xl text-gray-900 font-overpass uppercase font-bold mb-3">Watersports</div>
                            <div class="text-gray-600 text-sm leading-relaxed">Thrilling jet skis, kayaks, paddleboards and water adventures</div>
                        </div>
                        <div class="p-0">
                            <a class="block" href="{{ route('watersports') }}">
                                <div class="water-fill-button h-12 cursor-pointer relative overflow-hidden">
                                    <span class="absolute inset-0 flex items-center justify-center z-10 text-gray-700 font-overpass font-bold uppercase text-sm transition-colors duration-500">View More</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Diving -->
                    <div class="bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-shadow rounded-none border border-gray-200 h-80 flex flex-col">
                        <div class="space-y-1.5 p-6 flex-1 flex flex-col justify-center">
                            <div class="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors bg-cyan-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-anchor w-8 h-8 text-white">
                                    <path d="M12 22V8"></path>
                                    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                                    <circle cx="12" cy="5" r="3"></circle>
                                </svg>
                            </div>
                            <div class="tracking-tight text-xl text-gray-900 font-overpass uppercase font-bold mb-3">Diving</div>
                            <div class="text-gray-600 text-sm leading-relaxed">Explore underwater worlds with scuba diving and snorkeling</div>
                        </div>
                        <div class="p-0">
                            <a class="block" href="{{ route('diving') }}">
                                <div class="water-fill-button h-12 cursor-pointer relative overflow-hidden">
                                    <span class="absolute inset-0 flex items-center justify-center z-10 text-gray-700 font-overpass font-bold uppercase text-sm transition-colors duration-500">View More</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Excursions -->
                    <div class="bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-shadow rounded-none border border-gray-200 h-80 flex flex-col">
                        <div class="space-y-1.5 p-6 flex-1 flex flex-col justify-center">
                            <div class="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors bg-cyan-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-8 h-8 text-white">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div class="tracking-tight text-xl text-gray-900 font-overpass uppercase font-bold mb-3">Excursions</div>
                            <div class="text-gray-600 text-sm leading-relaxed">Guided tours, fishing trips and cultural experiences</div>
                        </div>
                        <div class="p-0">
                            <a class="block" href="{{ route('excursions') }}">
                                <div class="water-fill-button h-12 cursor-pointer relative overflow-hidden">
                                    <span class="absolute inset-0 flex items-center justify-center z-10 text-gray-700 font-overpass font-bold uppercase text-sm transition-colors duration-500">View More</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Equipment Sales -->
                    <div class="bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-shadow rounded-none border border-gray-200 h-80 flex flex-col">
                        <div class="space-y-1.5 p-6 flex-1 flex flex-col justify-center">
                            <div class="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors bg-cyan-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart w-8 h-8 text-white">
                                    <circle cx="8" cy="21" r="1"></circle>
                                    <circle cx="19" cy="21" r="1"></circle>
                                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                                </svg>
                            </div>
                            <div class="tracking-tight text-xl text-gray-900 font-overpass uppercase font-bold mb-3">Equipment Sales</div>
                            <div class="text-gray-600 text-sm leading-relaxed">Premium watersports equipment for resorts and businesses</div>
                        </div>
                        <div class="p-0">
                            <a class="block" href="{{ route('shop') }}">
                                <div class="water-fill-button h-12 cursor-pointer relative overflow-hidden">
                                    <span class="absolute inset-0 flex items-center justify-center z-10 text-gray-700 font-overpass font-bold uppercase text-sm transition-colors duration-500">View More</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partnered Brands Section -->
        <section class="py-20 bg-gradient-to-r from-cyan-50 to-blue-50 -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12 overflow-hidden">
            <div class="container mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-overpass uppercase">Partnered Brands</h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">We collaborate with leading brands to deliver exceptional watersports experiences</p>
                </div>
                <div class="relative overflow-hidden h-32">
                    <div class="flex items-center justify-center h-full">
                        <div class="flex brand-carousel" style="width:3600px">
                            <!-- Brand logos - duplicated for seamless loop -->
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">W</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">Waydoo</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">JP</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">JP Australia</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">C</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">Connelly</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">G</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">GoPro</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">S</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">Saeko</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">M</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">Mesle</p>
                                </div>
                            </div>
                            <!-- Duplicate for seamless loop -->
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">W</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">Waydoo</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">JP</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">JP Australia</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">C</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">Connelly</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">G</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">GoPro</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">S</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">Saeko</p>
                                </div>
                            </div>
                            <div class="flex-shrink-0 w-[200px] flex items-center justify-center transition-all duration-500 transform scale-100 opacity-40">
                                <div class="text-center">
                                    <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <span class="text-gray-600 font-bold text-sm">M</span>
                                    </div>
                                    <p class="text-sm font-medium text-gray-700">Mesle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</main>
@endsection