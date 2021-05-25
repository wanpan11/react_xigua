const express = require('express');   //引入express
const Mock = require('mockjs');       //引入mock

const { smarteTool } = require('./src/util/smarteTool')
const data = require('./mock/data/index')
const app = express();        //实例化express

const { page_0 } = data

/* listPageInfo 数据展示 */
app.use('/listPageInfo', function (req, res) {
    console.log('listPageInfo', (new Date()));
    res.json(Mock.mock(
        page_0.listPageInfo
    ))
})

/* 登录验证 */
app.use('/loginAuth', function (req, res) {
    console.log('loginAuth', (new Date()));
    const { userAcount, userPassword } = smarteTool.getDeepVal(req, 'query')
    if (userAcount === '123' && userPassword === '123') {
        res.json({
            code: 114
        })
    } else {
        res.json({
            code: 110
        })
    }
})

const Port = 4444
const server = app.listen(Port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务已启动', host, port)
})
