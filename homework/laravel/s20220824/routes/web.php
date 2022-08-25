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

Route::get('/admin_index', function () {
    return view('admin.index');
});

Route::get('/oop', function () {
    return view('oop');
});

Route::get('/f3_url', function () {
    return view('f3_view');
});

Route::get('/f55688', function () {
    $myArr = [1,2,3,4,5];
    $myName = 'kai';
    foreach ($myArr as $key => $value) {
        # code...
        echo $value."<br>";
    }
    echo $myName;
    dd($myArr);
    // return view('f1');
});

Route::get('/f1', function () {
    return view('f1');
});

Route::get('/f2', function () {
    return view('f2');
});

Route::get('/', function () {
    return view('welcome');
});
