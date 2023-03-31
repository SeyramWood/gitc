<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\CasesController;
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
//Route::get('/signup', [PageController::class, 'signup']);
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
    Route::get('/view/users/{user}', 'userDetails');
    Route::post('/users/{user}', 'update')->name('user.update');
    Route::delete('/users/{user}', 'destroy');
    Route::post('/login', 'login')->name('user.login');
    Route::post('/logout', 'logout');
    Route::get('/users/role/{user}', 'updateUserRole');
    Route::get('/edit/users/{user}', 'getUpdateForm');
    Route::get('/delete/users/{user}', 'getDeleteForm');
    Route::get('/admins/user/{user}', 'adminUpdateUserProfile');


});

// Auth user route
Route::controller(CasesController::class)->group(function () {
    Route::get('/ourcases', 'index')->name('cases.files.index');
    Route::post('/ourcases', 'store');
    Route::get('/edit/ourcase/{ourcase}', 'getEditForm');
    Route::post('/ourcases/{ourcase}', 'update')->name('case.update');
    Route::get('/view/ourcase/{ourcase}', 'Details');
    Route::get('/delete/ourcase/{ourcase}', 'getDeleteForm');
    Route::delete('/ourcases/{ourcase}', 'destroy')->name('case.delete');
});



// Auth user route
Route::controller(ProfileController::class)->group(function () {
    Route::patch('/users/password', 'userUpdatePassword');
    Route::patch('/users/profile', 'updateUserProfile');
    Route::get('/profiles', 'updateUserProfile');
});

// FileManagement  route
Route::controller(FileManagementController::class)->group(function () {
    Route::get('/pdf/files', 'index')->name('pdf.files.index');
    Route::post('/files', 'store');
    Route::get('/edit/files/{file}', 'getFileEditForm');
    Route::post('/files/{file}', 'updateFile')->name('file.update');
    Route::get('/view/files/{file}', 'fileDetails');
    Route::get('/delete/files/{file}', 'getFileDeleteForm');
    Route::delete('/files/{file}', 'destroy')->name('file.delete');
    Route::post('/albums', 'album')->name('user.albums');
    Route::get('/albums', 'getAlbum');
    Route::delete('/albums/{album}', 'destroyAlbum');
    Route::patch('/albums/{album}', 'updateAlbum');
    Route::get('/gallaries', 'allgallary');
    Route::post('/gallaries/{gallary}', 'destroyGallary');
});

// Album  route
Route::controller(AlbumController::class)->group(function () {
    Route::post('/albums', 'store')->name('album.store');
    Route::get('/albums', 'index')->name('album.index');
    Route::get('/albums/{album}', 'getAlbumGallary')->name('user.album.gallaries');
    Route::get('/edit/album/{album}', 'getEditForm');
    Route::post('/albums/{album}', 'update')->name('album.update');
//    Route::get('/view/album/{album}', 'Details');
    Route::get('/delete/album/{album}', 'getDeleteForm');
    Route::delete('/album/{album}', 'destroy')->name('album.delete');
    Route::delete('/albums/{album}', 'destroyAlbum');
    Route::get('/album/{album}', 'getAlbumGallary')->name('album.gallaries');
    Route::get('/add/gallaries/{album}', 'getAddToGallaryForm');
    Route::post('/add/gallaries/{album}', 'adToGallary')->name('album.gallaries');


});

// Enquiries  route
Route::controller(EnquiryController::class)->group(function () {
    Route::get('/files', 'index')->name('users.files');
    Route::post('/enquiries', 'store')->name('contact.store');
    Route::get('/enquiries', 'getAllEnquiries')->name('contact.store');
});



