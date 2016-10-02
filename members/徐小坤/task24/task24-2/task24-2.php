<?php
  header("Content-type: ");
  $start = $_GET['start'];
  $len = $_GET['len'];
  $ret = $start + $len;
  echo json_encode($ret);
?>
