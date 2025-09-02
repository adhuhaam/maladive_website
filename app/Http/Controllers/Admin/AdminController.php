<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Enquiry;
use App\Models\Contact;
use App\Models\PartnerResort;
use App\Models\ShopProduct;
use App\Models\ShopCategory;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

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
}
