<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index blade</title>
</head>
<body>
    hello index blade :))<br>
    <br>
    <a href="/laravel/public/bikes/create">create btn</a><br>
    <a href="{{route('bikes.create')}}">create btn2</a><br>
    <br>
    <a href="/laravel/public/bikes/123/edit">edit btn</a><br>
    <a href="{{route('bikes.edit',['bike' => 123])}}">edit btn2</a><br>
</body>
</html>