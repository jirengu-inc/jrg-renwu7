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
document.querySelector('#btn').addEventListener('click', function() {
    ajax({
        url: 'getData.php', //接口地址
        type: 'get', // 类型， post 或者 get,
        data: {
            username: 'xiaoming',
            password: 'abcd1234'
        },
        success: function(ret) {
            console.log(ret);
            var mydiv = document.querySelector('#mydiv');
            mydiv.innerHTML = '用户名：' + ret.username + " <br/> " + '密码：' + ret.password;
        },
        error: function() {
            console.log('出错了');
        }
    })
});
