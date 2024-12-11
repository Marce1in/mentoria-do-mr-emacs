<?php

use App\Http\Controllers\LivroController;
use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'App\Http\Controllers'], function() {
    Route::apiResource('livros', LivroController::class);
});

