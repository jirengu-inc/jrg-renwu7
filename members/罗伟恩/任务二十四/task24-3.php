<?php
$username = $_GET['username'];
if($username == "hunger"){
    $ret = array("status"=>false);
}else{
    $ret = array("status"=>true);
}
echo json_encode($ret);
?>
