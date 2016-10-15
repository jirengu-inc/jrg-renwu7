'use strict';


//发言论
function sendMsg(){
    $(".sendMsg").on("click",function(){
          var $boxModel = $(".showMsg").find(".hide").clone(true).removeClass("hide");
          var text = $(".wBar").children().val();
          if(text.trim().length > 0 ){
            var imgSrc = $(".headPic").children().attr("src");
            $boxModel.find(".headPic").children().attr("src",imgSrc);
            $boxModel.find(".talkBar").html(text);
            $(".showMsg>ul").prepend($boxModel);
            $(".wBar").children().val("");   
          }

    });
}
// 滚动条
function move(){
  //滚动条
  $("#ComList").niceScroll({
             cursorcolor: "#fff",//#CC0071 光标颜色
             cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
             touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
             cursorwidth: "5px", //像素光标的宽度
             cursorborder: "0", //   游标边框css定义
             cursorborderradius: "5px",//以像素为光标边界半径
             autohidemode: true //是否隐藏滚动条
  });
}
//点击下来出来的东西
function navTop(){     
       //盒子高度
      var  $box = $(".fontCont").height();
      //一个DIV的高度
      var $aBox = $(".fontCont div").eq(0).outerHeight(true);
      var $width = $(window).width();
      var $height = $(window).height();
      var laternum = 3;
      var beforenum = 2;
      var navTop = "190px";
      if( $height <="740" ){
        laternum = 2;
        beforenum = 1;
      }
      $(".narrowbg").on("click",function (){
        if(!$(".Comment").hasClass("hide")){
          return false;
        }
        var $this = $(this);
        $this.children().addClass("hide");
        $(".movebar")
        .animate({
            zIndex:0,
            marginTop:0
        },200,"jswing",
            function(){
                  var $that = $(this);
                  // alert($that.html());// $(".fontCont").height($aBox*2+"px");
                  $(".fontCont")
                  .animate({
                        height:$aBox*beforenum+"px"
                  },300,"easeInSine");
                  $this.parent()
                  .animate({
                      height:navTop,
                  },400,"jswing",
                  function(){
                        $that.find("img").toggleClass("hide");
                        
                  });
                  $(".transform_text").fadeIn();
                  $(".searchBox").fadeOut();
                  $(".otherBar").fadeIn();
                  
           });
     }); 
     $(".bar").bind("click",function(){
          if($(".unit").css("display") === "block"){
             $(".unit").fadeOut();
             $(".colorpane").fadeOut();
             $(".sortItemsmall").fadeOut();
          }
          var $this = $(this);
          $(".otherBar").fadeOut();
          $(".searchBox").fadeIn();
          $(".transform")
                .animate({
                  height:0
                },400,"easeInSine",
                      function(){
                        var $that = $(this);
                        $that.find(".narrowbg").children("img").toggleClass("hide");
                        $this.find("img").toggleClass("hide");
                     });
          $(".transform_text").fadeOut();
          $(".movebar")
                  .animate({
                    zIndex:-1
                  },400,"jswing",
                        function(){
                            // $(".fontCont")
                            // .animate({
                            //       height:$aBox*3+"px"
                            // },300,"easeInSine");  
                         });
          $(".fontCont")
          .animate({
                height:$aBox*laternum+"px"
          },300,"easeInSine");
     })
}
//下拉后点击出现
function showmore(){
   show($(".lefttalk"),".colorpane");
   show($(".righttalk"),".sortItemsmall");
   $(".closepane").click(function(){
         var $this = $(this);
         var  $pane = $this.offsetParent().children();
         var  $otherpane = $this.offsetParent().siblings().children();
         if($otherpane.css("display") === "none"){
             $pane.fadeOut();
             $(".unit").fadeOut();
         }else{
           $pane.fadeOut();
         }
   });
   // 上面函数规整的整合的函数
   function show(obj,target){
        obj.click(function(){
          if($(target).css("display") === "none"){
             $(".unit").fadeIn().find(target).fadeIn();
          }else{
             var $anotherpanel = $(target).parent().siblings().children();
             if($anotherpanel.css("display") === "none"){
                  $(".unit").fadeOut();
             }
              $(target).fadeOut();
           }
        });
   }
}
//收藏和喜爱
function mine(){
  ismine($(".jslove"),"jslove","love");
  ismine($(".jscollect"),"jscollect","collect");
  //封装成函数
  function ismine(obj,a,b){
    obj.click(function(){
        var classname = $(this).attr("class");
        $(this).children("img").attr("src","images/icon/"+classname+".png");
        if(classname === a){
           $(this).addClass(b);
        }else{
          $(this).addClass(a);
        }
        $(this).removeClass(classname);
    });
  }
}