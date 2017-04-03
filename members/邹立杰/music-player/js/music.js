var myAudio = $("audio")[0],
        lyricArr = [];
    // playOrPause button
    $(".playOrPause").on("click", function () {
        var method = myAudio.paused ? play : pause;
        method()
        // if(myAudio.paused){
        //     play()
        // }else{
        //     pause()
        // }
    })
    // volume
    $(".volume").on("click", function(){
       var volumeNow = myAudio.volume > 0 ? "icon-playervolumeoff":"icon-platefrom_notice";
       if(myAudio.volume > 0){
           myAudio.volume = 0;
           $(this).children("span").removeClass("icon-platefrom_notice").addClass(volumeNow)
       }else{
            myAudio.volume = 1;
           $(this).children("span").removeClass("icon-playervolumeoff").addClass(volumeNow)
       }
    })

    function play() {
        myAudio.play()
        $(".playOrPause").removeClass("icon-playerplay").addClass("icon-playerpause-copy")

    }

    function pause() {
        myAudio.pause()
        $(".playOrPause").removeClass("icon-playerpause-copy").addClass("icon-playerplay")
    }

    $(".love").on("click",function(){
        $(this).children().toggleClass("active")
    })

    $(".music-buttons").on("click",function(e){
        var $target = $(e.target)
        slideUpOrDown($target.children(),$target)

    })

    $(".music-buttons").on("click",function(e){
        var $target = $(e.target)
         slideUpOrDown($target,$target.parent())
    })

    function slideUpOrDown($child,$wrapper){
        if($child.hasClass("geci")){
            if($wrapper.hasClass("active")){
                $wrapper.removeClass("active")
                $(".music-lyr").slideUp();
            }else{
               $wrapper.addClass("active")
               $(".music-lyr").slideDown();
            }
        }
    }

    function getMusic() {
        $.ajax({
            url: "http://api.jirengu.com/fm/getSong.php",
            dataType: "json",
            method: "get",
            data: {
                "channel": "public_fengge_xiaoqingxin"
            },
            success: function (ret) {
                var songObject = ret.song["0"]
                var {artist, lrc, picture, sid, title, url} = songObject;
                // 设置audio元素信息
                $("audio").attr("src", url);
                $("audio").attr("sid", sid)
                // 设置封面信息
                $(".music-pic > img").attr("src", picture)
                // download
                $(".icon-download").parent("a").attr("href", url)
                play()
                getLyric({ sid })
            }
        })
    }

    function getLyric({sid}) {
        $.get("http://api.jirengu.com/fm/getLyric.php", { sid }, "text")
            .done(function (res) {
                var lyr = JSON.parse(res);

                if (!!lyr.lyric) {
                    $(".music-lyr .lyric").empty();

                    var line = lyr.lyric.split('\n');//歌词为以排数为界的数组
                    var timeReg = /\[\d{2}:\d{2}.\d{2}\]/g;//时间的正则
                    var result = [];
                    if (line != "") {
                        for (var i in line) {//遍历歌词数组
                            var time = line[i].match(timeReg);//每组匹配时间 得到时间数组
                            if (!time) continue;//如果没有 就跳过继续
                            var value = line[i].replace(timeReg, "");// 纯歌词
                            if (value === '音乐来自百度FM, by 饥人谷') {
                                value = '音乐来自百度FM,baixiaoji';
                            }
                            for (j in time) {//遍历时间数组
                                var t = time[j].slice(1, -1).split(':');//分析时间  时间的格式是[00:00.00] 分钟和毫秒是t[0],t[1]
                                //把结果做成数组 result[0]是当前时间，result[1]是纯歌词
                                var timeArr = parseInt(t[0], 10) * 60 + parseFloat(t[1]); //计算出一个curTime s为单位
                                result.push([timeArr, value]);
                            }
                        }
                    }
                    //时间排序
                    result.sort(function (a, b) {
                        return a[0] - b[0];
                    });
                    lyricArr = result;//存到lyricArr里面
                    //console.log(lyricArr)
                    renderLyric();//渲染歌词

                }
            })
            .fail(function () {
                $(".music-lyr").html("<li>本歌曲没有展示歌词</li>")
            })

    }

    function renderLyric() {
        var lyrLi = "";
        for (var i = 0; i < lyricArr.length; i++) {
            lyrLi += "<li data-time='" + lyricArr[i][0] + "'>" + lyricArr[i][1] + "</li>";
        }
        $('.music-lyr>.lyric').append(lyrLi);
        setInterval(showLyric, 100);//怎么展示歌词
    }

    function showLyric() {
        var liH = $(".lyric li").eq(5).outerHeight() - 3; //每行高度
        for (var i = 0; i < lyricArr.length; i++) {//遍历歌词下所有的li
            var curT = $(".lyric li").eq(i).attr("data-time");//获取当前li存入的当前一排歌词时间
            var nexT = $(".lyric li").eq(i + 1).attr("data-time");
            var curTime = myAudio.currentTime;
            if ((curTime > curT) && (curT < nexT)) {//当前时间在下一句时间和歌曲当前时间之间的时候 就渲染 并滚动
                $(".lyric li").removeClass("active");
                $(".lyric li").eq(i).addClass("active");
                $('.music-lyr .lyric').css('top', -liH * (i - 2));
            }
        }

    }
    // 控制进度条
    setInterval(controlProgress, 500)
    $(".progress").mousedown(function (ev) {  //拖拽进度条控制进度
        
        var posX = ev.clientX;
        var targetLeft = $(this).offset().left;

        console.log($(this).width())
        var percentage = (posX - targetLeft) / ($(this).width()) * 100;
        myAudio.currentTime = myAudio.duration * percentage / 100;
    });
    function controlProgress() {
        var length = myAudio.currentTime / myAudio.duration * 100;
        $('.current-time').width(length + '%');//设置进度条长度
        //自动下一曲
        if (myAudio.currentTime == myAudio.duration) {
            getMusic()
        }
    }
    getMusic()

    $(document).on("dblclick",function(){
        getMusic();
    })