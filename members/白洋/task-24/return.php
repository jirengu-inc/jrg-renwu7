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
$gettype=$_GET['type'];
$getshuju=$_GET['shuju'];
if($gettype=='user'){
	if($getshuju=='test'){
		echo json_encode('0');
	}else{
		echo json_encode('1');
	}

}
if($gettype=='all'){
//密码就不判断了
	echo json_encode('注册成功');
}

}

?>