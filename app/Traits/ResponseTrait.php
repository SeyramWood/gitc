<?php

namespace App\Traits;

use App\Models\Publication;
use App\Models\Album;
use App\Models\CaseCategory;
use App\Models\Cases;
use Illuminate\Support\Facades\DB;

trait ResponseTrait
{
    public function getPublications()
    {
       return Publication::orderBy('created_at', 'desc')->paginate(50);
    }
    public function getCases($category, $filter)
    {

        if ($filter) {
            return $category->cases()->whereYear('issued_date', $filter)->orderBy('issued_date', 'desc')->paginate(50);
        }
       return $category->cases()->orderBy('issued_date', 'desc')->paginate(50);
    }
    public function getYearOfCases($category)
    {
        return $category->cases()-> select(DB::raw('count(*) as count, year(issued_date) as year'))
        ->whereRaw('issued_date > DATE_SUB(CURDATE(), INTERVAL 5 YEAR)')
        ->groupBy('year')
        ->orderBy('year', 'desc')
        ->get();
    }
    public function getCategoryOfCases()
    {
        return CaseCategory::withCount("cases")->get();
    }
    public function getAlbums()
    {
       return Album::with('gallery')->orderBy('created_at', 'desc')->paginate(50);
    }

    public function getFooterAlbums()
    {
       return Album::withOnly(['gallery' => function ($query) {
            $query->orderBy('created_at', 'desc');
        }])->limit(4)->orderBy('created_at', 'desc')->get();
    }

}
