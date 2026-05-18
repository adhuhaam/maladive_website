<?php

namespace App\Http\Controllers;

class PartnerResortsController extends Controller
{
    /**
     * Display the partner resorts page.
     */
    public function index()
    {
        $resorts = \App\Models\PartnerResort::active()->latest()->get();

        return view('partner-resorts', compact('resorts'));
    }
}
