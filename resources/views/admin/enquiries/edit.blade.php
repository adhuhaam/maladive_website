@extends('admin.layouts.app')

@section('title', 'Edit Enquiry - Admin')

@section('content')
<div class="p-6 max-w-2xl">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Edit Enquiry</h1>
    @include('admin.partials.alerts')

    <form method="POST" action="{{ route('admin.enquiries.update', $enquiry) }}" class="bg-white shadow rounded-lg p-6 space-y-4">
        @csrf @method('PUT')

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select name="status" class="w-full border-gray-300 rounded-md shadow-sm">
                @foreach(['new','in_progress','completed','cancelled'] as $status)
                <option value="{{ $status }}" @selected($enquiry->status === $status)>{{ ucfirst(str_replace('_', ' ', $status)) }}</option>
                @endforeach
            </select>
        </div>

        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Admin Notes</label>
            <textarea name="admin_notes" rows="4" class="w-full border-gray-300 rounded-md shadow-sm">{{ old('admin_notes', $enquiry->admin_notes) }}</textarea>
        </div>

        <div class="flex gap-3">
            <button type="submit" class="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm hover:bg-cyan-700">Save</button>
            <a href="{{ route('admin.enquiries.show', $enquiry) }}" class="text-gray-600 px-4 py-2 text-sm">Cancel</a>
        </div>
    </form>
</div>
@endsection
