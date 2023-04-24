<?php

namespace App\Http\Controllers;

use App\Traits\CasesTrait;
use App\Traits\DashboardTrait;
use Inertia\Inertia;

class DashboardController extends Controller
{
    use DashboardTrait, CasesTrait;
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        return Inertia::render('Backend/Dashboard/Index', [
            "count" => $this->getDashboardCount(),
        ]);
    }

    public function publications()
    {

        return Inertia::render('Backend/Dashboard/Publication');
    }

    public function albums()
    {
        return Inertia::render('Backend/Dashboard/Album');
    }

    public function cases()
    {
        return Inertia::render('Backend/Dashboard/Cases', [
            "categories" => $this->getCaseCategories(),
        ]);
    }

    public function users()
    {
        return Inertia::render('Backend/Dashboard/Users');
    }

}
