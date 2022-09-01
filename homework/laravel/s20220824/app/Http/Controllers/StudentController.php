<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //
    public function index()
    {
        $data=Student::all();
        // dd($data);

        // foreach (Student::all() as $student) {
        //     echo $student->name;
        // }

        // ...
        // return view('StudentController.index');
        return view('StudentController.index',["data"=>$data]);
    }
    public function getByUrl(Request $request,$user, $num)
    {
        dd($request);
        // ...
        // echo "User= $user ;Num= $num";

        $data=[$user, $num];
        dd($data);
    }
    public function create()
    {
        $data=Student::all();
        return view('StudentController.create',["data"=>$data]);
    }
    public function store(Request $request)
    {
        // dd($request->all());

        $student = new Student();
 
        $student->name = $request->name;
        $student->chinese = $request->chinese;
        $student->english = $request->english;
        $student->math = $request->math;
 
        $student->save();

        return redirect()->route("students.index");
    }
}
