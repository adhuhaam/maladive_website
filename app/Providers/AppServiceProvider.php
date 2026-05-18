<?php

namespace App\Providers;

use App\Models\SiteSetting;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        View::composer('*', function ($view) {
            if (! Schema::hasTable('site_settings')) {
                $view->with('siteSettings', []);

                return;
            }

            $view->with('siteSettings', [
                'site_name' => SiteSetting::get('site_name', 'Maladive'),
                'site_tagline' => SiteSetting::get('site_tagline', 'Premium Watersports Experiences'),
                'hero_title' => SiteSetting::get('hero_title'),
                'hero_subtitle' => SiteSetting::get('hero_subtitle'),
                'about_intro' => SiteSetting::get('about_intro'),
                'contact_email' => SiteSetting::get('contact_email'),
                'contact_phone' => SiteSetting::get('contact_phone'),
                'contact_address' => SiteSetting::get('contact_address'),
            ]);
        });
    }
}
