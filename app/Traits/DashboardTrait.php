<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Publication;
use App\Models\Album;
use App\Models\Cases;

trait DashboardTrait
{
    public function getDashboardCount()
    {
       return [
        "users" =>  User::count(),
        "albums" => Album::count(),
        "cases" => Cases::count(),
        "publications" => Publication::count(),
       ];
    }

}
