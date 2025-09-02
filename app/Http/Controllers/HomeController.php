<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Handle newsletter subscription.
     */
    public function newsletter(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255',
        ]);

        // Here you would typically save to database and send confirmation email
        // For now, we'll just return a success message
        
        return back()->with('success', 'Thank you for subscribing to our newsletter!');
    }
}
