<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function updateUserProfile($request)
    {
        $request->validate([
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'username' => 'required|string|min:3,max:10|unique:users,username',
            'email' => ['required|email'],
            'contact' => ['required|number']
        ]);
        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $img = 'profile' . '.' . $image->getClientOriginalExtension();
            $location = 'images/profiles/' . $img;

            @unlink('images/profiles/' . auth()->user()->profile->image);
            Image::make($image)->save($location);
        }

        $data['user'] = auth()->user()->update([
            'role_id' => auth()->user()->role_id,
            'username' => $request->username ?? auth()->user()->username,
            'email' => $request->email ?? auth()->user()->email ,
        ]);
        auth()->user()->profile()->update([
            'first_name' => $request->first_name ?? auth()->user()->profile->first_name,
            'last_name' => $request->last_name ?? auth()->user()->profile->last_name,
            'image' => $img ?? auth()->user()->profile->image ?? null,
        ]);

        $data['user'] = User::with('profile')->whereId(auth()->id())->first();
        if ($data) {
            return response()->json([
                'message' => "User  updated ",
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

    public function userUpdatePassword($request)
    {
        $request->validate([
            'current_password' => ['required', new MatchOldPassword],
            'password' => 'required|confirmed|min:8',
        ]);
        $data['user'] = auth()->user()->update([
            "password" => Hash::make($request->password)
        ]);
        if ($data) {
            return response()->json([
                'message' => "User password updated ",
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

    public function userProfile()
    {

        $data['user'] = User::with('profile')->whereId(auth()->id())->first();
        if ($data) {
            return response()->json([
                'message' => "User profile found  ",
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
