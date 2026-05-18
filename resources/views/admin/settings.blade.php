@extends('admin.layouts.app')
@section('title', 'Site Settings - Admin')
@section('content')
<div class="p-6 max-w-3xl">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">Site Settings</h1>
    <p class="text-gray-600 mb-6">Manage your website content from here.</p>
    @include('admin.partials.alerts')

    <form method="POST" action="{{ route('admin.settings.update') }}" class="bg-white shadow rounded-lg p-6 space-y-4">
        @csrf
        <div><label class="block text-sm font-medium text-gray-700 mb-1">Site Name *</label>
            <input name="site_name" value="{{ old('site_name', $settings['site_name'] ?? 'Maladive') }}" required class="w-full border rounded-md px-3 py-2"></div>
        <div><label class="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
            <input name="site_tagline" value="{{ old('site_tagline', $settings['site_tagline'] ?? '') }}" class="w-full border rounded-md px-3 py-2"></div>
        <div><label class="block text-sm font-medium text-gray-700 mb-1">Hero Title</label>
            <input name="hero_title" value="{{ old('hero_title', $settings['hero_title'] ?? '') }}" class="w-full border rounded-md px-3 py-2"></div>
        <div><label class="block text-sm font-medium text-gray-700 mb-1">Hero Subtitle</label>
            <textarea name="hero_subtitle" rows="2" class="w-full border rounded-md px-3 py-2">{{ old('hero_subtitle', $settings['hero_subtitle'] ?? '') }}</textarea></div>
        <div><label class="block text-sm font-medium text-gray-700 mb-1">About Intro</label>
            <textarea name="about_intro" rows="4" class="w-full border rounded-md px-3 py-2">{{ old('about_intro', $settings['about_intro'] ?? '') }}</textarea></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label class="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                <input name="contact_email" type="email" value="{{ old('contact_email', $settings['contact_email'] ?? '') }}" class="w-full border rounded-md px-3 py-2"></div>
            <div><label class="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                <input name="contact_phone" value="{{ old('contact_phone', $settings['contact_phone'] ?? '') }}" class="w-full border rounded-md px-3 py-2"></div>
        </div>
        <div><label class="block text-sm font-medium text-gray-700 mb-1">Contact Address</label>
            <textarea name="contact_address" rows="2" class="w-full border rounded-md px-3 py-2">{{ old('contact_address', $settings['contact_address'] ?? '') }}</textarea></div>
        <button type="submit" class="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm hover:bg-cyan-700">Save Settings</button>
    </form>
</div>
@endsection
