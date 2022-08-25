<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;

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

Route::get('/test', [TestController::class, 'testFun']);

//admin prefix
Route::prefix('admin')->group(function () {
    Route::get('/studnet', function () {
        return view('admin.studnet');
    });    
    Route::get('/product', function () {
        return view('admin.product');
    });
});


// Route::get('/admin/studnet', function () {
//     return view('admin.studnet');
// });

// Route::get('/admin/product', function () {
//     return view('admin.product');
// });



// url/{變數}
// 練習二
// /eat/name/4
// view
// 訂位者大名 : name
// 訂位者人數 : num

Route::get('/eat/{name}/{num}', function ($name,$num) {

    $data = [
        'name' => $name,
        'num' => $num
    ];

    // return view('f1', ['name' => $name ,'num' => $num]);
    return view('eat', ['data' => $data]);

});

Route::get('/f1/{name}/{num}', function ($name,$num) {
    $str="Hello World {$name} , {$num}";
    return view('f1',['str123'=>$str]);
});

// php artisan route:list
// 兩個變數
Route::get('/greeting/{name}/{num}', function ($name,$num) {
    return "Hello World {$name} , {$num}";
});
// 一個變數
Route::get('/greeting/{name}', function ($name) {
    return "Hello World {$name}";
});
// 沒有變數
Route::get('/greeting', function () {
    return 'Hello World';
});

Route::get('/admin', function () {
    return view('admin.index');
});

Route::get('/oop', function () {
    return view('oop');
});

//路由頁面 帶位

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
