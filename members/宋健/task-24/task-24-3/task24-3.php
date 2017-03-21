<?php
$name=array("songjian","hunger");//服务器内已存在的用户名数组
$arrlength=count($name);//计算数组长度
$username=$_GET["username"];
$ret = 0;
for ($i=0; $i <$arrlength ; $i++) {  //循环数组，得到与GET参数相同的值
if ($name[$i]===$username){
    $ret=1;
}
array_push($name,$username); //如果没有相同的把得到的参数添加到数组
};
echo json_encode($ret);
?>