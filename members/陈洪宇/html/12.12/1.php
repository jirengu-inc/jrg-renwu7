<?php
    $startNum = $_GET['start'];
    $addNum = $_GET['length'];
    $newLi = array();
    for ($i=0; $i <$addNum; $i++) {
    array_push($newLi,($startNum + $i+1));
    }
    echo json_encode($newLi);
?>
