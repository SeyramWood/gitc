<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function create($request)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',

        ]);

        $data['role'] = Role::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        if ($data) {
            return response()->json([
                'message' => "Role  Created ",
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
