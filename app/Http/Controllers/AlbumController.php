<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Models\Gallary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AlbumController extends Controller
{

    private $file_path;


    public function __construct()
    {
        $this->file_path = public_path('uploads/');

    }
    // Save albums
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:albums,name',
            'description' => 'nullable',
            'images' => 'nullable',

        ]);


        DB::transaction(function () use ($request) {
            // // Create files
            $data['album'] = Album::create([
                'name' => $request->name,
                'description' => $request->description,
            ]);
//
            $file = $request->file('images');

            if (!is_dir($this->file_path)) {
                mkdir($this->file_path, 0777);
            }
            $name = sha1(date('YmdHis') . Str::random(30));

            $save_name = $name . '.' .$file->getClientOriginalExtension();


            // this saves the actual image
            $file->move($this->file_path, $save_name);


            $data['album']->gallary()->create([
                'images' => $save_name,
                'album_id' => $data['album']->id
            ]);

            return redirect()->route('album.index')->with('message', 'Success, Created Sucussfully.');
        });
    }

    // Get all albums
    public function index()
    {
        $albums = Album::orderBy('created_at','DESC')->paginate(15);

        return Inertia::render('Backend/Album', [
            'albums' => $albums
        ]);

    }

    public function Details(Album $album)
    {

        $album = Album::with('gallary')->whereId($album->id)->first();

        return Inertia::render('Backend/ViewAlbum', [
            'id' => $album->id,
            'name' => $album->name,
        ]);



    }

    public function getEditForm(Album $album)
    {

        $album = Album::findOrFail($album->id);

        return Inertia::render('Backend/EditAlbum', [
            'album'=>[
                'id' => $album->id,
                'name' => $album->name,
                'description' => $album->description,
            ]
        ]);



    }

    // update file
    public function update(Request $request, Album $album)
    {

//        dd($request);
         if ($request->images){

             $image = $request->file('images');

             $name = sha1(date('YmdHis') . Str::random(30));

             $image_name = $name . '.' . $image->getClientOriginalExtension();


             // this saves the actual image

             $image->move($this->file_path, $image_name);




         }


        $data['album'] = Album::findOrFail($album->id)->update([
            'name' => $request->name ?? $album->name,
            'description' => $request->description ?? $album->description,
        ]);

        $image = Gallary::select('images')->whereAlbum_id($album->id)->first();

        $album->gallary()->update([
            'images' => $image_name ?? $image->images,
        ]);


        return redirect()->route('album.index')->with('message', 'Success, Created Sucussfully.');

    }


    public function getDeleteForm(Album $album)
    {

        $album = Album::findOrFail($album->id);

        return Inertia::render('Backend/DeleteAlbum', [
            'album'=>[
                'id' => $album->id,
                'name' => $album->name,
                'description' => $album->description,
            ]
        ]);



    }
    // Delete file file fom db
    public function destroy(Album $album)
    {
        $album = Album::findOrFail($album->id);

        $album->delete();

        return redirect()->route('album.index')->with('message', 'Success, Deleted Sucussfully.');
    }


    public function getAlbumGallary(Album $album)
    {
        $albumGallary= Album::with('gallary')->whereId($album->id)->orderBy('created_at','DESC')->get();

        foreach ($albumGallary as $album)

            foreach ($album->gallary as $gallary)


        if ($albumGallary) {
            return Inertia::render('Backend/ViewAlbum', [
                'id' => $album->id,
                'name' => $album->name,
                'description' => $album->description,
                'images' => $gallary->images,

            ]);

        }

    }

    public function getAddToGallaryForm(Album $album)
    {

        $album = Album::findOrFail($album->id);

        return Inertia::render('Backend/AddGallary', [
            'album'=>[
                'id' => $album->id,
                'name' => $album->name,
                'description' => $album->description,
            ]
        ]);



    }

    // store photos

    public function adToGallary(Request $request, Album $album)
    {
        $img = [];

        $img = $request->file('images');
//
      dd($img);
//
//        dd($request);
        if ($request->file('images')){
//            foreach($request->avatar as $files) {

                if (!is_dir($this->file_path)) {
                    mkdir($this->file_path, 0777);
                }
                  $file = $request->file('images');
//                $file = $files;
                $name = sha1(date('YmdHis') . Str::random(30));

                $save_name = $name . '.' . $file->getClientOriginalExtension();

                // // Create files
                $album->gallary()->create([
                    'images' => $save_name,
                ]);

        }

    }
}
