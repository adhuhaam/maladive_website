@extends('admin.layouts.app')
@section('title', 'Add Resort - Admin')
@section('content')
<div class="p-6 max-w-3xl">
    <h1 class="text-2xl font-bold mb-6">Add Partner Resort</h1>
    @include('admin.partials.alerts')
    <form method="POST" action="{{ route('admin.partner-resorts.store') }}" class="bg-white shadow rounded-lg p-6">
        @csrf
        @include('admin.partner-resorts._form')
        <button type="submit" class="mt-6 bg-cyan-600 text-white px-4 py-2 rounded-md text-sm">Create Resort</button>
    </form>
</div>
@endsection
