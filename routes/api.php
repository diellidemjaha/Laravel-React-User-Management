<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;

Route::get('users', [UserController::class, 'index']);
Route::post('/add-user', [UserController::class, 'store']);
Route::put('/edit-user/{id}', [UserController::class, 'edit']);
Route::delete('/delete-user/{id}', [UserController::class, 'destroy']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
