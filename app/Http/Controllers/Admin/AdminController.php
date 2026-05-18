<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Enquiry;
use App\Models\Contact;
use App\Models\PartnerResort;
use App\Models\ShopProduct;
use App\Models\SiteSetting;

class AdminController extends Controller
{
    public function dashboard()
    {
        $stats = [
            'total_enquiries' => Enquiry::count(),
            'new_enquiries' => Enquiry::where('status', 'new')->count(),
            'total_contacts' => Contact::count(),
            'new_contacts' => Contact::where('status', 'new')->count(),
            'total_resorts' => PartnerResort::count(),
            'active_resorts' => PartnerResort::where('status', 'active')->count(),
            'total_products' => ShopProduct::count(),
            'active_products' => ShopProduct::where('status', 'active')->count(),
        ];

        $recent_enquiries = Enquiry::latest()->take(5)->get();
        $recent_contacts = Contact::latest()->take(5)->get();

        return view('admin.dashboard', compact('stats', 'recent_enquiries', 'recent_contacts'));
    }

    public function settings()
    {
        $settings = SiteSetting::allKeyed();

        return view('admin.settings', compact('settings'));
    }

    public function updateSettings(Request $request)
    {
        $validated = $request->validate([
            'site_name' => 'required|string|max:255',
            'site_tagline' => 'nullable|string|max:500',
            'hero_title' => 'nullable|string|max:255',
            'hero_subtitle' => 'nullable|string|max:1000',
            'contact_email' => 'nullable|email|max:255',
            'contact_phone' => 'nullable|string|max:50',
            'contact_address' => 'nullable|string|max:500',
            'about_intro' => 'nullable|string|max:5000',
        ]);

        SiteSetting::setMany($validated);

        return redirect()->route('admin.settings')
            ->with('success', 'Site settings updated successfully.');
    }
}
