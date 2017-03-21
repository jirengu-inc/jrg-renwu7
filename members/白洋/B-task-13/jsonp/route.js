/**
 * Created by codelike on 17-2-11.
 */

var http = require("http"),
    url = require("url");


http.createServer(function (req, res) {
    if(req.url==="/favicon.ico"){
        console.log("nullssss");
    }else
    {
        console.log(req.url);
        var params = url.parse(req.url,true).query;
        console.log(params.news);
        res.writeHeader(200, {'Content-Type':'text/javascript;charset=UTF-8'});
        res.write("news("+'"'+params.news+'"'+");");
        res.end();
    }


}).listen(9999, "127.0.0.1");
