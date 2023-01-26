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

    public function about()
    {
        return Inertia::render('Website/About');
    }
    public function aboutMessage()
    {
        return Inertia::render('Website/AboutMessage');
    }
    public function aboutStory()
    {
        return Inertia::render('Website/AboutStory');
    }

    public function publish()
    {
        return Inertia::render('Website/Publish');
    }

   public function contact()
    {
        return Inertia::render('Website/Contact');
    }
    public function publication()
    {
        return Inertia::render('Website/Publication');
    }
    

}
