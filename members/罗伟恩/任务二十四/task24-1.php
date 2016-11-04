<?php
    header("Content-type: ");
    $username = $_GET["username"];
    $password = $_GET["password"];
    if($username=="小明"){
        $ret = array("username"=>$username,"password"=>$password);
    }else{
        $ret = "not init";
    }
    echo json_encode($ret);
?>