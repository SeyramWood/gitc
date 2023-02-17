<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function UpdateUserProfile($request, User $user)
    {
        $request->validate([
            'firstName' => 'nullable|string',
            'lastName' => 'nullable|string',
            'username' => 'required|string|min:3,max:10|unique:users,username',
            'email' => ['required|email'],
            'contact' => ['required|number']
        ]);
        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $img = 'profile' . '.' . $image->getClientOriginalExtension();
            $location = 'images/profile/' . $img;

            @unlink('images/profile/' . Auth::user()->image);
            Image::make($image)->save($location);
        }

        $data['user'] = $user->update([
            'role_id' => Role::where('name', 'admin')->first()->id,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $user->profile()->update([
            'first_name' => $request->firstName,
            'last_name' => $request->lastName,
            'image' => $img ?? null,
        ]);
        $data['user'] = User::with('profile')->whereId($user->id)->first();
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
}
