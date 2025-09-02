@extends('layouts.app')

@section('title', 'Partner Resorts - Maladive Watersports')

@section('content')
<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Partner Resorts</h1>
        <p class="text-xl text-cyan-100 max-w-3xl mx-auto">
            Experience Maladive watersports at the world's most prestigious and beautiful resort destinations
        </p>
    </div>
</section>

<!-- Featured Resorts Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Featured Destinations</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                From the pristine waters of the Maldives to exotic locations worldwide, our partner resorts offer the perfect setting for your watersports adventure.
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Maldives Resort 1 -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Paradise Island Resort</h3>
                    <p class="text-cyan-600 font-medium mb-3">Maldives</p>
                    <p class="text-gray-600 mb-4">
                        Luxury overwater villas with direct access to crystal-clear waters perfect for watersports.
                    </p>
                    <ul class="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Jet Ski Adventures</li>
                        <li>• Scuba Diving</li>
                        <li>• Kayak Tours</li>
                        <li>• Sunset Cruises</li>
                    </ul>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">5-Star Luxury</span>
                        <a href="{{ route('enquiry') }}" class="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Bali Resort -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Bali Beach Resort</h3>
                    <p class="text-green-600 font-medium mb-3">Bali, Indonesia</p>
                    <p class="text-gray-600 mb-4">
                        Tropical paradise offering world-class watersports in the heart of Southeast Asia.
                    </p>
                    <ul class="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Surfing Lessons</li>
                        <li>• Paddleboarding</li>
                        <li>• Island Hopping</li>
                        <li>• Cultural Tours</li>
                    </ul>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">4-Star Resort</span>
                        <a href="{{ route('enquiry') }}" class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Caribbean Resort -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Caribbean Paradise</h3>
                    <p class="text-purple-600 font-medium mb-3">St. Lucia</p>
                    <p class="text-gray-600 mb-4">
                        Exotic Caribbean destination with pristine beaches and vibrant marine life.
                    </p>
                    <ul class="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Deep Sea Fishing</li>
                        <li>• Snorkeling</li>
                        <li>• Catamaran Sailing</li>
                        <li>• Beach Activities</li>
                    </ul>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">5-Star Luxury</span>
                        <a href="{{ route('enquiry') }}" class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Maldives Resort 2 -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="h-64 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Coral Reef Resort</h3>
                    <p class="text-orange-600 font-medium mb-3">Maldives</p>
                    <p class="text-gray-600 mb-4">
                        Eco-friendly resort surrounded by vibrant coral reefs and marine biodiversity.
                    </p>
                    <ul class="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Marine Conservation</li>
                        <li>• Reef Diving</li>
                        <li>• Kayak Exploration</li>
                        <li>• Wildlife Watching</li>
                    </ul>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">Eco Resort</span>
                        <a href="{{ route('enquiry') }}" class="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Thailand Resort -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="h-64 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                    <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Phuket Beach Resort</h3>
                    <p class="text-red-600 font-medium mb-3">Phuket, Thailand</p>
                    <p class="text-gray-600 mb-4">
                        Tropical paradise offering authentic Thai hospitality and world-class watersports.
                    </p>
                    <ul class="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Jet Ski Tours</li>
                        <li>• Island Excursions</li>
                        <li>• Traditional Fishing</li>
                        <li>• Cultural Experiences</li>
                    </ul>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">4-Star Resort</span>
                        <a href="{{ route('enquiry') }}" class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Seychelles Resort -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div class="h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Seychelles Island Resort</h3>
                    <p class="text-yellow-600 font-medium mb-3">Seychelles</p>
                    <p class="text-gray-600 mb-4">
                        Pristine island paradise with untouched beaches and crystal-clear waters.
                    </p>
                    <ul class="text-sm text-gray-600 mb-4 space-y-1">
                        <li>• Luxury Yacht Charters</li>
                        <li>• Deep Sea Fishing</li>
                        <li>• Island Hopping</li>
                        <li>• Private Beach Access</li>
                    </ul>
                    <div class="flex justify-between items-center">
                        <span class="text-sm text-gray-500">6-Star Luxury</span>
                        <a href="{{ route('enquiry') }}" class="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Partnership Benefits Section -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Partner With Maladive?</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive watersports solutions that enhance your resort's guest experience and revenue
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Professional Service -->
            <div class="text-center">
                <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Professional Service</h3>
                <p class="text-gray-600">
                    Certified instructors and professional staff ensure exceptional guest experiences.
                </p>
            </div>
            
            <!-- Premium Equipment -->
            <div class="text-center">
                <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Premium Equipment</h3>
                <p class="text-gray-600">
                    Top-quality, well-maintained equipment from leading international brands.
                </p>
            </div>
            
            <!-- Revenue Generation -->
            <div class="text-center">
                <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Revenue Generation</h3>
                <p class="text-gray-600">
                    Increase your resort's revenue with premium watersports activities and packages.
                </p>
            </div>
            
            <!-- Guest Satisfaction -->
            <div class="text-center">
                <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">Guest Satisfaction</h3>
                <p class="text-gray-600">
                    Enhance guest experience with exciting activities that create lasting memories.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Partnership CTA Section -->
<section class="py-20 bg-cyan-600 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">Interested in Partnership?</h2>
        <p class="text-xl text-cyan-100 mb-8">
            Join our network of premium resorts and offer your guests world-class watersports experiences.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="{{ route('contact') }}" class="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-50 transition-colors">
                Become a Partner
            </a>
            <a href="{{ route('enquiry') }}" class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                Learn More
            </a>
        </div>
    </div>
</section>
@endsection
