<?php
    
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";


$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
    echo "$value <br>";
}

foreach ($variable as $key => $value) {
    # code...
}

$studentsArr = [
    "key" => "value",
    "student1" => "amy",
    "student2" => "bob",
    "student3" => "cat",
];

$studentsArr['student1'];

foreach ($studentsArr as $key => $value) {
    //key => studnet1
    //value =>amy
}
