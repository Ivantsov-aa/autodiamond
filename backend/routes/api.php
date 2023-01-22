<?php

use App\Helpers\Constants\PredefinedRolesEnum;
use App\Http\Controllers\Api\CarController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SignUpController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login', LoginController::class)->name('login');

Route::post('/signup', SignUpController::class)->name('signup');

Route::middleware(['auth:sanctum', 'role:' . PredefinedRolesEnum::USER->value])
    ->group(function () {
        Route::post('/logout', LogoutController::class)->name('logout');

        Route::prefix('user')
            ->name('user.')
            ->controller(UserController::class)
            ->group(function () {
                Route::get('/', 'index')->name('index');
            });
    });

Route::prefix('products')
    ->name('products.')
    ->controller(ProductController::class)
    ->group(function () {
        Route::get('/', 'getProductsByCarBrandAndModel')->name('getProductByBrandAndModel');

        Route::get('/categories', 'getCategoriesByCarBrandAndModel')->name('getCategoriesByBrandAndModel');

        Route::get('/search', 'search')->name('search');

        Route::get('/{article}', 'getProductByArticle')->name('getProductByArticle');
    });

Route::prefix('cars')
    ->name('cars.')
    ->controller(CarController::class)
    ->group(function () {
        Route::get('/brands', 'brands')->name('brands');

        Route::get('/models', 'models')->name('models');

        Route::get('/engines', 'engines')->name('engines');
    });

