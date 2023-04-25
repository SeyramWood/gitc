<?php

namespace App\Traits;

use App\Models\Publication;
use App\Models\Album;
use App\Models\Cases;

trait ResponseTrait
{
    public function getPublications()
    {
       return Publication::orderBy('created_at', 'desc')->paginate(50);
    }
    public function getCases()
    {
       return Cases::orderBy('created_at', 'desc')->paginate(50);
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
