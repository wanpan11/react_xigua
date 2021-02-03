var express = require('express');//引用express
var app = express();//创建express实例

app.get('/getTodayTask', function (req, res) { //当路由url匹配为'/'时，执行function，返回Hello World
    console.log('有人请求了server_1')
    const navbar = [
        { "id": "001", "checked": false, "text": '谈秀芬今天真好看！' },
        { "id": "002", "checked": true, "text": '今天超喜欢四四酱呀！' },
        { "id": "003", "checked": false, "text": '今天是个受气包呀！' }
    ]
    setTimeout(() => {
        res.send(navbar);
    }, 500)
});

var server = app.listen(9000, function () {  //应用启动端口为
    var host = server.address().address;
    var port = server.address().port;
    console.log(host, port)
});