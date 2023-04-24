<?php

namespace App\Traits;

use App\Models\Album;

trait AlbumTrait
{
    public function getAlbums($offset, $limit)
    {
       $total = Album::count();
       $data = Album::with('gallery')->offset($offset)->limit($limit)->orderBy('created_at','DESC')->get();
       return response()->json([
        'data' => [
            "count" => $total,
            "records" => $data,
            ],
            'status' => true
        ], 200);
    }
    public function getAlbum($id)
    {
       $data = Album::with('gallery')->findOrFail($id);
       return response()->json([
            "data" => $data,
            'status' => true
        ], 200);
    }
}
