@extends('admin.layouts.app')

@section('title', 'Enquiry Details - Admin')

@section('content')
<div class="p-6 max-w-4xl">
    <div class="mb-6">
        <a href="{{ route('admin.enquiries.index') }}" class="text-sm text-cyan-600 hover:text-cyan-800">← Back to enquiries</a>
        <h1 class="text-2xl font-bold text-gray-900 mt-2">Enquiry from {{ $enquiry->name }}</h1>
    </div>

    @include('admin.partials.alerts')

    <div class="bg-white shadow rounded-lg p-6 space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><span class="text-gray-500 text-sm">Email</span><p>{{ $enquiry->email }}</p></div>
            <div><span class="text-gray-500 text-sm">Phone</span><p>{{ $enquiry->phone ?? '—' }}</p></div>
            <div><span class="text-gray-500 text-sm">Service</span><p>{{ $enquiry->service_label }}</p></div>
            <div><span class="text-gray-500 text-sm">Status</span><p>{!! $enquiry->status_badge !!}</p></div>
            <div><span class="text-gray-500 text-sm">Destination</span><p>{{ $enquiry->destination ?? '—' }}</p></div>
            <div><span class="text-gray-500 text-sm">Dates</span><p>{{ $enquiry->dates ?? '—' }}</p></div>
            <div><span class="text-gray-500 text-sm">Participants</span><p>{{ $enquiry->participants ?? '—' }}</p></div>
            <div><span class="text-gray-500 text-sm">Submitted</span><p>{{ $enquiry->created_at->format('F j, Y g:i A') }}</p></div>
        </div>
        @if($enquiry->message)
        <div>
            <span class="text-gray-500 text-sm">Message</span>
            <p class="mt-1 whitespace-pre-wrap">{{ $enquiry->message }}</p>
        </div>
        @endif
        @if($enquiry->admin_notes)
        <div>
            <span class="text-gray-500 text-sm">Admin Notes</span>
            <p class="mt-1 whitespace-pre-wrap">{{ $enquiry->admin_notes }}</p>
        </div>
        @endif
    </div>

    <div class="mt-4 flex gap-3">
        <a href="{{ route('admin.enquiries.edit', $enquiry) }}" class="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm hover:bg-cyan-700">Edit</a>
        <form method="POST" action="{{ route('admin.enquiries.destroy', $enquiry) }}" onsubmit="return confirm('Delete this enquiry?')">
            @csrf @method('DELETE')
            <button type="submit" class="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">Delete</button>
        </form>
    </div>
</div>
@endsection
