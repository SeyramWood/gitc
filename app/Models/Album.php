<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    protected $guarded =[];


    public function user(){

        return $this->belongsTo(User::class);
    }

    public function gallary(){

        return $this->hasMany(Gallary::class);
    }
}
