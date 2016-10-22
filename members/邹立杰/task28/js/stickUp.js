$.fn.stick = function(){
			var $cur = this,
				width = $cur.width(),
				height = $cur.height(),
				offsetTop = $cur.offset().top,
				offsetLeft = $cur.offset().left;
			var lock = false;
			// 克隆放入
			var $cloneDiv = $cur.clone().insertBefore($cur).css({"opacity":0}).hide();

			$(window).on("scroll",function(){
				var winTop = $(this).scrollTop();
				if(winTop >= offsetTop){
					if(!lock){
						setFixed();
					}
				}else{
					if(lock){
						unSetFixed();
					}
				}
			});
			// 设置Fixed
			function setFixed(){
				$cur.css({
					"position":"fixed",
					"width":width,
					"height":height,
					"top":0,
					"left":offsetLeft,
					"margin":0,
					"zIndex":9999
				});
				$cloneDiv.show();
				lock = true;
			}
			// 去除fixed
			function unSetFixed(){
				$cur.removeAttr("style");
				$cloneDiv.hide();
				lock = false;
			}

		}