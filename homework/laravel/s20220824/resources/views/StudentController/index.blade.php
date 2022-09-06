<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    {{-- 決對路徑 --}}
    {{-- <link rel="stylesheet" href="/laravel/public/css/style.css"> --}}
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    {{-- 相對路徑 --}}
    <title>student_index</title>
</head>
<body>
        
<div class="container mt-3">
    <h2>student_index page</h2>
    <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>            
    <a href="{{route("students.create")}}" class="btn btn-success">新增</a>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>chinese</th>
          <th>english</th>
          <th>math</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        @foreach ($data as $item)
        <tr>
          <td>{{$item["id"]}}</td>
          <td>{{$item["name"]}}</td>
          <td>{{$item["chinese"]}}</td>
          <td>{{$item["english"]}}</td>
          <td>{{$item["math"]}}</td>
          <td>
            <a href="{{route('students.edit', ['student' => $item->id])}}" class="mb-3 btn btn-warning" role="button">編輯</a>
            <a href="{{route('students.create')}}" class="mb-3 btn btn-danger" role="button">刪除</a>
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
  </div>
</body>
</html>