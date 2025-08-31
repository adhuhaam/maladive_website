@extends('layouts.app')

@section('title', 'Maladive - Experience the Ultimate Watersports Adventure')

@section('content')
<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
    <!-- Marine pattern watermark -->
    <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div class="text-center">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Experience the Ultimate<br>
                <span class="text-blue-200">Watersports Adventure</span>
            </h1>
            <p class="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Discover thrilling watersports activities and premium equipment at the world's most beautiful resort destinations
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('enquiry') }}" class="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                    Get Started
                </a>
                <a href="{{ route('services') }}" class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    Explore Services
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                From thrilling adventures to premium equipment, we provide everything you need for the perfect watersports experience
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Watersports -->
            <div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Watersports</h3>
                <p class="text-gray-600 mb-6">
                    Thrilling jet skis, kayaks, paddleboards and water adventures
                </p>
                <a href="{{ route('watersports') }}" class="text-blue-600 font-semibold hover:text-blue-700">
                    View More →
                </a>
            </div>
            
            <!-- Diving -->
            <div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Diving</h3>
                <p class="text-gray-600 mb-6">
                    Explore underwater worlds with scuba diving and snorkeling
                </p>
                <a href="{{ route('diving') }}" class="text-blue-600 font-semibold hover:text-blue-700">
                    View More →
                </a>
            </div>
            
            <!-- Excursions -->
            <div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Excursions</h3>
                <p class="text-gray-600 mb-6">
                    Guided tours, fishing trips and cultural experiences
                </p>
                <a href="{{ route('excursions') }}" class="text-blue-600 font-semibold hover:text-blue-700">
                    View More →
                </a>
            </div>
            
            <!-- Equipment Sales -->
            <div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Equipment Sales</h3>
                <p class="text-gray-600 mb-6">
                    Premium watersports equipment for resorts and businesses
                </p>
                <a href="{{ route('shop') }}" class="text-blue-600 font-semibold hover:text-blue-700">
                    View More →
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Partner Brands Section -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Partnered Brands</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                We collaborate with leading brands to deliver exceptional watersports experiences
            </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <!-- Waydoo -->
            <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-blue-600 font-bold text-sm">W</span>
                    </div>
                    <p class="text-sm font-medium text-gray-700">Waydoo</p>
                </div>
            </div>
            
            <!-- JP Australia -->
            <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-blue-600 font-bold text-sm">JP</span>
                    </div>
                    <p class="text-sm font-medium text-gray-700">JP Australia</p>
                </div>
            </div>
            
            <!-- Connelly -->
            <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-blue-600 font-bold text-sm">C</span>
                    </div>
                    <p class="text-sm font-medium text-gray-700">Connelly</p>
                </div>
            </div>
            
            <!-- GoPro -->
            <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-blue-600 font-bold text-sm">G</span>
                    </div>
                    <p class="text-sm font-medium text-gray-700">GoPro</p>
                </div>
            </div>
            
            <!-- Saeko -->
            <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-blue-600 font-bold text-sm">S</span>
                    </div>
                    <p class="text-sm font-medium text-gray-700">Saeko</p>
                </div>
            </div>
            
            <!-- Mesle Watersports -->
            <div class="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-blue-600 font-bold text-sm">M</span>
                    </div>
                    <p class="text-sm font-medium text-gray-700">Mesle Watersports</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-blue-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Adventure?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of adventurers who have experienced the thrill of watersports with Maladive
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="{{ route('enquiry') }}" class="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Book Now
            </a>
            <a href="{{ route('contact') }}" class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
            </a>
        </div>
    </div>
</section>
@endsection
