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
<<<<<<< HEAD
Route::get('/service/dumping', [PageController::class, 'ServiceDumping']);
Route::get('/service/tariff', [PageController::class, 'ServiceTariff']);
=======

Route::get('/service/dumping', [PageController::class, 'ServiceDumping']);
Route::get('/service/tariff', [PageController::class, 'ServiceTariff']);
Route::get('/service/dispute', [PageController::class, 'ServiceDispute']);

>>>>>>> feature/backend
Route::get('/about', [PageController::class, 'about']);
Route::get('/message', [PageController::class, 'aboutMessage']);
Route::get('/story', [PageController::class, 'aboutStory']);
Route::get('/publish', [PageController::class, 'publish']);
Route::get('/contact', [PageController::class, 'contact']);
Route::get('/publications', [PageController::class, 'publication']);
Route::get('/faq', [PageController::class, 'Faq']);
Route::get('/resources', [PageController::class, 'resources']);
Route::get('/gallery', [PageController::class, 'gallery']);
// resources
Route::get('/customscases', [PageController::class, 'customsFiles']);
Route::get('/measurescases', [PageController::class, 'measuresFiles']);
Route::get('/subsidycases', [PageController::class, 'subsidyFiles']);
Route::get('/disputescases', [PageController::class, 'disputesFiles']);

// Enquiries  route
Route::controller(EnquiryController::class)->group(function () {
    Route::get('/files', 'index')->name('users.files');
    Route::post('/enquiries', 'store')->name('contact.store');
    Route::get('/enquiries', 'getAllEnquiries')->name('contact.store');
});



