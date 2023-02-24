<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use App\Models\FileManagement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;

class FileManagementController extends Controller
{
    // Get all files
    public function index()
    {
        $data ['files'] = FileManagement::with('user')->orderBy('created_at','DESC')->paginate(15);

        if ($data) {
            return response()->json([
                'message' => "Request successfully  ",
                'data' => $data,
                'code' => 200
            ],200);
        } else {
            return response()->json([
                'message' => "Request  unsuccessful ",
                'code'=>400
            ],400);
        }

    }

// Store file to db
    public function store(Request $request)
    {

//        dd($request->file);
        $request->validate([
            'file' => 'required',
            'title' => 'required'
        ]);

        try {
            DB::transaction(function () use ($request) {

                $photo = request()->file('file');

                if(request()->file('file')){
//                dd('has file');
                    $path = 'images/files/';
                    if (!is_dir($path)) {
                        mkdir($path, 0777);
                    }
                    $name = sha1(date('YmdHis').str_random(30));
                    $save_name = $name. '.' .$photo->getClientOriginalExtension();

                    // this saves the actual image
                    $photo->move($path, $save_name);
//

                }

                $data['files'] = Enquiry::create([
                    'file' => $save_name ?? null,
                    'title' => $request->title,
                    'user_id' => auth()->id(),
                    'description' => $request->description,
                ]);


                if ($data) {
                    return response()->json([
                        'message' => "Request created  successfully  ",
                        'data' => $data,
                        'code' => 200
                    ],200);
                } else {
                    return response()->json([
                        'message' => "Request  unsuccessful ",
                        'code'=>400
                    ],400);
                }
            });

        } catch (\Throwable $th) {

            return response()->json([
                'message' => "We couldn't process your request, please try again."
            ]);

        }

    }

    public function UpdateFile($request, FileManagement $fileManagement)
    {
        $request->validate([
            'file' => 'nullable',
            'title' => 'nullable'
        ]);
        if ($request->hasFile('file')) {

            $image = $request->file('file');
            $img = 'profile' . '.' . $image->getClientOriginalExtension();
            $location = 'images/files/' . $img;

            @unlink('images/profiles/' . Auth::user()->image);
            Image::make($image)->save($location);
        }
        $data['files'] = $fileManagement->update([
            'file' => $save_name ?? $fileManagement->file,
            'title' => $request->title ?? $fileManagement->title,
            'user_id' => auth()->id(),
            'description' => $request->description ?? $fileManagement->description,
        ]);


        if ($data) {
            return response()->json([
                'message' => "Request created  successfully  ",
                'data' => $data,
                'code' => 200
            ],200);
        } else {
            return response()->json([
                'message' => "Request  unsuccessful ",
                'code'=>400
            ],400);
        }
    }

    // Delete file file fom db
    public function destroy(FileManagement $file)
    {
        $file = FileManagement::findOrFail($file);
        $file_path = "images/files/{$file->files}";

     // Remove the file from storage if exist
        if (FileManagement::exists($file_path)) {
            @unlink($file_path);
        }
        else{
            return response()->json([
                'message' => "File not exists ",
                'code' => 404
            ],404);

        }

      $data['file']  = FileManagement::destroy($file);

        if ($data) {
            return response()->json([
                'message' => "File deleted successfully  ",
                'data' => $data,
                'code' => 200
            ],200);
        } else {
            return response()->json([
                'message' => "Request  unsuccessful ",
                'code'=>400
            ],400);
        }
    }



}
