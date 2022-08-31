<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    //
    public function index()
    {
        // ...
        return view('StudentController.index');
    }
    public function getByUrl(Request $request,$user, $num)
    {
        dd($request);
        // ...
        echo "User= $user ;Num= $num";

        $data=[$user, $num];
        dd($data);
    }
}
