@extends('admin.layouts.app')
@section('title', 'Contact Details - Admin')
@section('content')
<div class="p-6 max-w-4xl">
    <a href="{{ route('admin.contacts.index') }}" class="text-sm text-cyan-600">← Back</a>
    <h1 class="text-2xl font-bold mt-2 mb-6">{{ $contact->subject }}</h1>
    @include('admin.partials.alerts')
    <div class="bg-white shadow rounded-lg p-6 space-y-4">
        <p><span class="text-gray-500 text-sm">From</span><br>{{ $contact->name }} &lt;{{ $contact->email }}&gt;</p>
        <p><span class="text-gray-500 text-sm">Status</span><br>{!! $contact->status_badge !!}</p>
        <p><span class="text-gray-500 text-sm">Message</span><br class="whitespace-pre-wrap">{{ $contact->message }}</p>
        @if($contact->admin_notes)<p><span class="text-gray-500 text-sm">Admin Notes</span><br>{{ $contact->admin_notes }}</p>@endif
    </div>
    <div class="mt-4 flex gap-3">
        <a href="{{ route('admin.contacts.edit', $contact) }}" class="bg-cyan-600 text-white px-4 py-2 rounded-md text-sm">Edit</a>
        <form method="POST" action="{{ route('admin.contacts.destroy', $contact) }}" onsubmit="return confirm('Delete?')">@csrf @method('DELETE')
            <button class="bg-red-600 text-white px-4 py-2 rounded-md text-sm">Delete</button>
        </form>
    </div>
</div>
@endsection
