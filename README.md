### react_test

### pubsub 消息通知
```
//提示框消息 tipsDIsplay
//发布消息
PubSub.publish('tipsDIsplay', { msg: '暂无任务~~', tips: true })
//订阅消息
PubSub.subscribe('tipsDIsplay',rtn=>{})

//提示框消息
//发布消息
PubSub.publish('loading', { loading: true })
//订阅消息
PubSub.subscribe('loading',rtn=>{})
```