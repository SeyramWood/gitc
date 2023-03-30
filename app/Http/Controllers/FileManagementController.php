<?php

namespace App\Http\Controllers;

use App\Models\Album;
use App\Models\Enquiry;
use App\Models\FileManagement;
use App\Models\Files;
use App\Models\Gallary;
use Carbon\Carbon;
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

//        dd($request);
        $request->validate([
            'pdf' => 'required',
            'title' => 'required',
            'description' => 'nullable',
            'published_date' => 'required',
            'image' => 'required'
        ]);
            DB::transaction(function () use ($request) {

                    $pdf = $request->file('pdf');
                    $image = $request->file('image');

                    if (!is_dir($this->file_path)) {
                        mkdir($this->file_path, 0777);
                    }
                    $name = sha1(date('YmdHis') . Str::random(30));

                    $pdf_name = $name . '.' . $pdf->getClientOriginalExtension();
                    $image_name = $name . '.' . $image->getClientOriginalExtension();


                    // this saves the actual image
                    $pdf->move($this->file_path, $pdf_name);
                    $image->move($this->file_path, $image_name);



//             dd($save_name);
                $data['files'] = Files::create([
                    'pdf' => $pdf_name ?? null,
                    'image' => $image_name ?? null,
                    'title' => $request->title,
                    'published_date' => $request->published_date,
                    'description' => $request->description,
                ]);


//
            });


        }

    public function fileDetails(Files $file)
    {

        $file = Files::whereId($file->id)->first();

        return Inertia::render('Backend/ViewFile', [
            'id' => $file->id,
            'title' => $file->title,
            'description' => $file->description,
            'pdf' => $file->pdf,
            'image' => $file->image,
            'published_date' => $file->published_date,
        ]);



    }

    public function getFileEditForm(Files $file)
    {

        $file = Files::findOrFail($file->id);

        return Inertia::render('Backend/EditFile', [
          'file'=>[
              'id' => $file->id,
              'title' => $file->title,
              'description' => $file->description,
//              'pdf' => $file->pdf,
//              'image' => $file->image,
              'published_date' => $file->published_date,
          ]
        ]);



    }

    // update file
    public function updateFile(Request $request, Files $file)
    {

//        dd($request);

            $pdf = $request->file('pdf');
            $image = $request->file('image');

            $name = sha1(date('YmdHis') . Str::random(30));

            $pdf_name = $name . '.' . $pdf->getClientOriginalExtension();
            $image_name = $name . '.' . $image->getClientOriginalExtension();


            // this saves the actual image
            $pdf->move($this->file_path, $pdf_name);
            $image->move($this->file_path, $image_name);




        $data['files'] = Files::findOrFail($file->id)->update([
            'pdf' => $pdf_name ?? $file->pdf,
            'image' => $image_name ?? $file->image,
            'title' => $request->title ?? $file->title,
            'description' => $request->description ?? $file->description,
            'published_date' => $request->published_date ?? $file->published_date,
        ]);



            return redirect()->route('pdf.files.index');

    }


    public function getFileDeleteForm(Files $file)
    {

        $file = Files::findOrFail($file->id);

        return Inertia::render('Backend/DeleteFile', [
            'file'=>[
                'id' => $file->id,
                'title' => $file->title,
                'description' => $file->description,
                'pdf' => $file->pdf,
                'image' => $file->image,
                'published_date' => $file->published_date,
            ]
        ]);



    }
    // Delete file file fom db
    public function destroy(Files $file)
    {
        $file = Files::findOrFail($file->id);
        $file_path = "uploads/{$file->pdf}";

     // Remove the file from storage if exist
        if (Files::exists($file_path)) {
            @unlink($file_path);
        }

      $file->delete();

       return redirect()->route('pdf.files.index');
    }






// get all image / photos
    public function allgallary()
    {
        $gallaries = Gallary::with('albums')->orderBy('created_at','DESC')->paginate(15);

        if ($gallaries) {
            return Inertia::render('Backend/Gallary', [
                'gallaries' => $gallaries,
                'albums' => $albums
            ]);

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
