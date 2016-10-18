
function carousel(obj){
	var $ct = obj.find(".ct"),
		$item = $ct.children(),
		$prev = obj.find(".prev"),
		$next = obj.find(".next"),
		$bullet = obj.find(".bullet"),
		imgWidth = $item.width(),
		imgCount = $item.length;

	var curIdx = 0;
	var isAnimate = false;
	var clock;
	//设置头尾图片  起到无折返作用 
	$ct.append(  $item.first().clone() );
	$ct.prepend( $item.last().clone() );
	nowCount = $ct.children().length;
	// 设置窗口的起始
	$ct.css({"width":nowCount*imgWidth,left:0-imgWidth});
	$prev.on("click",function(e){
		e.preventDefault();
		playPrev();
	});
	$next.on("click",function(e){
		e.preventDefault();
		playNext();
	});
	$bullet.children("li").on("click",function(){
		var idx = $(this).index();
		console.log(idx);
		if(idx > curIdx){
		console.log(idx-curIdx);
			playNext(idx - curIdx);
		}else{
			playPrev(curIdx - idx)
		}
	});
	autoPlay();
	// 下一个
	function playNext(idx){
		var num = idx || 1;
		if(!isAnimate){
			stopPlay();
			isAnimate = true;
			$ct.animate({left:"-="+imgWidth*num},function(){
				curIdx = (curIdx+num)%imgCount;
				if(curIdx === 0){
					$ct.css({"left":0-imgWidth});
				}
				isAnimate = false;
				setBullet();
				autoPlay();
			});
		}
	}
	// 上一个
	function playPrev(idx){
		var num = idx || 1;
		if(!isAnimate){
			stopPlay();
			isAnimate = true;
			$ct.animate({"left":"+="+imgWidth*num},function(){
				curIdx = (imgCount+ curIdx-num)%imgCount;
				if(curIdx === (imgCount-1)){
					$ct.css({"left":0-imgWidth*imgCount});
				}
				isAnimate = false;
				setBullet();
				autoPlay();
			});
		}
	}
	// 设置bullet
	function setBullet(){
		$bullet.find("li").removeClass("active").eq(curIdx).addClass("active");
	}
	// 自动
	function autoPlay(){
		clock = setInterval(function(){
			playNext();
		},3000);
	}
	// 暂停自动
	function stopPlay(){
		clearInterval(clock);
	}
}
