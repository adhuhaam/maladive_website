@php
    $gradients = ['from-blue-400 to-blue-600', 'from-green-400 to-green-600', 'from-purple-400 to-purple-600', 'from-cyan-400 to-cyan-600', 'from-orange-400 to-orange-600'];
    $gradient = $gradients[$loop->index % count($gradients)];
    $btnColors = ['bg-cyan-600 hover:bg-cyan-700', 'bg-green-600 hover:bg-green-700', 'bg-purple-600 hover:bg-purple-700', 'bg-cyan-600 hover:bg-cyan-700', 'bg-orange-600 hover:bg-orange-700'];
    $btnColor = $btnColors[$loop->index % count($btnColors)];
@endphp
<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div class="h-64 bg-gradient-to-br {{ $gradient }} flex items-center justify-center overflow-hidden">
        @if($resort->image)
            <img src="{{ $resort->image }}" alt="{{ $resort->name }}" class="w-full h-full object-cover">
        @else
            <svg class="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
        @endif
    </div>
    <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $resort->name }}</h3>
        <p class="text-cyan-600 font-medium mb-3">{{ $resort->location }}, {{ $resort->country }}</p>
        <p class="text-gray-600 mb-4">{{ Str::limit($resort->description, 120) }}</p>
        @if(!empty($resort->activities))
        <ul class="text-sm text-gray-600 mb-4 space-y-1">
            @foreach(array_slice($resort->activities, 0, 4) as $activity)
            <li>• {{ $activity }}</li>
            @endforeach
        </ul>
        @endif
        <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">{{ $resort->rating }}-Star</span>
            <a href="{{ route('enquiry') }}" class="{{ $btnColor }} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Book Now
            </a>
        </div>
    </div>
</div>
