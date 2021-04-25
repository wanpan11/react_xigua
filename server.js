const express = require('express');   //引入express
const Mock = require('mockjs');       //引入mock
const data = require('./mock/data/index')
const app = express();        //实例化express

const { page_0 } = data


app.use('/listPageInfo', function (req, res) {
    console.log('listPageInfo', (new Date()));
    res.json(Mock.mock(
        page_0.listPageInfo
    ))
})

const Port = 4444
const server = app.listen(Port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务已启动', host, port)
})
