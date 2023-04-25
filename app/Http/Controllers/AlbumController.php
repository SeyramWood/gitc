<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Traits\AlbumTrait;
use Illuminate\Http\Request;


class AlbumController extends Controller
{
    use AlbumTrait;

    public function all(Request $request)
    {
        return $this->getAlbums((int)$request->get("offset"), (int)$request->get("limit"));
    }

    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'date' => 'required',
        ]);

        $album = Album::create([
            'name' => $request->name,
            'description' => $request->description,
            'date' => $request->date,
        ]);
        return $this->getAlbum($album->id);
    }

    public function update(Request $request, Album $album)
    {

        $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'date' => 'required',
        ]);

        $album->update([
            'name' => $request->name,
            'description' => $request->description,
            'date' => $request->date,
        ]);

        return $this->getAlbum($album->id);
    }

    public function delete(Album $album)
    {
        $album->delete();
        return response()->json([
            "message" => "Album deleted",
            'status' => true
        ], 200);
    }


}
