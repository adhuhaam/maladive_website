<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartnerResort extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'location',
        'country',
        'description',
        'image',
        'rating',
        'status',
        'amenities',
        'activities',
        'website',
        'contact_email',
        'contact_phone',
        'admin_notes',
    ];

    protected $casts = [
        'amenities' => 'array',
        'activities' => 'array',
    ];

    public function getStatusBadgeAttribute()
    {
        return match($this->status) {
            'active' => '<span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>',
            'inactive' => '<span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Inactive</span>',
            'pending' => '<span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>',
            default => '<span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Unknown</span>',
        };
    }

    public function getRatingStarsAttribute()
    {
        $stars = '';
        for ($i = 1; $i <= 6; $i++) {
            if ($i <= $this->rating) {
                $stars .= '★';
            } else {
                $stars .= '☆';
            }
        }
        return $stars;
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}
