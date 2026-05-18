@extends('admin.layouts.app')
@section('title', 'Add Product - Admin')
@section('content')
<div class="p-6 max-w-3xl">
    <h1 class="text-2xl font-bold mb-6">Add Product</h1>
    @include('admin.partials.alerts')
    <form method="POST" action="{{ route('admin.shop-products.store') }}" class="bg-white shadow rounded-lg p-6">
        @csrf
        @include('admin.shop-products._form')
        <button type="submit" class="mt-6 bg-cyan-600 text-white px-4 py-2 rounded-md text-sm">Create Product</button>
    </form>
</div>
@endsection
