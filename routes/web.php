<?php

use App\Http\Controllers\PageController;
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


Route::get('/', [PageController::class, 'index']);
Route::get('/services', [PageController::class, 'service']);
Route::get('/service/subsidy', [PageController::class, 'ServiceSubsidy']);
Route::get('/service/saufgard', [PageController::class, 'ServiceSaufgard']);
Route::get('/service/research', [PageController::class, 'ServiceResearch']);
Route::get('/service/dispute', [PageController::class, 'ServiceDispute']);
Route::get('/service/dumping', [PageController::class, 'ServiceDumping']);
Route::get('/about', [PageController::class, 'about']);
Route::get('/message', [PageController::class, 'aboutMessage']);
Route::get('/story', [PageController::class, 'aboutStory']);
Route::get('/contact', [PageController::class, 'contact']);
Route::get('/publication', [PageController::class, 'publication']);
