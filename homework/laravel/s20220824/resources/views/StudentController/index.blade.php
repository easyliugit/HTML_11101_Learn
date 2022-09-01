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
    <table class="table">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
        @foreach ($data as $item)
        <tr>
          <td>{{$item["id"]}}</td>
          <td>{{$item["name"]}}</td>
          <td>{{$item["chinese"]}}</td>
          <td>{{$item["english"]}}</td>
        </tr>
        @endforeach
      </tbody>
    </table>
  </div>
</body>
</html>