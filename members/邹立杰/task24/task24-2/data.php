<?php
	 header("Content-type: ");
	 $cur = $_GET["start"];
	 $len = $_GET["len"];
	 $ret = $cur + $len;
	 echo json_encode($ret);
?>