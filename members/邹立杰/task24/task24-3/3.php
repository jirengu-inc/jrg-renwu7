<?php
  $uname = $_GET["username"];
  if($uname == "hunger"){
  	$status = 1;
  }else{
  	$status = 0;
  }
  echo json_encode($status);





?>