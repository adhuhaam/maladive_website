@extends('admin.layouts.app')
@section('title', 'Edit Resort - Admin')
@section('content')
<div class="p-6 max-w-3xl">
    <h1 class="text-2xl font-bold mb-6">Edit Partner Resort</h1>
    @include('admin.partials.alerts')
    <form method="POST" action="{{ route('admin.partner-resorts.update', $resort) }}" class="bg-white shadow rounded-lg p-6">
        @csrf @method('PUT')
        @include('admin.partner-resorts._form', ['resort' => $resort])
        <button type="submit" class="mt-6 bg-cyan-600 text-white px-4 py-2 rounded-md text-sm">Update Resort</button>
    </form>
</div>
@endsection
