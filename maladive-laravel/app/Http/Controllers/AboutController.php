<?php

namespace App\Http\Controllers;

class AboutController extends Controller
{
    /**
     * Display the about page.
     */
    public function index()
    {
        return view('about');
    }
}
