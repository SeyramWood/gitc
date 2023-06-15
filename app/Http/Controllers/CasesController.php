<?php

namespace App\Http\Controllers;

use App\Models\Cases;
use App\Traits\CasesTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class CasesController extends Controller
{
    use CasesTrait;

    private $pdf_path;


    public function __construct()
    {
        $this->pdf_path = public_path('uploads/cases');
    }

    public function all(Request $request)
    {
        return $this->getCases((int)$request->get("offset"), (int)$request->get("limit"));
    }

    public function store(Request $request)
    {
        $request->validate([
            'category' => 'required|numeric',
            'pdf' => 'nullable',
            'title' => 'required',
            'description' => 'nullable',
            'issued_date' => 'nullable',
            'investigation_number' => 'required'
        ]);
        $pdf = $request->file('pdf');
        if (!is_dir($this->pdf_path)) {
            mkdir($this->pdf_path, 0777, true);
        }
        $name = sha1(date('YmdHis') . Str::random(30));

        $pdf_name = $name . '.' . $pdf->getClientOriginalExtension();

        $pdf->move($this->pdf_path, $pdf_name);
        $record = Cases::create([
            'case_category_id' => $request->category,
            'pdf' => $pdf_name ?? null,
            'investigation_number' => $request->investigation_number,
            'title' => $request->title,
            'issued_date' => $request->issued_date,
            'description' => $request->description,
        ]);
        return response()->json([
            'data' => $record,
            'status' => true
            ], 200);
    }

    public function update(Request $request, Cases $case)
    {

        $request->validate([
            'category' => 'required|numeric',
            'title' => 'required',
            'description' => 'nullable',
            'pdf' => 'nullable',
            'investigation_number' => "required",
            'issued_date' => 'nullable',
        ]);

        $name = sha1(date('YmdHis') . Str::random(30));
        $pdf_name = null;

        if ($request->file("pdf")) {
            $pdf = $request->file('pdf');
            $pdf_name = $name . '.' . $pdf->getClientOriginalExtension();
            $pdf->move($this->pdf_path, $pdf_name);
            $file_path = "{$this->pdf_path}/{$case->pdf}";
            if (File::exists($file_path)) {
                File::delete($file_path);
            }
        }
        $case->update([
            'case_category_id' => $request->category,
            'pdf' => $pdf_name ?? $case->pdf,
            'investigation_number' => $request->investigation_number,
            'title' => $request->title,
            'issued_date' => $request->issued_date,
            'description' => $request->description,
        ]);

        return $this->getCase($case->id);
    }

    public function delete(Cases $case)
    {
        $file_path = "{$this->pdf_path}/{$case->pdf}";
        if (File::exists($file_path)) {
            File::delete($file_path);
        }
        $case->delete();
        return response()->json([
            "message" => "Case deleted",
            'status' => true
        ], 200);
    }
}
