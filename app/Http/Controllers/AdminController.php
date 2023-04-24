<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Image;
use App\Models\User;
use App\Traits\AdminTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\Routing\Loader\Configurator\Traits\AddTrait;

class AdminController extends Controller
{

use AdminTrait;
public function all(Request $request)
{
    return $this->getUsers((int)$request->get("offset"), (int)$request->get("limit"));
}


public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string',
        'email' => 'required|unique:users,email',
        'password' => 'required',
    ]);

    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
    ]);

    return $this->getUser($user->id);

}


    public function update(Request $request, User $user)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email,'.$user->id,
        ]);

        User::findOrFail($user->id)->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return $this->getUser($user->id);
    }


    public function delete(User $user)
    {
        $user = User::findOrFail($user->id);
        $user->delete();
        return response()->json([
            "message" => "User deleted",
            'status' => true
        ], 200);

    }






}
