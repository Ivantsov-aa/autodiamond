<?php

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Http\Controllers\Api\OneC\LoginController;
use App\Http\Controllers\Api\OneC\LogoutController;
use Illuminate\Support\Facades\Route;

Route::post('/login', LoginController::class)->name('login');

Route::middleware(['auth:sanctum', 'role:' . PredefinedRolesEnum::ADMIN->value])
    ->group(function () {
        Route::post('/logout', LogoutController::class)->name('logout');


    });
