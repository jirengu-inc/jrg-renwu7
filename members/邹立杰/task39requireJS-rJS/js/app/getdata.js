define(["jquery"],function($){
	var clock;
	$("#load").on("click", function() {
		if (clock) {
			clearTimeout(clock);
		}
		clock = setTimeout(function() {
			// checkShow();
			getData()
		}, 10)
	});

	function checkShow() {
		if (isShow($("#load"))) {
			getData();
		}
	}
	
	function isShow($ele) {
		var winH = $(window).height(),
			scrollH = $("body").scrollTop(),
			offsetH = $ele.offset().top;
		if (offsetH < winH + scrollH) {
			return true;
		} else {
			return false;
		}
	}
	var page = 15,
		count = 6;
	// checkShow();
	function getData() {
		$.ajax({
			url: "http://platform.sina.com.cn/slide/album_tech",
			dataType: "jsonp",
			jsonp: "jsoncallback",
			data: {
				app_key: 1271687855,
				num: count,
				page: page
			}
		}).done(function(res) {
			if (res.status.code === "0") {
				var $node = place(res.data);
				waterFull($node);
				page++;
			} else {
				console.log("加载失败");
			}
		})
	}

	function place($ele) {
		var tmp = "",
			$node;
		for (var i = 0; i < $ele.length; i++) {
			tmp += "<li class='item'>";
			tmp += "<a href='" + $ele[i].url + "' class='link'>";
			tmp += "<img src='" + $ele[i].img_url + "' /></a>";
			tmp += "<h4 class='header'>" + $ele[i].short_name + "</h4>";
			tmp += "<p class='desp'>" + $ele[i].short_intro + "</p>"
		}
		$node = $(tmp);
		$("#waterFull").append($node);
		return $node;
	}

	var ctWidth = $("#waterFull").width(),
		itemWidth = $("#waterFull .item").outerWidth(true),
		num = (ctWidth / itemWidth),
		HArr = [];
	for (var i = 0; i < num; i++) {
		HArr.push(0)
	}

	function waterFull($ele) {
		$ele.each(function() {
			var $cur = $(this);
			$(this).find("img").on("load", function() {
				var idx = 0;
				minH = HArr[0];
				for (var i = 0; i < HArr.length; i++) {
					if (minH > HArr[i]) {
						minH = HArr[i];
						idx = i;
					}
				}
				$cur.css({
					left: idx * itemWidth,
					top: minH
				});
				HArr[idx] = HArr[idx] + $cur.outerHeight(true);
				$("#waterFull").height(Math.max.apply(null, HArr));
			})
		})
	}


});