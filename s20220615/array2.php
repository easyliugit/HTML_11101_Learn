<?php

    //index array
    $myArr = [1,2,3];

    //關聯式array Associative Array
    $myArr = [
        "a" => "amy",
        "b" => "bob",
        "c" => "cat",
        "d" => "dog"
    ];

    

    // foreach
    foreach ($myArr as $key => $value) {
        print_r($key);
        print_r($value);
    };

    // php 多維陣列
    $students = [
        [
            'id' => 1,
            'name' => 'amy',
            'tel' => '0911-111-111'
        ],
        [
            'id' => 2,
            'name' => 'bob',
            'tel' => '0922-222-222'
        ],
    ];

    // function
    function myFunction()
    {
        print_r('hello myfunction');
    }
    myFunction();
