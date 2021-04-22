import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* 页面 */
import { App, Login } from '../pages'

const Pages = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/index" component={App} />
        </Switch>
    )
}

/* sidebar info */
const sidebarInfo = [
    { 'path': '/index/page0', 'text': '首页', 'icon': 'iconfenzu', 'key': 'sidebar_000' },
    { 'path': '/index/page1', 'text': '热门活动', 'icon': 'iconjingdian', 'key': 'sidebar_001' },
    { 'path': '/index/page2', 'text': '精彩推荐', 'icon': 'icongouwu', 'key': 'sidebar_002' },
    { 'path': '/index/page3', 'text': '账号设置', 'icon': 'iconwode', 'key': 'sidebar_003' }
]

/* 路由跳转 */
const setUrl = {
    defaultUrl: '/index/page0',
    page0: '/page0',
    listPage: '/index/page0/itemInfo'
}

export { Pages, sidebarInfo, setUrl }
