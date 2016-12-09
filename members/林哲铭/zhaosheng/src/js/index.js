var doClass = (function () {
    function hasClass(el,cls){
        var re = new RegExp('(\\s|^)' + cls + '(\\s|$)','g');
        if ( re.test(el.className)){
            return true;
        }else {
            return false;
        }
    }
    function addClass(el, cls){
        if (!this.hasClass(el,cls)){
            el.className += " " + cls;
        }
    }

    function removeClass(el,cls) {
        if (this.hasClass(el,cls)){
            el.className = el.className.replace((" " + cls)||(cls + " ") ,"");
        }
    }

    return {
        hasClass:hasClass,
        addClass:addClass,
        removeClass:removeClass,
    }
})()

var btnOpen = document.getElementsByClassName("tip-btn-open")[0];
var tipContent = document.getElementsByClassName("tip-content")[0];
var asideClose = document.getElementsByClassName("tip-btn-close")[0];
var telIcon = document.getElementsByClassName("icon-tel-copy")[0];
var telBox = document.getElementsByClassName("tel-box")[0];
var extraClose = telBox.getElementsByClassName("btn-close")[0];
btnOpen.addEventListener("click",function () {
    doClass.addClass(btnOpen,"close");
    doClass.removeClass(btnOpen,"active");
    doClass.removeClass(tipContent,"close");
    doClass.addClass(tipContent,"active");
});
asideClose.addEventListener("click",function () {
    doClass.removeClass(btnOpen,"close");
    doClass.addClass(btnOpen,"active");
    doClass.addClass(tipContent,"close");
    doClass.removeClass(tipContent,"active");
});
telIcon.addEventListener("click",function () {
    doClass.addClass(telBox,"active");
})
extraClose.addEventListener("click",function () {
    doClass.addClass(telBox,"close");
    doClass.removeClass(telBox,"active");
})



