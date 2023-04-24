<?php

namespace App\Http\Controllers;

use App\Models\Publication;
use App\Traits\PublicationTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class PublicationController extends Controller
{
    use PublicationTrait;

    private $pdf_path;
    private $image_path;


    public function __construct()
    {
        $this->pdf_path = public_path('uploads/publications/pdf');
        $this->image_path = public_path('uploads/publications/images');

    }

    public function all(Request $request)
    {
        return $this->getPublications((int)$request->get("offset"), (int)$request->get("limit"));
    }

    public function store(Request $request)
    {
        $request->validate([
            'pdf' => 'required',
            'title' => 'required',
            'description' => 'nullable',
            'published_date' => 'required',
            'image' => 'required'
        ]);
        $pdf = $request->file('pdf');
        $image = $request->file('image');

        if (!is_dir($this->pdf_path) && !is_dir($this->image_path)) {
            mkdir($this->pdf_path, 0777, true);
            mkdir($this->image_path, 0777, true);
        }
        $name = sha1(date('YmdHis') . Str::random(30));

        $pdf_name = $name . '.' . $pdf->getClientOriginalExtension();
        $image_name = $name . '.' . $image->getClientOriginalExtension();

        // this saves the actual image
        $pdf->move($this->pdf_path, $pdf_name);
        $image->move($this->image_path, $image_name);
        $record = Publication::create([
            'pdf' => $pdf_name ?? null,
            'image' => $image_name ?? null,
            'title' => $request->title,
            'published_date' => $request->published_date,
            'description' => $request->description,
        ]);

        return response()->json([
            'data' => $record,
            'status' => true
            ], 200);
    }

    public function update(Request $request, Publication $publication)
    {

        $request->validate([
            'title' => 'required',
            'description' => 'nullable',
            'pdf' => 'nullable',
            'image' => 'nullable',
            'published_date' => 'required',
        ]);

        $name = sha1(date('YmdHis') . Str::random(30));
        $pdf_name = null;
        $image_name = null;

        if ($request->file("pdf")) {
            $pdf = $request->file('pdf');
            $pdf_name = $name . '.' . $pdf->getClientOriginalExtension();
            $pdf->move($this->pdf_path, $pdf_name);
            $file_path = "{$this->pdf_path}/{$publication->pdf}";

            if (File::exists($file_path)) {
                File::delete($file_path);
            }
        }
        if ($request->file("image")) {
            $image = $request->file('image');
            $image_name = $name . '.' . $image->getClientOriginalExtension();
            $image->move($this->image_path, $image_name);
            $file_path = "{$this->image_path}/{$publication->image}";
            if (File::exists($file_path)) {
                File::delete($file_path);
            }
        }
        $publication->update([
            'pdf' => $pdf_name ?? $publication->pdf,
            'image' => $image_name ?? $publication->image,
            'title' => $request->title,
            'published_date' => $request->published_date,
            'description' => $request->description,
        ]);

        return $this->getPublication($publication->id);
    }

    public function delete(Publication $publication)
    {
        $file_path = "{$this->pdf_path}/{$publication->pdf}";
        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $file_path = "{$this->image_path}/{$publication->image}";
        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $publication->delete();
        return response()->json([
            "message" => "Publication deleted",
            'status' => true
        ], 200);
    }
}
