@php $product = $product ?? null; @endphp
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="md:col-span-2"><label class="block text-sm font-medium mb-1">Name *</label>
        <input name="name" value="{{ old('name', $product?->name) }}" required class="w-full border rounded-md px-3 py-2"></div>
    <div class="md:col-span-2"><label class="block text-sm font-medium mb-1">Description *</label>
        <textarea name="description" rows="3" required class="w-full border rounded-md px-3 py-2">{{ old('description', $product?->description) }}</textarea></div>
    <div><label class="block text-sm font-medium mb-1">Category *</label>
        <select name="category_id" required class="w-full border rounded-md px-3 py-2">
            @foreach($categories as $cat)<option value="{{ $cat->id }}" @selected(old('category_id', $product?->category_id) == $cat->id)>{{ $cat->name }}</option>@endforeach
        </select></div>
    <div><label class="block text-sm font-medium mb-1">SKU *</label>
        <input name="sku" value="{{ old('sku', $product?->sku) }}" required class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Price *</label>
        <input name="price" type="number" step="0.01" value="{{ old('price', $product?->price) }}" required class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Sale Price</label>
        <input name="sale_price" type="number" step="0.01" value="{{ old('sale_price', $product?->sale_price) }}" class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Stock *</label>
        <input name="stock_quantity" type="number" value="{{ old('stock_quantity', $product?->stock_quantity ?? 0) }}" required class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Status *</label>
        <select name="status" class="w-full border rounded-md px-3 py-2">
            @foreach(['active','inactive','out_of_stock'] as $s)<option value="{{ $s }}" @selected(old('status', $product?->status ?? 'active') === $s)>{{ ucfirst(str_replace('_',' ',$s)) }}</option>@endforeach
        </select></div>
    <div><label class="block text-sm font-medium mb-1">Brand</label>
        <input name="brand" value="{{ old('brand', $product?->brand) }}" class="w-full border rounded-md px-3 py-2"></div>
    <div><label class="block text-sm font-medium mb-1">Model</label>
        <input name="model" value="{{ old('model', $product?->model) }}" class="w-full border rounded-md px-3 py-2"></div>
</div>
<div class="mt-4"><label class="flex items-center"><input type="checkbox" name="is_featured" value="1" @checked(old('is_featured', $product?->is_featured)) class="mr-2"> Featured product</label></div>
