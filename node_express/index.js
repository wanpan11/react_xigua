var express = require('express');//引用express
var app = express();//创建express实例

app.get('/getTodayTask', function (req, res) { //当路由url匹配为'/'时，执行function，返回Hello World
    const date = new Date()
    console.log('有人请求了server_1---', date)
    const data = [
        {
            "key": "001",
            "title": "腾讯视频 1.9.1",
            "content": "腾讯旗下的无框视频播放器 它是中国领先的在线视频媒体平台，以便捷的登录方式、24小时多平台无缝应用体验以及快捷分享的产品特性，深受用户们喜爱。"
        },
        {
            "key": "002",
            "title": "EuDic 欧路词典 3.5.4",
            "content": "跨多平台的词典应用 它支持现在大部分的主流平台，如 Mac OS、Windows、iOS 以及 Androkey等。"
        },
        {
            "key": "003",
            "title": "网易云音乐 1.5.10",
            "content": "音乐播放器 网易云音乐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能,为用户打造全新的音乐生活。"
        },
        {
            "key": "004",
            "title": "CleanMyMac X 4.8.1",
            "content": "经典好用的Mac清理工具 拥有处理系统内的垃圾文件，以及查找和移除大型文件和文件夹等功能。"
        },
        {
            "key": "005",
            "title": "网易有道词典 2.5.0",
            "content": "小巧实用的翻译软件 结合了互联网在线词典和桌面词典的优势，除具备中英、英中、英英翻译、汉语词典功能外，全新加入了日语、法语、韩语查词功能。"
        },
        {
            "key": "006",
            "title": "饥荒：哈姆雷特",
            "content": "荒野生存游戏 一款充满科学和魔力的不折不扣的荒野生存游戏。进入一个充满陌生生物，危险和惊奇的陌生且未开发的世界。收集资源以制作与您的生存风格相匹配的物品和结构。《饥荒:哈姆雷特》为《饥荒》的新资料片。"
        },
        {
            "key": "007",
            "title": "工业崛起（Rise of Industry） 2.2.0",
            "content": "城市建造模拟经营游戏 一款大亨策略游戏，让你扮演 20 世纪初的实业家。在自动生成的不断发展、有生命力的世界中，建设和管理你日益增长的帝国，让它不断发展并适应你的游戏风格。。"
        }
    ]
    setTimeout(() => {
        res.json(data);
    }, 500)
});

var server = app.listen(9000, function () {  //应用启动端口为
    var host = server.address().address;
    var port = server.address().port;
    console.log("服务器以启动 localhost" + host, port)
});

// var server = app.listen(5000, '0.0.0.0');