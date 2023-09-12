<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatabaseTestController;
use App\Http\Controllers\PageController;
 
Route::get('/', [PageController::class, 'home']);
Route::get('/addUser', [PageController::class, 'addUser']);
 
Route::get('/test-database', [DatabaseTestController::class, 'test']);
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/test-database', 'DatabaseTestController@test');