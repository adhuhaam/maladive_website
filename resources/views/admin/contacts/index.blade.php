@extends('admin.layouts.app')
@section('title', 'Contacts - Admin')
@section('content')
<div class="p-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Contacts</h1>
        <a href="{{ route('admin.contacts.export') }}" class="text-sm bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Export CSV</a>
    </div>
    @include('admin.partials.alerts')
    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                @forelse($contacts as $contact)
                <tr>
                    <td class="px-6 py-4">
                        <div class="text-sm font-medium text-gray-900">{{ $contact->name }}</div>
                        <div class="text-sm text-gray-500">{{ $contact->email }}</div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-700">{{ Str::limit($contact->subject, 40) }}</td>
                    <td class="px-6 py-4">{!! $contact->status_badge !!}</td>
                    <td class="px-6 py-4 text-sm text-gray-500">{{ $contact->created_at->format('M j, Y') }}</td>
                    <td class="px-6 py-4 text-right text-sm space-x-2">
                        <a href="{{ route('admin.contacts.show', $contact) }}" class="text-cyan-600">View</a>
                        <a href="{{ route('admin.contacts.edit', $contact) }}" class="text-gray-600">Edit</a>
                    </td>
                </tr>
                @empty
                <tr><td colspan="5" class="px-6 py-8 text-center text-gray-500">No contacts yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>
    <div class="mt-4">{{ $contacts->links() }}</div>
</div>
@endsection
