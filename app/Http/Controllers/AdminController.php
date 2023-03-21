<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Image;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class AdminController extends Controller
{


    public function index()
    {
        $users = User::with('profile')->orderByDesc('created_at')->get();
        if ($users) {
            return Inertia::render('Backend/User', [
                'users' => $users
            ]);

        } else {
            return redirect()->route('user.dashboard')->with('success', 'Success, your store have been updated.');

        }
    }


    public function store(Request $request)
    {

                $request->validate([
                    'username' => 'required|string|min:3,max:10|unique:users,username',
                    'password' => 'required',
                    'email' => 'required|unique:users,email',
                    'contact' => 'required',
                ]);

                    DB::transaction(function () use ($request) {

                        $data['user'] = User::create([
                            'username' => $request->username,
                            'email' => $request->email,
                            'contact' => $request->contact,
                            'password' => Hash::make($request->password),
                        ]);

                        $data['profile'] =  Profile::create([
                            'user_id' => $data['user']->id,

                        ]);

                    });


        }


    public function updateUserRole(User $user)
    {
        $new_role = Role::whereNotIn('id', $user->id)->first();
        $user->update();
        if ($user) {
            return response()->json([
                'message' => "User role  updated ",
                'data' => $user,
                'code' => 200
            ],200);
        } else {
            return response()->json([
                'message' => "Request  unsuccessful ",
                'code'=>400
            ],400);
        }
    }

    public function getUpdateForm(User $user)
    {

        $user = User::findOrFail($user->id);
        return Inertia::render('Backend/EditUser', [
            'id' => $user->id,
            'username' => $user->username,
            'email' => $user->email,
            'contact' => $user->contact
        ]);

    }


    public function update(Request $request, User $user)
    {
        $this->validate($request, [
            'username' => 'required|max:35',
            'email' => 'required|email|unique:users,email,'.$user->id,
            'contact' => 'required'
        ]);

        User::findOrFail($user->id)->update([
            'username' => $request->username,
            'email' => $request->email,
            'contact' => $request->contact,
        ]);
        return redirect()->route('dashboard.users');

    }
    public function AdminUpdateUserProfile(Request $request, User $user)
    {
        $request->validate([
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'username' => 'required|string|min:3,max:10|unique:users,username',
            'email' => ['required|email'],
            'contact' => ['required|number']
        ]);

        $data['user'] = $user->update([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $user->profile()->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'image' =>  Null,
        ]);
        $data['user'] = User::with('profile')->whereId($user->id)->first();
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

    public function userDetails(User $user)
    {

        $user = User::with('profile')->whereId($user->id)->first();

            return Inertia::render('Backend/ViewUser', [
                'id' => $user->id,
                'username' => $user->username,
                'email' => $user->email,
                'contact' => $user->contact,
                'first_name' => $user->profile->first_name,
                'last_name' => $user->profile->last_name,
                'photo' => $user->profile->image,
            ]);



    }

    public function getDeleteForm(User $user)
    {

        $user = User::findOrFail($user->id);
        return Inertia::render('Backend/DeleteUser', [
            'id' => $user->id,
            'username' => $user->username,
            'email' => $user->email,
            'contact' => $user->contact
        ]);

    }
    public function destroy(User $user)
    {
        $user = User::findOrFail($user->id);

        $user->delete();
        return redirect()->route('dashboard.users');
    }

    public function login(Request $request)
    {

        $credentials = $request->validate([
            'username' => 'required|string',
            'password' => ['required'],
            'remember' => 'boolean'
        ]);

        // check if userName does not contain any white space or special character
        if (!preg_match("/^[A-Za-z0-9_]*$/", $request->userName)) {
            return response([
                'message' => 'Username format invalid. Accepted inputs [a-z0-9_]',
                'code' => 403
            ], 403);
        }

        $userCheck = User::where('username', $request->username)->count();
        if ($userCheck > 0) {
            $user = User::where('username', $request->username)->first();

            // check if account has not been disabled

            // return Hash::check($request->password, $user->password);
            // Load user from database
            if ($user && !Hash::check($request->password, $user->password)) {

                return response()->json([
                    "message" => 'The Provided password credentials are not correct',
                    "code" => 403,
                ], 403);
            }

            if (Hash::check($request->password, $user->password)) {

                $remember = $credentials['remember'] ?? false;
                unset($credentials['remember']);

                if (!Auth::attempt($credentials, $remember)) {

                    return response()->json([
                        'messages' => 'The Provided credentials are not correct',
                        "code" => 403
                    ], 403); //bad request or invalide
                }
                // todo to be uncommented soon for device authentication still

                $user = Auth::user();
                $token = $user->createToken('main')->plainTextToken;

                $user = User::whereId($user->id)->with('profile')->first();
                return Redirect::route('user.dashboard');
            }
        } else {

            return response([
                'message' => 'User Name Incorrect',
                'code' => 409
            ],409);
        }
    }


    public function logout()
    {

        if (request()->user('sanctum')) {
            $user = Auth::user();
            // Revoke the token that was used to authenticate the current request...
            $user->currentAccessToken()->delete();
            // response to this message if successful logout
            return redirect()->route('home');
        }
    }

    // Auto complete on user name

    public function search(Request $request)
    {

        if (request()->user('sanctum')) {
            $data['users'] = User::where('username', 'LIKE', "%{$request->username}%")->get();

            //checking if request exit
            if ($data) {
                return response()->json([
                    'data' => $data,
                    'message' => "Record found",
                    'code' => 200,
                ], 200);
            } else {
                return response()->json([
                    'message' => "No record found",
                    'code' => 404,
                ], 404);
            }
        } else {
            return response()->json([
                "message" => "Please Login First",
                "code" => 403,

            ], 403);
        }
    }

}
