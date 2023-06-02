<?php

namespace App\Traits;

use App\Models\CaseCategory;
use App\Models\Cases;

trait CasesTrait
{
    public function getCases($offset, $limit)
    {
        $total = Cases::count();
        $data = Cases::offset($offset)->limit($limit)->orderBy('created_at', 'DESC')->get();
        return response()->json([
            'data' => [
                "count" => $total,
                "records" => $data,
            ],
            'status' => true
        ], 200);
    }
    public function getCase($id)
    {
        $data = Cases::findOrFail($id);
        return response()->json([
            "data" => $data,
            'status' => true
        ], 200);
    }

    public function getCaseCategories()
    {
        return CaseCategory::all();
        //    return response()->json([
        //         "data" => $data,
        //         'status' => true
        //     ], 200);
    }
}