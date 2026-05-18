<?php

namespace App\Http\Controllers;

class ShopController extends Controller
{
    /**
     * Display the shop page.
     */
    public function index()
    {
        $categories = \App\Models\ShopCategory::active()->ordered()->with(['products' => fn ($q) => $q->active()->ordered()])->get();

        return view('shop', compact('categories'));
    }
}
