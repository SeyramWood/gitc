<?php

namespace App\Traits;

use App\Models\User;

trait AdminTrait
{
    public function getUsers($offset, $limit)
    {
       $total = User::count();
       $data = User::offset($offset)->limit($limit)->orderBy('created_at','DESC')->get();
       return response()->json([
        'data' => [
            "count" => $total,
            "records" => $data,
            ],
            'status' => true
        ], 200);
    }
    public function getUser($id)
    {
       $data = User::findOrFail($id);
       return response()->json([
            "data" => $data,
            'status' => true
        ], 200);
    }
}
