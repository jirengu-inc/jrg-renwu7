function ajax(opts) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText)
            opts.success(json);
        }
        if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
            opts.error();
        }
    }
    var strdata = "";
    for (var key in opts.data) {
        strdata += key + "=" + opts.data[key] + "&";
    }
    strdata = strdata.substr(0, strdata.length - 1);
    if (opts.type.toLowerCase() === "get") {
        xmlhttp.open('get', opts.url + "?" + strdata, true);
        xmlhttp.send();
    }
    if (opts.type.toLowerCase() === "post") {
        xmlhttp.open('post', opts.url, true);
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xmlhttp.send(strdata);
    }
}
var container = document.getElementById("list");
var onload = false;
var start = 3;
var len = 2;
document.querySelector('#btn').addEventListener('click', function() {
    if (onload) {
        return;
    }
    onload = true;
    ajax({
            url: '24-2.php', //接口地址
            type: 'get', // 类型， post 或者 get,
            data: {
                "start": start,
                "len": len
            },
            success: function(ret) {
                for (var i = 0; i < len; i++) {
                    var num = start + i;
                    text = "内容" + num;
                    var newli = document.createElement("li");
                    newli.innerText = text;
                    container.appendChild(newli);
                }
                onload = false;
                start = ret;
            },
        error: function() {
            console.log('出错了');
        }
    })
});
