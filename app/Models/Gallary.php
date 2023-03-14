<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallary extends Model
{
    use HasFactory;

    protected $guarded =[];

    protected $casts = [
        'images' => 'array'
    ];

    public function albums(){

        return $this->belongsTo(Album::class);
    }
}
