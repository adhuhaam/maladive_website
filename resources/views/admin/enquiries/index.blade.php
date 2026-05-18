@extends('admin.layouts.app')

@section('title', 'Enquiries - Admin')

@section('content')
<div class="p-6">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Enquiries</h1>
        <a href="{{ route('admin.enquiries.export') }}" class="text-sm bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Export CSV</a>
    </div>

    @include('admin.partials.alerts')

    <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                @forelse($enquiries as $enquiry)
                <tr>
                    <td class="px-6 py-4">
                        <div class="text-sm font-medium text-gray-900">{{ $enquiry->name }}</div>
                        <div class="text-sm text-gray-500">{{ $enquiry->email }}</div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-700">{{ $enquiry->service_label }}</td>
                    <td class="px-6 py-4">{!! $enquiry->status_badge !!}</td>
                    <td class="px-6 py-4 text-sm text-gray-500">{{ $enquiry->created_at->format('M j, Y') }}</td>
                    <td class="px-6 py-4 text-right text-sm space-x-2">
                        <a href="{{ route('admin.enquiries.show', $enquiry) }}" class="text-cyan-600 hover:text-cyan-800">View</a>
                        <a href="{{ route('admin.enquiries.edit', $enquiry) }}" class="text-gray-600 hover:text-gray-800">Edit</a>
                    </td>
                </tr>
                @empty
                <tr><td colspan="5" class="px-6 py-8 text-center text-gray-500">No enquiries yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div class="mt-4">{{ $enquiries->links() }}</div>
</div>
@endsection
