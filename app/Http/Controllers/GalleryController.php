<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Models\Gallery;
use App\Traits\AlbumTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class GalleryController extends Controller
{
    use AlbumTrait;

    private $gallery_path;


    public function __construct()
    {
        $this->gallery_path = public_path('uploads/gallery');
    }

    public function store(Request $request)
    {
        $request->validate([
            'images' => 'required|array',
        ]);
        if ($request->get("album")) {
            foreach ($request->file("images") as $key => $image) {
                if (!is_dir($this->gallery_path)) {
                    mkdir($this->gallery_path, 0777, true);
                }
                $name = sha1(date('YmdHis') . Str::random(30));
                $image_name = $name . '.' . $image->getClientOriginalExtension();
                $image->move($this->gallery_path, $image_name);
                Gallery::create([
                    'album_id' => (int)$request->get("album"),
                    'image' => $image_name ?? null,
                ]);
            }
        }
        return $this->getAlbum((int)$request->get("album"));
    }

    public function update(Request $request, Gallery $gallery)
    {

        $request->validate([
            'images' => 'required|array',
        ]);

        foreach ($request->file("images") as $key => $image) {
            if (!is_dir($this->gallery_path)) {
                mkdir($this->gallery_path, 0777, true);
            }
            $name = sha1(date('YmdHis') . Str::random(30));
            $image_name = $name . '.' . $image->getClientOriginalExtension();
            $image->move($this->gallery_path, $image_name);

            $file_path = "{$this->gallery_path}/{$gallery->image}";
            if (File::exists($file_path)) {
                File::delete($file_path);
            }
            $gallery->update([
                'image' => $image_name,
            ]);

        }

        return response()->json([
            'status' => true,
            ], 200);
    }

    public function delete(Gallery $gallery)
    {
        $file_path = "{$this->gallery_path}/{$gallery->image}";
        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $gallery->delete();
        return response()->json([
            "message" => "Image deleted",
            'status' => true
        ], 200);
    }

    public function deleteAll(Album $album)
    {
        if ($album->gallery) {
        foreach ($album->gallery as $key => $image) {
            $file_path = "{$this->gallery_path}/{$image->image}";
                if (File::exists($file_path)) {
                    File::delete($file_path);
                }
            }
        }
        $album->gallery()->delete();
        return response()->json([
            "message" => "Gallery deleted",
            'status' => true
        ], 200);
    }
}
