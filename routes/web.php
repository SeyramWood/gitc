<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\FileManagementController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/config', function ()
{

    Artisan::call("config:clear");
    Artisan::call("cache:clear");
    Artisan::call("config:cache");

    return "Done";

});

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/services', [PageController::class, 'service'])->name('services');
Route::get('/service/subsidy', [PageController::class, 'ServiceSubsidy']);
Route::get('/service/safeguard', [PageController::class, 'ServiceSafeguard']);
Route::get('/service/research', [PageController::class, 'ServiceResearch']);
Route::get('/service/dispute', [PageController::class, 'ServiceDispute']);

Route::get('/service/dumping', [PageController::class, 'ServiceDumping']);
Route::get('/service/tariff', [PageController::class, 'ServiceTariff']);

Route::get('/service/dispute', [PageController::class, 'ServiceDispute']);
Route::get('/login', [PageController::class, 'sign']);
Route::get('/signup', [PageController::class, 'signup']);
//Route::get('/dashboard', [PageController::class, 'dashboard'])->name('user.dashboard');
Route::post('/create', [AdminController::class, 'store']);

Route::get('/about', [PageController::class, 'about']);
Route::get('/message', [PageController::class, 'aboutMessage']);
Route::get('/story', [PageController::class, 'aboutStory']);
Route::get('/publish', [PageController::class, 'publish']);
Route::get('/contact', [PageController::class, 'contact']);
Route::get('/publications', [PageController::class, 'publication']);
Route::get('/faq', [PageController::class, 'Faq']);
Route::get('/resources', [PageController::class, 'resources'])->name("resources");

// Auth user route
Route::controller(AdminController::class)->group(function () {
    Route::get('/users', 'index')->name("dashboard.users");
    Route::post('/users', 'store');
    Route::get('/users/{user}', 'userDetails');
    Route::delete('/users/{user}', 'deleteUser');
    Route::post('/users/login', 'login');
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
    Route::get('/files', 'index')->name('users.files');
    Route::post('/files', 'store');
    Route::patch('/files/{file}', 'updateFile');
    Route::delete('/files/{file}', 'destroy');
    Route::post('/albums', 'album')->name('user.albums');
    Route::get('/albums', 'getAlbum');
    Route::get('/albums/{album}', 'getAlbumGallary')->name('user.album.gallaries');
    Route::delete('/albums/{album}', 'destroyAlbum');
    Route::patch('/albums/{album}', 'updateAlbum');
    Route::post('/gallaries', 'gallary')->name('user.gallaries');
    Route::get('/gallaries', 'allgallary');
    Route::post('/gallaries/{gallary}', 'destroyGallary');
});

// Enquiries  route
Route::controller(EnquiryController::class)->group(function () {
    Route::get('/files', 'index')->name('users.files');
    Route::post('/contacts', 'store')->name('contact.store');
});


