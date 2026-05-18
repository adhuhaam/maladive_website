<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ShopCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ShopCategoryController extends Controller
{
    public function index()
    {
        $categories = ShopCategory::ordered()->paginate(15);

        return view('admin.shop-categories.index', compact('categories'));
    }

    public function create()
    {
        return view('admin.shop-categories.create');
    }

    public function store(Request $request)
    {
        $validated = $this->validateCategory($request);
        $validated['slug'] = Str::slug($validated['name']);

        ShopCategory::create($validated);

        return redirect()->route('admin.shop-categories.index')
            ->with('success', 'Category created successfully.');
    }

    public function edit(ShopCategory $shopCategory)
    {
        return view('admin.shop-categories.edit', ['category' => $shopCategory]);
    }

    public function update(Request $request, ShopCategory $shopCategory)
    {
        $validated = $this->validateCategory($request);
        $validated['slug'] = Str::slug($validated['name']);

        $shopCategory->update($validated);

        return redirect()->route('admin.shop-categories.index')
            ->with('success', 'Category updated successfully.');
    }

    public function destroy(ShopCategory $shopCategory)
    {
        $shopCategory->delete();

        return redirect()->route('admin.shop-categories.index')
            ->with('success', 'Category deleted successfully.');
    }

    private function validateCategory(Request $request): array
    {
        return $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|url|max:500',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'boolean',
        ]) + ['is_active' => $request->boolean('is_active')];
    }
}
