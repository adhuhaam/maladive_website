@extends('layouts.app')

@section('title', 'Equipment Shop - Maladive')

@section('content')
<section class="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Equipment Shop</h1>
        <p class="text-xl text-cyan-100 max-w-3xl mx-auto">Premium watersports equipment for your adventures</p>
    </div>
</section>

<section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        @forelse($categories as $category)
        <div class="mb-16">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ $category->name }}</h2>
            @if($category->description)
            <p class="text-gray-600 mb-6">{{ $category->description }}</p>
            @endif
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                @forelse($category->products as $product)
                <div class="bg-white rounded-xl shadow-lg p-6">
                    <h3 class="text-lg font-semibold text-gray-900">{{ $product->name }}</h3>
                    @if($product->brand)<p class="text-sm text-cyan-600">{{ $product->brand }}</p>@endif
                    <p class="text-gray-600 text-sm mt-2">{{ Str::limit($product->description, 100) }}</p>
                    <div class="mt-4 flex justify-between items-center">
                        <span class="text-xl font-bold text-gray-900">${{ number_format($product->current_price, 2) }}</span>
                        @if($product->is_featured)<span class="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Featured</span>@endif
                    </div>
                </div>
                @empty
                <p class="text-gray-500 col-span-full">No products in this category.</p>
                @endforelse
            </div>
        </div>
        @empty
        <p class="text-center text-gray-500 py-12">Shop inventory coming soon.</p>
        @endforelse
    </div>
</section>
@endsection
