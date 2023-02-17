<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Role;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Image;
use App\Models\User;
use App\Rules\MatchOldPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;



class AdminController extends Controller
{


    public function index()
    {
        $data['users'] = User::with('profile')->orderByDesc('create_at')->get();
        if ($data) {
            return response()->json([
                'message' => "Record found successful",
                'data' => $data,
                'code' => 200
            ],200);
        } else {
            return response()->json([
                'message' => "No record found",
                'code'=>404
            ],404);
        }
    }

    public function store(Request $request)
    {

                $request->validate([
                    'username' => 'required|string|min:3,max:10|unique:users,username',
                    'password' => ['required', Password::min(8)->mixedCase()],
                    'email' => ['required|email'],
                    'contact' => ['required|number']
                ]);
                try {
                    DB::transaction(function () use ($request) {

                        $data['user'] = User::create([
                            'role_id' => Role::where('name', 'admin')->first()->id,
                            'username' => $request->username,
                            'email' => $request->email,
                            'password' => Hash::make($request->password),
                        ]);

                        $data['profile'] =  Profile::create([
                            'user_id' => $data['user']->id,

                        ]);
                        $token = $data['user']->createToken('main')->plainTextToken;
                        if ($data) {
                            return response()->json([
                                'message' => "User Created ",
                                'data' => $data,
                                'token' => $token,
                                'code' => 200
                            ],200);
                        } else {
                            return response()->json([
                                'message' => "Request  unsuccessful ",
                                'code'=>400
                            ],400);
                        }
                    });

                } catch (\Throwable $th) {

                    return Redirect::route('register')
                        ->withErrors(['accountError' => "We couldn't create your account, please try again."]);
                }
        }


    public function updateUserRole(User $user)
    {
        $new_role = Role::whereNotIn('id', [request()->role])->first();
        $user->role_id = $new_role->id ?? $user->role_id;
        $user->save();
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

    public function saveUserPassword($request, User $user)
    {
        $request->validate([
            'current_password' => ['required', new MatchOldPassword],
            'password' => 'required|confirmed|min:8',
        ]);
      $data['user'] = $user->update([
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




    public function deleteUser(User $user)
    {
        $user->delete();
        if ($user) {
            return response()->json([
                'message' => "User deleted ",
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

    public function login(Request $request)
    {

        $credentials = $request->validate([
            'userName' => 'required|string',
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

        $userCheck = User::where('userName', $request->userName)->count();
        if ($userCheck > 0) {
            $user = User::where('userName', $request->userName)->first();

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
                return response([
                    'user' => $user,
                    'token' => $token,
                    'message' => 'Login successful',
                    'code' => 200
                ], 200);
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
            return response([
                'message' => 'Logout Successfully',
                'code' => 499
            ]);
        } else {
            return response()->json([
                "message" => "Please Login First",
                "code" => 403,

            ], 403);
        }
    }

}
