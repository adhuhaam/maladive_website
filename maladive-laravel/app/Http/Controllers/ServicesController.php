<?php

namespace App\Http\Controllers;

class ServicesController extends Controller
{
    /**
     * Display the services overview page.
     */
    public function index()
    {
        return view('services.index');
    }

    /**
     * Display the watersports page.
     */
    public function watersports()
    {
        return view('services.watersports');
    }

    /**
     * Display the diving page.
     */
    public function diving()
    {
        return view('services.diving');
    }

    /**
     * Display the excursions page.
     */
    public function excursions()
    {
        return view('services.excursions');
    }
}
