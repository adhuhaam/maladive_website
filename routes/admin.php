<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\EnquiryController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\PartnerResortController;
use App\Http\Controllers\Admin\ShopCategoryController;
use App\Http\Controllers\Admin\ShopProductController;

Route::prefix('admin')->name('admin.')->middleware(['auth'])->group(function () {
    
    // Dashboard
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    
    // Enquiries
    Route::resource('enquiries', EnquiryController::class)->except(['create', 'store']);
    Route::get('enquiries/export', [EnquiryController::class, 'export'])->name('enquiries.export');
    
    // Contacts
    Route::resource('contacts', ContactController::class)->except(['create', 'store']);
    Route::get('contacts/export', [ContactController::class, 'export'])->name('contacts.export');
    
    // Partner Resorts
    Route::resource('partner-resorts', PartnerResortController::class);
    
    // Shop Categories
    Route::resource('shop-categories', ShopCategoryController::class);
    
    // Shop Products
    Route::resource('shop-products', ShopProductController::class);
    
    // Settings
    Route::get('settings', [AdminController::class, 'settings'])->name('settings');
    Route::post('settings', [AdminController::class, 'updateSettings'])->name('settings.update');
});
