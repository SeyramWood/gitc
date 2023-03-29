<?php

namespace App\Http\Controllers;

use App\Models\OurCase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CasesController extends Controller
{
    private $file_path;


    public function __construct()
    {
        $this->file_path = public_path('uploads/');

    }

    // Get all files
    public function index()
    {
        $ourcases = OurCase::orderBy('created_at','DESC')->paginate(15);

        if ($ourcases) {
            return Inertia::render('Backend/CaseUpload', [
                'ourcases' => $ourcases
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
            'issue_date' => 'required'

        ]);
        DB::transaction(function () use ($request) {

            $pdf = $request->file('pdf');


            if (!is_dir($this->file_path)) {
                mkdir($this->file_path, 0777);
            }
            $name = sha1(date('YmdHis') . Str::random(30));

            $pdf_name = $name . '.' . $pdf->getClientOriginalExtension();


            // this saves the actual image
            $pdf->move($this->file_path, $pdf_name);




//             dd($save_name);
            $data['ourcases'] = OurCase::create([
                'pdf' => $pdf_name ?? null,
                'title' => $request->title,
                'issue_date' => $request->issue_date,
                'description' => $request->description,
            ]);


//
        });


    }

    public function Details(OurCase $ourcase)
    {

        $ourcase = OurCase::whereId($ourcase->id)->first();

        return Inertia::render('Backend/ViewCase', [
            'id' => $ourcase->id,
            'title' => $ourcase->title,
            'description' => $ourcase->description,
            'pdf' => $ourcase->pdf,
            'issue_date' => $ourcase->issue_date,
        ]);



    }

    public function getEditForm(OurCase $ourcase)
    {

        $ourcase = OurCase::findOrFail($ourcase->id);

        return Inertia::render('Backend/EditCase', [
            'ourcase'=>[
                'id' => $ourcase->id,
                'title' => $ourcase->title,
                'description' => $ourcase->description,
                'issue_date' => $ourcase->issue_date,
            ]
        ]);



    }

    // update file
    public function update(Request $request, OurCase $ourcase)
    {

//        dd($request);

        if ($request->pdf){
            $pdf = $request->file('pdf');


            $name = sha1(date('YmdHis') . Str::random(30));

            $pdf_name = $name . '.' . $pdf->getClientOriginalExtension();



            // this saves the actual image
            $pdf->move($this->file_path, $pdf_name);
        }







        $data['ourcases'] = OurCase::findOrFail($ourcase->id)->update([
            'pdf' => $pdf_name ?? $ourcase->pdf,
            'title' => $request->title ?? $ourcase->title,
            'description' => $request->description ?? $ourcase->description,
            'issue_date' => $request->issue_date ?? $ourcase->issue_date,
        ]);



        return redirect()->route('cases.files.index');

    }


    public function getDeleteForm(OurCase $ourcase)
    {

        $ourcase = OurCase::findOrFail($ourcase->id);

        return Inertia::render('Backend/DeleteCase', [
            'ourcase'=>[
                'id' => $ourcase->id,
                'title' => $ourcase->title,
                'description' => $ourcase->description,
                'pdf' => $ourcase->pdf,
                'issue_date' => $ourcase->published_date,
            ]
        ]);



    }
    // Delete file file fom db
    public function destroy(OurCase $ourcase)
    {
        $ourcase = OurCase::findOrFail($ourcase->id);
        $file_path = "uploads/{$ourcase->pdf}";

        // Remove the file from storage if exist
        if (OurCase::exists($file_path)) {
            @unlink($file_path);
        }

        $ourcase->delete();

        return redirect()->route('cases.files.index');
    }
}
