<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\ShopCategory;
use App\Models\ShopProduct;
use App\Models\PartnerResort;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::create([
            'name' => 'Admin',
            'email' => 'admin@maladive.com',
            'password' => Hash::make('password'),
        ]);

        // Create shop categories
        $categories = [
            [
                'name' => 'Jet Skis',
                'slug' => 'jet-skis',
                'description' => 'High-performance jet skis for thrilling water adventures',
                'sort_order' => 1,
            ],
            [
                'name' => 'Kayaks & Paddleboards',
                'slug' => 'kayaks-paddleboards',
                'description' => 'Explore the waters with our premium kayaks and paddleboards',
                'sort_order' => 2,
            ],
            [
                'name' => 'Diving Equipment',
                'slug' => 'diving-equipment',
                'description' => 'Professional diving gear for underwater exploration',
                'sort_order' => 3,
            ],
            [
                'name' => 'Safety Equipment',
                'slug' => 'safety-equipment',
                'description' => 'Essential safety gear for all watersports activities',
                'sort_order' => 4,
            ],
        ];

        foreach ($categories as $category) {
            ShopCategory::create($category);
        }

        // Create sample products
        $products = [
            [
                'name' => 'Yamaha VX Cruiser Jet Ski',
                'slug' => 'yamaha-vx-cruiser-jet-ski',
                'description' => 'High-performance jet ski perfect for thrilling water adventures. Features advanced technology and superior handling.',
                'price' => 12999.99,
                'sku' => 'JS-001',
                'stock_quantity' => 5,
                'category_id' => 1,
                'brand' => 'Yamaha',
                'model' => 'VX Cruiser',
                'is_featured' => true,
            ],
            [
                'name' => 'Ocean Kayak Malibu Two XL',
                'slug' => 'ocean-kayak-malibu-two-xl',
                'description' => 'Tandem kayak perfect for two people. Stable and comfortable for long paddling adventures.',
                'price' => 899.99,
                'sku' => 'KY-001',
                'stock_quantity' => 12,
                'category_id' => 2,
                'brand' => 'Ocean Kayak',
                'model' => 'Malibu Two XL',
                'is_featured' => true,
            ],
            [
                'name' => 'ScubaPro MK25 Regulator',
                'slug' => 'scubapro-mk25-regulator',
                'description' => 'Professional-grade scuba regulator with excellent breathing performance and reliability.',
                'price' => 1299.99,
                'sku' => 'DE-001',
                'stock_quantity' => 8,
                'category_id' => 3,
                'brand' => 'ScubaPro',
                'model' => 'MK25',
                'is_featured' => false,
            ],
        ];

        foreach ($products as $product) {
            ShopProduct::create($product);
        }

        // Create sample partner resorts
        $resorts = [
            [
                'name' => 'Paradise Island Resort',
                'location' => 'North Male Atoll',
                'country' => 'Maldives',
                'description' => 'Luxury overwater villas with direct access to crystal-clear waters perfect for watersports.',
                'rating' => '5',
                'amenities' => ['Overwater Villas', 'Private Beach', 'Spa', 'Restaurants'],
                'activities' => ['Jet Ski Adventures', 'Scuba Diving', 'Kayak Tours', 'Sunset Cruises'],
                'website' => 'https://paradiseisland.com',
                'contact_email' => 'info@paradiseisland.com',
                'contact_phone' => '+960 777 1234',
            ],
            [
                'name' => 'Bali Beach Resort',
                'location' => 'Nusa Dua',
                'country' => 'Indonesia',
                'description' => 'Tropical paradise offering world-class watersports in the heart of Southeast Asia.',
                'rating' => '4',
                'amenities' => ['Beachfront Rooms', 'Swimming Pool', 'Water Sports Center', 'Restaurants'],
                'activities' => ['Surfing Lessons', 'Paddleboarding', 'Island Hopping', 'Cultural Tours'],
                'website' => 'https://balibeachresort.com',
                'contact_email' => 'info@balibeachresort.com',
                'contact_phone' => '+62 361 123456',
            ],
            [
                'name' => 'Caribbean Paradise',
                'location' => 'St. Lucia',
                'country' => 'St. Lucia',
                'description' => 'Exotic Caribbean destination with pristine beaches and vibrant marine life.',
                'rating' => '5',
                'amenities' => ['Ocean View Rooms', 'Private Beach', 'Marina', 'Restaurants'],
                'activities' => ['Deep Sea Fishing', 'Snorkeling', 'Catamaran Sailing', 'Beach Activities'],
                'website' => 'https://caribbeanparadise.com',
                'contact_email' => 'info@caribbeanparadise.com',
                'contact_phone' => '+1 758 123 4567',
            ],
        ];

        foreach ($resorts as $resort) {
            PartnerResort::create($resort);
        }
    }
}
