'use strict';
//分类选择
function tags(){
  $(".discover,.qa,.freetalk,.share-pic").click(function(){
    $(this).toggleClass("active").siblings().removeClass("active").end()
    .parent().siblings().children().removeClass("active");
  });
}
function light(){
  $(".sign-in").click(function(){
    $(this).addClass("active");
  });
}
function writeMsg(){
  $(document).on("click",".item-bottom li>a",function(){

    var $one = $(".question-all").children().eq(0);
    $(this).parent().toggleClass("active");
    $one.toggleClass("hide").siblings().toggleClass("hide");
      if($(this).parent().hasClass("active")){
          alert("解绑其他两个");
          $(this).parent().siblings().children("a").off("click")
      }else{
          alert("绑定其他两个");
          $(this).parent().siblings().children("a").on("click")
      }
  });
  // $(".write").click(function(){
  //   $(this).parent().toggleClass("active");
  // });
  // $(".expand,.reduce").click(function(){
  //     $(".show-question").toggleClass("hide");
  // });
    $(document).on("click",".expand,.reduce",function(){
        $(".show-question").toggleClass("hide");
    })
}
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
move();
function move(){
  //滚动条
  $(".art-all,.write-comment>ul").niceScroll({
             cursorcolor: "#fff",//#CC0071 光标颜色
             cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
             touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
             cursorwidth: "5px", //像素光标的宽度
             cursorborder: "0", //   游标边框css定义
             cursorborderradius: "5px",//以像素为光标边界半径
             autohidemode: true //是否隐藏滚动条
  });
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
//send Msg
sendMsg();
function sendMsg(){
    $(".send-msg").on("click",function(){
        var $boxModel = $(".write-comment ul").find(".hide").clone(true).removeClass("hide");
        var text = $(".write-whitebg").children().val();
        if(text.trim().length > 0 ){
            var imgSrc = $(".headPic").children().attr("src");
            $boxModel.find(".write-headpic").children().attr("src",imgSrc);
            $boxModel.find(".main-info").html(text);
            $(".write-comment>ul").prepend($boxModel);
            $(".write-whitebg").children().val("");
        }

    });
    // $(".write-comment .love").on("click",function(){
    //     $(this).toggleClass("all-love");
    // });
}
mine();
function mine(){
    ismine($(".jslove"),"jslove","love");
    function ismine(obj,a,b){
        obj.on("click",function(){
            console.log(12);
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