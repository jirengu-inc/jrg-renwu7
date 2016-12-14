<?php

$getid  = $_GET['id'];
if($getid==1){
	// 代码1
$getstr = $_GET['username'];
echo json_encode($getstr);
}
if($getid==2){
// 代码2
$getlist = $_GET['list'];
$listinit = $getlist+1;
$getlistadd =$_GET['listadd'];
$listxe =$listinit+$getlistadd;
$tdata = array();
$b=1;
for($a=$listinit;$a<$listxe;$a++){

	$tdata[$b]=$a;
	$b=$b+1;
}

echo json_encode($tdata);
}
if($getid==3){
// 代码3

}

?>