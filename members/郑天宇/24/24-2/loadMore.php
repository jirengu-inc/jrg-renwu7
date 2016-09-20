<?php
	header("Content-type: ");
    $start = $_GET['start']; //2
    $len = $_GET['len'];  //5
    $items = array();

    for($i = 0; $i < $len; $i++){
        array_push($items, '内容' . ($start+$i+1));
    }
    echo json_encode($items);
?>
