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
        if (auth()->user()){
            $users = User::with('profile')->orderByDesc('created_at')->get();
            if ($users) {
                return Inertia::render('Backend/User', [
                    'users' => $users
                ]);
            }
        }else{
            // return redirect()->route('home')->with('message', 'error, Not Authenticated.');
        }


    }


    public function store(Request $request)
    {


//        dd($request);
        if (auth()->user()){
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

                return redirect()->route('user.dashboard')->with('message', 'Success, User Created Successfully.');
            });

        }else{
            return redirect()->route('home')->with('error', 'fail, Not Authenticated.');
        }


        }



    public function getUpdateForm(User $user)
    {
if (auth()->user()){
    $user = User::findOrFail($user->id);
    return Inertia::render('Backend/EditUser', [
        'id' => $user->id,
        'username' => $user->username,
        'email' => $user->email,
        'contact' => $user->contact

    ]);
}
    else{
        return redirect()->route('home')->with('error', 'fail, Not Authenticated.');
    }

    }


    public function update(Request $request, User $user)
    {
        if (auth()->user()){
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

            return redirect()->route('user.dashboard')->with('message', 'Success, User Updated Successfully.');

        }else{
            return redirect()->route('home')->with('error', 'fail, Not Authenticated.');
        }


    }


    public function userDetails(User $user)
    {
        if (auth()->user()){
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
        }else{
            return redirect()->route('home')->with('error', 'fail, Not Authenticated.');
        }




    }

    public function getDeleteForm(User $user)
    {
        if (auth()->user()){
            $user = User::findOrFail($user->id);
            return Inertia::render('Backend/DeleteUser', [
                'id' => $user->id,
                'username' => $user->username,
                'email' => $user->email,
                'contact' => $user->contact
            ]);
        }else{
            return redirect()->route('home')->with('error', 'fail, Not Authenticated.');
        }


    }
    public function destroy(User $user)
    {
        if (auth()->user()){
            $user = User::findOrFail($user->id);

            $user->delete();
            return redirect()->route('user.dashboard')->with('message', 'Success, User Deleted Successfully.');
        }else{
            return redirect()->route('home')->with('error', 'fail, Not Authenticated.');
        }

    }

    public function login(Request $request)
    {
//   dd($request);
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

                return redirect()->route('user.login')->with('error', 'Fail, Password Incorrect.');
            }

            if (Hash::check($request->password, $user->password)) {

                $remember = $credentials['remember'] ?? false;
                unset($credentials['remember']);

                if (!Auth::attempt($credentials, $remember)) {

                    return redirect()->route('user.login')->with('error', 'Fail, Password Incorrect.');
                }
                // todo to be uncommented soon for device authentication still

                $user = Auth::user();

                return redirect()->route('user.dashboard')->with('message', 'Success, User Login Successfully.');
            }

        }
    }


    public function logout()
    {

        if (auth()->id()) {
            $user = Auth::user();

            Auth::logout();
            request()->session()->invalidate();
            // response to this message if successful logout
            return redirect()->route('home');
        }
    }



}
