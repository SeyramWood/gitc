<?php

use App\Http\Controllers\PageController;
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

Route::get('/', [PageController::class, 'index']);
Route::get('/services', [PageController::class, 'service']);
Route::get('/service/subsidy', [PageController::class, 'ServiceSubsidy']);
Route::get('/service/safeguard', [PageController::class, 'ServiceSafeguard']);
Route::get('/service/research', [PageController::class, 'ServiceResearch']);
Route::get('/service/dispute', [PageController::class, 'ServiceDispute']);
Route::get('/service/dumping', [PageController::class, 'ServiceDumping']);
Route::get('/about', [PageController::class, 'about']);
Route::get('/message', [PageController::class, 'aboutMessage']);
Route::get('/story', [PageController::class, 'aboutStory']);
Route::get('/publish', [PageController::class, 'publish']);
Route::get('/contact', [PageController::class, 'contact']);
Route::get('/publications', [PageController::class, 'publication']);
Route::get('/faq', [PageController::class, 'Faq']);
Route::get('/resources', [PageController::class, 'resources']);

