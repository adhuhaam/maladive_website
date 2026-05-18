@extends('admin.layouts.app')
@section('title', 'Shop Categories - Admin')
@section('content')
<div class="p-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Shop Categories</h1>
        <a href="{{ route('admin.shop-categories.create') }}" class="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm">Add Category</a>
    </div>
    @include('admin.partials.alerts')
    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50"><tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Products</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr></thead>
            <tbody class="divide-y divide-gray-200">
                @forelse($categories as $category)
                <tr>
                    <td class="px-6 py-4 font-medium">{{ $category->name }}</td>
                    <td class="px-6 py-4 text-sm">{{ $category->products()->count() }}</td>
                    <td class="px-6 py-4">{!! $category->active_status_badge !!}</td>
                    <td class="px-6 py-4 text-right text-sm space-x-2">
                        <a href="{{ route('admin.shop-categories.edit', $category) }}" class="text-cyan-600">Edit</a>
                        <form class="inline" method="POST" action="{{ route('admin.shop-categories.destroy', $category) }}" onsubmit="return confirm('Delete?')">@csrf @method('DELETE')
                            <button class="text-red-600">Delete</button>
                        </form>
                    </td>
                </tr>
                @empty
                <tr><td colspan="4" class="px-6 py-8 text-center text-gray-500">No categories yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4">{{ $categories->links() }}</div>
</div>
@endsection
