<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except("logout");
    }

    public function index(Request $request)
    {
        return Inertia::render('Backend/Auth/Index');

    }

    public function authenticate(Request $request)
    {

        $request->validate([
            'email' => 'required|string',
            'password' => 'required|min:8',
        ]);

        if (Auth::attempt($request->all(), true)) {
            $request->session()->regenerate();
            return redirect()->route('dashboard')->with("flash", "welcome back");
        }

        return redirect()->route('auth.index')->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);

    }


    public function logout(Request $request)
    {

        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('auth.index');

    }
}
