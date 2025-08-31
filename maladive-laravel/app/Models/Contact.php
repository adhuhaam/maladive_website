<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'subject',
        'message',
        'status',
        'admin_notes',
    ];

    public function getStatusBadgeAttribute()
    {
        return match($this->status) {
            'new' => '<span class="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">New</span>',
            'read' => '<span class="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Read</span>',
            'replied' => '<span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Replied</span>',
            'closed' => '<span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Closed</span>',
            default => '<span class="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Unknown</span>',
        };
    }
}
