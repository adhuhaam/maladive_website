<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'service',
        'destination',
        'dates',
        'participants',
        'message',
        'status',
        'admin_notes',
    ];

    protected $casts = [
        'participants' => 'integer',
    ];

    public function getStatusBadgeAttribute()
    {
        return match($this->status) {
            'new' => '<span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">New</span>',
            'in_progress' => '<span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">In Progress</span>',
            'completed' => '<span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completed</span>',
            'cancelled' => '<span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Cancelled</span>',
            default => '<span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Unknown</span>',
        };
    }

    public function getServiceLabelAttribute()
    {
        return match($this->service) {
            'watersports' => 'Watersports',
            'diving' => 'Diving',
            'excursions' => 'Excursions',
            'equipment' => 'Equipment Sales',
            default => 'Unknown',
        };
    }
}
