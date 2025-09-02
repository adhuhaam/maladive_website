@extends('layouts.app')

@section('title', 'About Us - Maladive Watersports')

@section('content')
<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Maladive</h1>
        <p class="text-xl text-cyan-100 max-w-3xl mx-auto">
            Leading the way in premium watersports experiences across the world's most beautiful destinations
        </p>
    </div>
</section>

<!-- Company Story Section -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p class="text-lg text-gray-600 mb-6">
                    Founded in the heart of the Maldives, Maladive has been at the forefront of watersports innovation and adventure tourism for over a decade. What started as a small local operation has grown into a global leader in premium watersports experiences.
                </p>
                <p class="text-lg text-gray-600 mb-6">
                    Our mission is simple: to provide unforgettable watersports adventures while maintaining the highest standards of safety, quality, and environmental responsibility. We believe that everyone deserves to experience the thrill of the ocean in the most beautiful destinations on Earth.
                </p>
                <p class="text-lg text-gray-600">
                    Today, we operate in partnership with the world's most prestigious resorts, offering everything from jet ski adventures to deep-sea diving expeditions, all while preserving the natural beauty of our marine environments.
                </p>
            </div>
            
            <div class="bg-gray-200 rounded-xl p-8 text-center">
                <div class="w-32 h-32 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-16 h-16 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">10+ Years</h3>
                <p class="text-gray-600">Of excellence in watersports</p>
            </div>
        </div>
    </div>
</section>

<!-- Values Section -->
<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and every experience we create
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Safety First -->
            <div class="bg-white rounded-xl shadow-lg p-8 text-center">
                <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Safety First</h3>
                <p class="text-gray-600">
                    Every adventure is designed with your safety as our top priority. We maintain the highest safety standards and use only certified equipment.
                </p>
            </div>
            
            <!-- Environmental Responsibility -->
            <div class="bg-white rounded-xl shadow-lg p-8 text-center">
                <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Environmental Responsibility</h3>
                <p class="text-gray-600">
                    We're committed to preserving the marine environments we operate in through sustainable practices and eco-friendly initiatives.
                </p>
            </div>
            
            <!-- Excellence -->
            <div class="bg-white rounded-xl shadow-lg p-8 text-center">
                <div class="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg class="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                <p class="text-gray-600">
                    We strive for excellence in every aspect of our service, from equipment quality to customer experience and adventure planning.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Team Section -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the passionate professionals who make every adventure possible
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Team Member 1 -->
            <div class="text-center">
                <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Ahmed Hassan</h3>
                <p class="text-cyan-600 font-medium">Founder & CEO</p>
                <p class="text-gray-600 text-sm mt-2">15+ years in watersports industry</p>
            </div>
            
            <!-- Team Member 2 -->
            <div class="text-center">
                <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
                <p class="text-cyan-600 font-medium">Operations Director</p>
                <p class="text-gray-600 text-sm mt-2">Expert in adventure tourism</p>
            </div>
            
            <!-- Team Member 3 -->
            <div class="text-center">
                <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Mohammed Ali</h3>
                <p class="text-cyan-600 font-medium">Safety Manager</p>
                <p class="text-gray-600 text-sm mt-2">Certified safety instructor</p>
            </div>
            
            <!-- Team Member 4 -->
            <div class="text-center">
                <div class="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Lisa Chen</h3>
                <p class="text-cyan-600 font-medium">Customer Experience</p>
                <p class="text-gray-600 text-sm mt-2">Dedicated to guest satisfaction</p>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="py-20 bg-cyan-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
                <div class="text-4xl font-bold mb-2">10+</div>
                <p class="text-cyan-100">Years of Experience</p>
            </div>
            <div>
                <div class="text-4xl font-bold mb-2">50+</div>
                <p class="text-cyan-100">Partner Resorts</p>
            </div>
            <div>
                <div class="text-4xl font-bold mb-2">10,000+</div>
                <p class="text-cyan-100">Happy Customers</p>
            </div>
            <div>
                <div class="text-4xl font-bold mb-2">100%</div>
                <p class="text-cyan-100">Safety Record</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Ready to Join the Adventure?</h2>
        <p class="text-xl text-gray-600 mb-8">
            Experience the thrill of watersports with a company that puts your safety and satisfaction first.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="{{ route('enquiry') }}" class="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors">
                Start Your Adventure
            </a>
            <a href="{{ route('contact') }}" class="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 hover:text-white transition-colors">
                Get in Touch
            </a>
        </div>
    </div>
</section>
@endsection
