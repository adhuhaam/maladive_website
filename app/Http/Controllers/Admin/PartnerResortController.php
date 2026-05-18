<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PartnerResort;
use Illuminate\Http\Request;
class PartnerResortController extends Controller
{
    public function index()
    {
        $resorts = PartnerResort::latest()->paginate(15);

        return view('admin.partner-resorts.index', compact('resorts'));
    }

    public function create()
    {
        return view('admin.partner-resorts.create');
    }

    public function store(Request $request)
    {
        $validated = $this->validateResort($request);
        $validated['amenities'] = $this->parseList($request->input('amenities'));
        $validated['activities'] = $this->parseList($request->input('activities'));

        PartnerResort::create($validated);

        return redirect()->route('admin.partner-resorts.index')
            ->with('success', 'Partner resort created successfully.');
    }

    public function show(PartnerResort $partnerResort)
    {
        return view('admin.partner-resorts.show', ['resort' => $partnerResort]);
    }

    public function edit(PartnerResort $partnerResort)
    {
        return view('admin.partner-resorts.edit', ['resort' => $partnerResort]);
    }

    public function update(Request $request, PartnerResort $partnerResort)
    {
        $validated = $this->validateResort($request);
        $validated['amenities'] = $this->parseList($request->input('amenities'));
        $validated['activities'] = $this->parseList($request->input('activities'));

        $partnerResort->update($validated);

        return redirect()->route('admin.partner-resorts.index')
            ->with('success', 'Partner resort updated successfully.');
    }

    public function destroy(PartnerResort $partnerResort)
    {
        $partnerResort->delete();

        return redirect()->route('admin.partner-resorts.index')
            ->with('success', 'Partner resort deleted successfully.');
    }

    private function validateResort(Request $request): array
    {
        return $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|url|max:500',
            'rating' => 'required|in:3,4,5,6',
            'status' => 'required|in:active,inactive,pending',
            'website' => 'nullable|url|max:500',
            'contact_email' => 'nullable|email|max:255',
            'contact_phone' => 'nullable|string|max:50',
            'admin_notes' => 'nullable|string',
        ]);
    }

    private function parseList(?string $value): array
    {
        if (! $value) {
            return [];
        }

        return array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', $value))));
    }
}
