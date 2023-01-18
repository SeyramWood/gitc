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

    public function ServiceSubsidy()
    {
        return Inertia::render('Website/ServiceSubsidy');
    }

    public function ServiceSaufgard()
    {
        return Inertia::render('Website/ServiceSaufgard');
    }
    public function ServiceResearch()
    {
        return Inertia::render('Website/ServiceResearch');
    }
    public function ServiceDispute()
    {
        return Inertia::render('Website/ServiceDispute');
    }
    public function ServiceDumping()
    {
        return Inertia::render('Website/ServiceDumping');
    }
}
