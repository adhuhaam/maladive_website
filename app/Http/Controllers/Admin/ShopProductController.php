<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ShopCategory;
use App\Models\ShopProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ShopProductController extends Controller
{
    public function index()
    {
        $products = ShopProduct::with('category')->latest()->paginate(15);

        return view('admin.shop-products.index', compact('products'));
    }

    public function create()
    {
        $categories = ShopCategory::ordered()->get();

        return view('admin.shop-products.create', compact('categories'));
    }

    public function store(Request $request)
    {
        $validated = $this->validateProduct($request);
        $validated['slug'] = Str::slug($validated['name']);

        ShopProduct::create($validated);

        return redirect()->route('admin.shop-products.index')
            ->with('success', 'Product created successfully.');
    }

    public function edit(ShopProduct $shopProduct)
    {
        $categories = ShopCategory::ordered()->get();

        return view('admin.shop-products.edit', [
            'product' => $shopProduct,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, ShopProduct $shopProduct)
    {
        $validated = $this->validateProduct($request, $shopProduct);
        $validated['slug'] = Str::slug($validated['name']);

        $shopProduct->update($validated);

        return redirect()->route('admin.shop-products.index')
            ->with('success', 'Product updated successfully.');
    }

    public function destroy(ShopProduct $shopProduct)
    {
        $shopProduct->delete();

        return redirect()->route('admin.shop-products.index')
            ->with('success', 'Product deleted successfully.');
    }

    private function validateProduct(Request $request, ?ShopProduct $product = null): array
    {
        $skuRule = 'required|string|max:100|unique:shop_products,sku';
        if ($product) {
            $skuRule .= ','.$product->id;
        }

        return $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'sale_price' => 'nullable|numeric|min:0',
            'sku' => $skuRule,
            'stock_quantity' => 'required|integer|min:0',
            'category_id' => 'required|exists:shop_categories,id',
            'brand' => 'nullable|string|max:255',
            'model' => 'nullable|string|max:255',
            'status' => 'required|in:active,inactive,out_of_stock',
            'is_featured' => 'boolean',
            'sort_order' => 'nullable|integer|min:0',
            'admin_notes' => 'nullable|string',
        ]) + [
            'is_featured' => $request->boolean('is_featured'),
            'sort_order' => $request->input('sort_order', 0),
        ];
    }
}
