<?php

namespace App\Traits;

use App\Models\Publication;

trait PublicationTrait
{
    public function getPublications($offset, $limit)
    {
       $total = Publication::count();
       $data = Publication::offset($offset)->limit($limit)->orderBy('created_at','DESC')->get();
       return response()->json([
        'data' => [
            "count" => $total,
            "records" => $data,
            ],
            'status' => true
        ], 200);
    }
    public function getPublication($id)
    {
       $data = Publication::findOrFail($id);
       return response()->json([
            "data" => $data,
            'status' => true
        ], 200);
    }
}
