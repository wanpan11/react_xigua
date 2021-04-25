const express = require('express');   //引入express
const Mock = require('mockjs');       //引入mock
const data = require('./data/index')
const app = express();        //实例化express


app.use('/listPageInfo', function (req, res) {
    console.log('');
    res.json(Mock.mock({
        'code': 114,
        'dataSource|5': [{
            'key|+1': 1,
            'title|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
            'content|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘']
        }]
    }))
})

const Port = 4444
const server = app.listen(Port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务已启动', host, port)
})
