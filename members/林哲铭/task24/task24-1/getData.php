<?php
	$username = $_GET['username'];
	if($username === 'xiaoming'){
		$ret = array('username'=>'xiaoming', 'password'=>'abcd1234');
	} else {
		$ret = "error.....";
	}
	echo json_encode($ret);
?>