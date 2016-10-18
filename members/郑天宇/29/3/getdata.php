<?php
  header("Conten-type:");
  $start = $_GET["start"];
  $len = $_GET["len"];
  $arr = array();

  for($i = 0; $i < $len;$i++){
		array_push($arr,$start+$i);
	}
  $json=array("status"=>1,"data"=>$arr);
  echo json_encode($json);

 ?>
