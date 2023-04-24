<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CasesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PublicationController;
use Illuminate\Support\Facades\Auth;
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

Route::controller(AuthController::class)->prefix("auth")->group(function () {
    Route::get('/login', 'index')->name("auth.index");
    Route::post('/login', 'authenticate')->name("authenticate");
    Route::post('/logout', 'logout')->name("logout");

});


Route::controller(DashboardController::class)->prefix("dashboard")->group(function () {
    Route::get('/', 'index')->name("dashboard");
    Route::get('/publications', 'publications')->name("dashboard.publications");
    Route::get('/cases', 'cases')->name("dashboard.cases");
    Route::get('/albums', 'albums')->name("dashboard.albums");
    Route::get('/users', 'users')->name("dashboard.users");
});

Route::controller(PublicationController::class)->prefix("dashboard/publications")->group(function () {
    Route::get('/all', 'all');
    Route::post('/', 'store');
    Route::post('/{publication}', 'update');
    Route::delete('/{publication}', 'delete');
});

Route::controller(CasesController::class)->prefix("dashboard/cases")->group(function () {
    Route::get('/all', 'all');
    Route::post('/', 'store');
    Route::post('/{case}', 'update');
    Route::delete('/{case}', 'delete');
});

Route::controller(AlbumController::class)->prefix("dashboard/albums")->group(function () {
    Route::get('/all', 'all');
    Route::post('/', 'store');
    Route::put('/{album}', 'update');
    Route::delete('/{album}', 'delete');
});

Route::controller(GalleryController::class)->prefix("dashboard/gallery")->group(function () {
    Route::post('/', 'store');
    Route::post('/{gallery}', 'update');
    Route::delete('/{gallery}', 'delete');
    Route::delete('/{album}/all', 'deleteAll');
});

Route::controller(AdminController::class)->prefix("dashboard/users")->group(function () {
    Route::get('/all', 'all');
    Route::post('/', 'store');
    Route::put('/{user}', 'update');
    Route::delete('/{user}', 'delete');

});

