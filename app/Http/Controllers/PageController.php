<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Website/Index');
    }

    public function service()
    {
        return Inertia::render('Website/Service');
    }

    public function team()
    {
        return Inertia::render('Website/Team');
    }
}
