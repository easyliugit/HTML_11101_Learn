<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //
    public function index()
    {
        // dd($data);
    
        // foreach (Student::all() as $student) {
        //     echo $student->name;
        // }
    
        // ...
        // return view('StudentController.index');

        // $data=Student::all();
        // return view('StudentController.index',["data"=>$data]);

        //排序資料表方法
        // get => fetchAll 多筆資料
        $data2=Student::orderBy("id","desc")->get();
        return view('StudentController.index',["data"=>$data2]);
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
    public function edit($id)
    {
        //
        // dd('edit ok');
        // dd($id);
        // first => fetch 單筆資料
        $data = Student::where('id',$id)->first();
        $data2=Student::orderBy("id","desc")->get();
        // dd($data);
        return view('StudentController.edit',["data"=>$data,"data2"=>$data2]);

       //select one data
       //retunr view data
    }
    public function update(Request $request, $id)
    {
        //
       $data = Student::find(1);
       dd($data);

        $data->name = 'Paris to London';

        $data->save();
    }
}
