@extends('admin.layouts.app')
@section('title', 'Add Category - Admin')
@section('content')
<div class="p-6 max-w-2xl">
    <h1 class="text-2xl font-bold mb-6">Add Category</h1>
    @include('admin.partials.alerts')
    <form method="POST" action="{{ route('admin.shop-categories.store') }}" class="bg-white shadow rounded-lg p-6 space-y-4">
        @csrf
        <div><label class="block text-sm font-medium mb-1">Name *</label>
            <input name="name" value="{{ old('name') }}" required class="w-full border rounded-md px-3 py-2"></div>
        <div><label class="block text-sm font-medium mb-1">Description</label>
            <textarea name="description" rows="3" class="w-full border rounded-md px-3 py-2">{{ old('description') }}</textarea></div>
        <div><label class="flex items-center"><input type="checkbox" name="is_active" value="1" checked class="mr-2"> Active</label></div>
        <button type="submit" class="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm">Create</button>
    </form>
</div>
@endsection
