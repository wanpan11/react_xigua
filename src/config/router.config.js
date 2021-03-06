import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* 页面 */
import { App, Login } from '../pages'

/* 一级页面路由 */
const Pages = () => {
    return (
        <Switch>
            <Route path="/index" component={App} />
            <Route path="/" component={Login} />
        </Switch>
    )
}

/* sidebar info */
const sidebarInfo = [
    { 'path': '/index', 'text': '首页', 'icon': 'iconfenzu', 'key': 'sidebar_000' },
    { 'path': '/index/page1', 'text': '热门活动', 'icon': 'iconjingdian', 'key': 'sidebar_001' },
    { 'path': '/index/page2', 'text': '精彩推荐', 'icon': 'icongouwu', 'key': 'sidebar_002' },
    { 'path': '/index/page3', 'text': '个性设置', 'icon': 'icontheme', 'key': 'sidebar_003' }
]

/* 路由跳转 */
const setUrl = {
    login: '/',
    index: '/index',
    listPage: '/index/itemInfo'
}

export { Pages, sidebarInfo, setUrl }
