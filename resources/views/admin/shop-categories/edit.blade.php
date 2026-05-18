@extends('admin.layouts.app')
@section('title', 'Edit Category - Admin')
@section('content')
<div class="p-6 max-w-2xl">
    <h1 class="text-2xl font-bold mb-6">Edit Category</h1>
    @include('admin.partials.alerts')
    <form method="POST" action="{{ route('admin.shop-categories.update', $category) }}" class="bg-white shadow rounded-lg p-6 space-y-4">
        @csrf @method('PUT')
        <div><label class="block text-sm font-medium mb-1">Name *</label>
            <input name="name" value="{{ old('name', $category->name) }}" required class="w-full border rounded-md px-3 py-2"></div>
        <div><label class="block text-sm font-medium mb-1">Description</label>
            <textarea name="description" rows="3" class="w-full border rounded-md px-3 py-2">{{ old('description', $category->description) }}</textarea></div>
        <div><label class="flex items-center"><input type="checkbox" name="is_active" value="1" @checked(old('is_active', $category->is_active)) class="mr-2"> Active</label></div>
        <button type="submit" class="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm">Update</button>
    </form>
</div>
@endsection
