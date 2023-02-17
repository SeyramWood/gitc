<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Auth user route
    Route::controller(AdminController::class)->group(function () {
        Route::get('/users', 'index');
        Route::get('/user/{user}', 'userDetails');
        Route::delete('/user/{user}', 'deleteUser');
        Route::post('/user/logout', 'logout');
        Route::patch('/user/password/{user}', 'autocompleteUsers');
        Route::patch('/user/role/{user}', 'updateUserRole');
        Route::get('/autocomplete/users', 'saveUserPassword');

    });

    // Profile  route
    Route::controller(AdminController::class)->group(function () {
        Route::patch('/user/{user}', 'UpdateUserProfile');

    });
});


// Auth user route required not middleware
Route::controller(AdminController::class)->group(function () {
    Route::post('/users', 'store');

});