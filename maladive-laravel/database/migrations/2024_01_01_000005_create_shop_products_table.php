<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shop_products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description');
            $table->decimal('price', 10, 2);
            $table->decimal('sale_price', 10, 2)->nullable();
            $table->string('sku')->unique();
            $table->integer('stock_quantity')->default(0);
            $table->foreignId('category_id')->constrained('shop_categories')->onDelete('cascade');
            $table->json('images')->nullable();
            $table->json('specifications')->nullable();
            $table->string('brand')->nullable();
            $table->string('model')->nullable();
            $table->enum('status', ['active', 'inactive', 'out_of_stock'])->default('active');
            $table->boolean('is_featured')->default(false);
            $table->integer('sort_order')->default(0);
            $table->text('admin_notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_products');
    }
};
