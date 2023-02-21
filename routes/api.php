<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\FileManagementController;
use App\Http\Controllers\ProfileController;
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
        Route::post('/users', 'store');
        Route::get('/users/{user}', 'userDetails');
        Route::delete('/users/{user}', 'deleteUser');
        Route::post('/users/logout', 'logout');
        Route::patch('/users/role/{user}', 'updateUserRole');
        Route::patch('/admins/user/{user}', 'adminUpdateUserProfile');


    });


    // Auth user route
    Route::controller(ProfileController::class)->group(function () {
        Route::patch('/users/password', 'userUpdatePassword');
        Route::patch('/users/profile', 'updateUserProfile');
        Route::get('/profiles', 'updateUserProfile');
    });

    // FileManagement  route
    Route::controller(FileManagementController::class)->group(function () {
        Route::get('/files', 'index');
        Route::post('/files', 'store');
        Route::patch('/files/{file}', 'UpdateFile');
        Route::delete('/files/{file}', 'destroy');

    });

});



// Enquiries route
Route::controller(EnquiryController::class)->group(function () {

    Route::post('/enquiries','enguiry');

});

