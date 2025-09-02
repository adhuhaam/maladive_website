<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\PartnerResortsController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Home page
Route::get('/', [HomeController::class, 'index'])->name('home');

// Services pages
Route::get('/services', [ServicesController::class, 'index'])->name('services');
Route::get('/watersports', [ServicesController::class, 'watersports'])->name('watersports');
Route::get('/diving', [ServicesController::class, 'diving'])->name('diving');
Route::get('/excursions', [ServicesController::class, 'excursions'])->name('excursions');

// Other pages
Route::get('/partner-resorts', [PartnerResortsController::class, 'index'])->name('partner-resorts');
Route::get('/shop', [ShopController::class, 'index'])->name('shop');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::get('/enquiry', [EnquiryController::class, 'index'])->name('enquiry');

// Form submissions
Route::post('/enquiry', [EnquiryController::class, 'store'])->name('enquiry.store');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::post('/newsletter', [HomeController::class, 'newsletter'])->name('newsletter.subscribe');

// Authentication routes
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

// Include admin routes
require __DIR__.'/admin.php';
