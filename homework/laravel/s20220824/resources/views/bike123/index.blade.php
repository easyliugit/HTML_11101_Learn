<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>bike123</title>
</head>
<body>
    <h1>bike123 page</h1>

    @php
    // dd($data);
    print_r($data);
    @endphp
    <hr>
    @foreach ($data["myArr"] as $item)
        <a href="#">{{$item}}</a>
    @endforeach

</body>
</html>