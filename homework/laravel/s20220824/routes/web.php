<?php

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

//路由頁面 帶位

Route::get('/f1', function () {
    return view('f1');
});

Route::get('/f2', function () {
    return view('f2');
});

Route::get('/', function () {
    return view('welcome');
});
