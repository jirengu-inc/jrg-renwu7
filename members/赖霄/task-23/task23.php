<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>task23</title>
</head>
<body>

<?php
echo "<h1>Hello World<h2>";
/*=============Lesson:echo&print===============*/
$txt1 = "Today is a nice day !";
// $txt2 = "Mancity",'is','a','football','club';
$num1 = 1;
$players = array('Silva','Messi','Ronaldo','Kun','Navas');
echo $txt1;
echo '<br>';
echo "Mancity",' is',' a',' football',' club.';
echo '<br>';
echo "<p>2 minus 1 is $num1.</p>";
echo '$num1';
echo '<br>';
echo "{$players[0]} is a phenomenal football player.";//echo有数组的必须用双引号！
print "<br>";
print "<br>";
print $txt1;
// print "Mancity",' is',' a',' football',' club.';//print不能输出多个字符串！！
print '<br>';
print "<p>2 minus 1 is $num1.</p>";
print '<br>';
print "<strong>{$players[0]} is a phenomenal football player.</strong><br>";//print有数组的必须用双引号！
/*总结：echo和print用单引号输出变量，直接输出变量名这个字符串而不是输出变量的值——即只识别单引号中的内容为字符串！！！！！*/

/*=============Lesson:数据类型===============*/
$x = 5985;
var_dump($x);
echo "<br>"; 
$x = -345; // 负数 
var_dump($x);
echo "<br>"; 
$x = 0x8C; // 十六进制数
var_dump($x);
echo "<br>";
$x = 047; // 八进制数
var_dump($x);
echo "<br>";
var_dump($txt1); // 输出类型和长度 并输出字符串
echo "<br>";
$x = 1.234; 
var_dump($x); 
echo "<br>";
$x = true; 
var_dump($x); 
echo "<br>";
var_dump($players); 
echo "<br>";
class Car
{
  var $color;
  function Car($color="green") {
    $this->color = $color;
  }
  function what_color() {
    return $this->color;
  }
}

/*=============Lesson:字符串===============*/





?>

</body>
</html>

