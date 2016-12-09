<?php
	header("Content-type: "); 
	$status = $_GET["status"];
	if($status == 1){
		$ret = array(
			"0"=>array(
				'url'=>"./image/project/1.png",
				'title'=>"Round Icons",
				'content'=>"Graphic Design"
			),
			"1"=>array(
				'url'=>"./image/project/2.png",
				'title'=>"Startup Frameword",
				'content'=>"Website Design"
			),
			"2"=>array(
				'url'=>"./image/project/3.png",
				'title'=>"Treehouse",
				'content'=>"Website Design"
			),
			"3"=>array(
				'url'=>"./image/project/4.png",
				'title'=>"Golden",
				'content'=>"Website Design"
			),
			"4"=>array(
				'url'=>"./image/project/5.png",
				'title'=>"Escape",
				'content'=>"Website Design"
			),
			"5"=>array(
				'url'=>"./image/project/6.png",
				'title'=>"Dreams",
				'content'=>"Website Design"
			)
		);
	}else{
		$ret = "refuse";
	}
	echo json_encode($ret);
 ?>