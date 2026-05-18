@php $resort = $resort ?? null; @endphp
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div><label class="block text-sm font-medium mb-1">Name *</label>
        <input name="name" value="{{ old('name', $resort?->name) }}" required class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Location *</label>
        <input name="location" value="{{ old('location', $resort?->location) }}" required class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Country *</label>
        <input name="country" value="{{ old('country', $resort?->country) }}" required class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Rating *</label>
        <select name="rating" class="w-full border rounded-md px-3 py-2">
            @foreach(['3','4','5','6'] as $r)<option value="{{ $r }}" @selected(old('rating', $resort?->rating) == $r)>{{ $r }} Star</option>@endforeach
        </select></div>
    <div><label class="block text-sm font-medium mb-1">Status *</label>
        <select name="status" class="w-full border rounded-md px-3 py-2">
            @foreach(['active','inactive','pending'] as $s)<option value="{{ $s }}" @selected(old('status', $resort?->status ?? 'active') === $s)>{{ ucfirst($s) }}</option>@endforeach
        </select></div>
    <div><label class="block text-sm font-medium mb-1">Image URL</label>
        <input name="image" value="{{ old('image', $resort?->image) }}" class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Website</label>
        <input name="website" value="{{ old('website', $resort?->website) }}" class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Contact Email</label>
        <input name="contact_email" type="email" value="{{ old('contact_email', $resort?->contact_email) }}" class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Contact Phone</label>
        <input name="contact_phone" value="{{ old('contact_phone', $resort?->contact_phone) }}" class="w-full border rounded-md px-3 py-2"></div>
</div>
<div class="mt-4"><label class="block text-sm font-medium mb-1">Description *</label>
    <textarea name="description" rows="4" required class="w-full border rounded-md px-3 py-2">{{ old('description', $resort?->description) }}</textarea></div>
<div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div><label class="block text-sm font-medium mb-1">Amenities (one per line)</label>
        <textarea name="amenities" rows="4" class="w-full border rounded-md px-3 py-2">{{ old('amenities', $resort ? implode("\n", $resort->amenities ?? []) : '') }}</textarea></div>
    <div><label class="block text-sm font-medium mb-1">Activities (one per line)</label>
        <textarea name="activities" rows="4" class="w-full border rounded-md px-3 py-2">{{ old('activities', $resort ? implode("\n", $resort->activities ?? []) : '') }}</textarea></div>
</div>
<div class="mt-4"><label class="block text-sm font-medium mb-1">Admin Notes</label>
    <textarea name="admin_notes" rows="2" class="w-full border rounded-md px-3 py-2">{{ old('admin_notes', $resort?->admin_notes) }}</textarea></div>
