@extends('admin.layouts.app')
@section('title', 'Edit Contact - Admin')
@section('content')
<div class="p-6 max-w-2xl">
    <h1 class="text-2xl font-bold mb-6">Edit Contact</h1>
    @include('admin.partials.alerts')
    <form method="POST" action="{{ route('admin.contacts.update', $contact) }}" class="bg-white shadow rounded-lg p-6 space-y-4">
        @csrf @method('PUT')
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select name="status" class="w-full border rounded-md px-3 py-2">
                @foreach(['new','read','replied','closed'] as $s)
                <option value="{{ $s }}" @selected($contact->status === $s)>{{ ucfirst($s) }}</option>
                @endforeach
            </select>
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Admin Notes</label>
            <textarea name="admin_notes" rows="4" class="w-full border rounded-md px-3 py-2">{{ old('admin_notes', $contact->admin_notes) }}</textarea>
        </div>
        <button type="submit" class="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm">Save</button>
    </form>
</div>
@endsection
