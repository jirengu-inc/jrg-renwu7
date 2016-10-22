<?php
	header("Content-type: "); 
	$username = $_GET['un'];
	$password1 = $_GET['psw1'];
	$password2 = $_GET['psw2'];
	
	function user($username){
		if ($username == "hunger"){
		$ret = array("status"=>2);
		}
		elseif (!preg_match("/^\w{3,10}$/u", $username)){
			$ret = array("status"=>1);
		}
		else{
			$ret = array("status"=>0);
		}
	echo json_encode($ret);
	};
	
	function pwd1($password1){
		if (preg_match("/^\w{6,15}$/u", $password1)){
			if (preg_match("/^[a-z]{6,15}$/u",$password1)){
				$ret = array("status"=>1);
			}
			elseif (preg_match("/^[A-Z]{6,15}$/u",$password1)){
				$ret = array("status"=>1);
			}
			elseif (preg_match("/^[0-9]{6,15}$/u",$password1)){
				$ret = array("status"=>1);
			}
			elseif (preg_match("/^_{6,15}$/u",$password1)){
				$ret = array("status"=>1);
			}
			else{
				$ret = array("status"=>0);
			}
		}
		else{
			$ret = array("status"=>1);
		}
		echo json_encode($ret);
	};
	
	function pwd2($password1,$password2){
		if ($password1 == $password2){
			$ret = array("status"=>0);
		}
		else{
			$ret = array("status"=>1);
		}
		echo json_encode($ret);
	}
	
	if($username){
		user($username);
	}
	if($password1 && !$password2){
		pwd1($password1);
	}
	if($password2 && $password2){
		pwd2($password1,$password2);
	}
	
?>