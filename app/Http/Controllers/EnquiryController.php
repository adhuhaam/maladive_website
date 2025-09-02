<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EnquiryController extends Controller
{
    /**
     * Display the enquiry page.
     */
    public function index()
    {
        return view('enquiry');
    }

    /**
     * Handle enquiry form submission.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'service' => 'required|string|in:watersports,diving,excursions,equipment',
            'destination' => 'nullable|string|max:255',
            'dates' => 'nullable|string|max:255',
            'participants' => 'nullable|integer|min:1|max:100',
            'message' => 'nullable|string|max:1000',
        ]);

        // Here you would typically save to database and send email
        // For now, we'll just return a success message
        
        return back()->with('success', 'Thank you for your enquiry! We will get back to you soon with a personalized quote.');
    }
}
