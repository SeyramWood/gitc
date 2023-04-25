<?php

namespace App\Http\Controllers;

use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    use ResponseTrait;

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

    public function ServiceSafeguard()
    {
        return Inertia::render('Website/ServiceSafeguard');
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

     public function ServiceTariff()
    {
        return Inertia::render('Website/ServiceTariff');
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
        return Inertia::render('Website/Publication', [
            "publications" => $this->getPublications()
        ]);
    }

    public function faq()
    {
        return Inertia::render('Website/Faq');
    }

    public function resources()
    {
        return Inertia::render('Website/Resources');
    }

     public function gallery()
    {
        return Inertia::render('Website/Gallery', [
            "albums" => $this->getAlbums()
        ]);
    }

    // resources
    public function customsFiles()
    {
        return Inertia::render('Website/CustomsFiles', [
            "cases" => $this->getCases()
        ]);
    }
    public function disputesFiles()
    {
        return Inertia::render('Website/DisputeFiles');
    }
    public function subsidyFiles()
    {
        return Inertia::render('Website/SubsidyFiles');
    }
    public function measuresFiles()
    {
        return Inertia::render('Website/MeasuresFiles');
    }

}
