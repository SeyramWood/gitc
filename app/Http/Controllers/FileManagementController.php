<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Models\Enquiry;
use App\Models\FileManagement;
use App\Models\Files;
use App\Models\Gallary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;


class FileManagementController extends Controller
{

    private $file_path;


    public function __construct()
    {
        $this->file_path = public_path('uploads/');

    }

    // Get all files
    public function index()
    {
        $files = Files::orderBy('created_at','DESC')->paginate(15);

        if ($files) {
            return Inertia::render('Backend/FileUpload', [
                'files' => $files
            ]);
        }

    }

// Store file to db
    public function store(Request $request)
    {

        $request->validate([
            'avatar' => 'required',
            'title' => 'required',
            'description' => 'nullable'
        ]);
            DB::transaction(function () use ($request) {

                    $file = $request->file('avatar');

                    if (!is_dir($this->file_path)) {
                        mkdir($this->file_path, 0777);
                    }
                    $name = sha1(date('YmdHis') . Str::random(30));

                    $save_name = $name . '.' . $file->getClientOriginalExtension();


                    // this saves the actual image
                    $file->move($this->file_path, $save_name);



//             dd($save_name);
                $data['files'] = Files::create([
                    'file' => $save_name ?? null,
                    'title' => $request->title,
                    'description' => $request->description,
                ]);


//
            });


        }
// update file
    public function updateFile($request, Files $fileManagement)
    {
        $request->validate([
            'avatar' => 'nullable',
            'title' => 'nullable'
        ]);
        if (!is_dir($this->file_path)) {
            mkdir($this->file_path, 0777);
        }

        $file = $request->file('avatar');
        $name = sha1(date('YmdHis') . Str::random(30));

        $save_name = $name . '.' . $file->getClientOriginalExtension();


        // this saves the actual image
        $file->move($this->file_path, $save_name);
        $data['files'] = $fileManagement->update([
            'file' => $save_name ?? $fileManagement->file,
            'title' => $request->title ?? $fileManagement->title,
            'user_id' => auth()->id(),
            'description' => $request->description ?? $fileManagement->description,
        ]);


        if ($data) {
            return redirect()->route('user.files')->with('success', 'Success, Created.');
        } else {
            return redirect()->route('user.files')->with('Error', 'Error, Process unsuccesful.');

        }
    }

    // Delete file file fom db
    public function destroy(Files $file)
    {
        $file = FileManagement::findOrFail($file);
        $file_path = "uploads/{$file->file}";

     // Remove the file from storage if exist
        if (Files::exists($file_path)) {
            @unlink($file_path);
        }

      $data['file']  = Files::destroy($file);

        if ($data) {
            return redirect()->route('user.files')->with('success', 'Success, Created.');
        } else {
            return redirect()->route('user.files')->with('Error', 'Error, Process unsuccesful.');

        }
    }

// search for a file
    public function search(Request $request)
    {

        if (request()->user('sanctum')) {
            $data['file'] = Files::where('title', 'LIKE', "%{$request->title}%")->get();

            //checking if request exit
            if ($data) {
                return Inertia::render('Backend/File', [
                    'data' => $data
                ]);
            } else {
                return redirect()->route('user.files')->with('Error', 'Error, Process unsuccesful.');

            }
        }
    }


// Save albums
    public function album(Request $request)
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
        });
    }

    // Get all albums
    public function getAlbum()
    {
        $albums = Album::orderBy('created_at','DESC')->paginate(15);

        if ($albums) {
            return Inertia::render('Backend/Album', [
                'albums' => $albums
            ]);

        }


}

    public function getAlbumGallary(Album $album)
    {
        $data ['albums'] = Album::with('gallary')->orderBy('created_at','DESC')->paginate(15);

        if ($data) {
            return Inertia::render('Backend/AlbumGallary', [
                'data' => $data
            ]);

        } else {
            return redirect()->route('user.albums')->with('error', 'Error, Process unsuccesful.');

        }


}

// get all image / photos
    public function allgallary()
    {
        $gallaries = Gallary::orderBy('created_at','DESC')->paginate(15);
        $albums = Album::select('id','name')->orderBy('created_at','DESC')->get();

        if ($gallaries) {
            return Inertia::render('Backend/Gallary', [
                'gallaries' => $gallaries,
                'albums' => $albums
            ]);

        }


}

// store photos

    public function gallary(Request $request)
    {
        $request->validate([
            'documents' => 'required',
            'album_id' => 'required',
            'documents.*' => 'required|mimes:png,jpeg,jpg|max:2048',
        ]);

        if ($request->avatar){
            foreach($request->avatar as $files) {

                if (!is_dir($this->file_path)) {
                    mkdir($this->file_path, 0777);
                }

                $file = $files;
                $name = sha1(date('YmdHis') . Str::random(30));

                $save_name = $name . '.' . $file->getClientOriginalExtension();

                // // Create files
              $data['gallary'] = Gallary::create([
                    'file' => $save_name,
                    'album_id' => $request->album_id
                ]);
            }

            if ($data) {
                return redirect()->route('user.gallary')->with('success', 'Success, Created.');
            } else {
                return redirect()->route('user.gallary')->with('Error', 'Error, Process unsuccesful.');

            }
        }

    }

    // Delete file  fom db
    public function destroyAlbum(Album $album)
    {
        $album = FileManagement::findOrFail($album);

        $data['album']  = FileManagement::destroy($album);

        if ($data) {
            return redirect()->route('user.albums')->with('success', 'Success, deleted.');
        } else {
            return redirect()->route('user.albums')->with('Error', 'Error, Process unsuccesful.');

        }
    }

    //update album
    public function updateAlbum($request, Album $album)
    {
        $request->validate([
            'name' => 'nullable',
            'description' => 'nullable'
        ]);

        $data['files'] = $album->update([
            'name' => $request->name ?? $album->name,
            'user_id' => auth()->id(),
            'description' => $request->description ?? $album->description,
        ]);


        if ($data) {
            return redirect()->route('user.albums')->with('success', 'Success, updated.');
        } else {
            return redirect()->route('user.albums')->with('Error', 'Error, Process unsuccesful.');

        }
    }

    // Delete file  fom db
    public function destroyGallary(Gallary $gallary)
    {
        $gallary = FileManagement::findOrFail($gallary);

        $data['gallary']  = FileManagement::destroy($gallary);

        if ($data) {
            return redirect()->route('user.gallaries')->with('success', 'Success, deleted.');
        } else {
            return redirect()->route('user.gallaries')->with('Error', 'Error, Process unsuccesful.');

        }
    }

}
