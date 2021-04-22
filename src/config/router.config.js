import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* 页面 */
import { App, Login } from '../pages'

const ContentPage = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/index" component={App} />
        </Switch>
    )
}

/* sidebar info */
const sidebarInfo = [
    { 'path': '/page0', 'defaultPath': '/', 'exact': false, 'text': '首页', 'icon': 'iconfenzu', 'key': 'sidebar_000' },
    { 'path': '/page1', 'defaultPath': '', 'exact': false, 'text': '热门活动', 'icon': 'iconjingdian', 'key': 'sidebar_001' },
    { 'path': '/page2', 'defaultPath': '', 'exact': false, 'text': '精彩推荐', 'icon': 'icongouwu', 'key': 'sidebar_002' },
    { 'path': '/page3', 'defaultPath': '', 'exact': false, 'text': '账号设置', 'icon': 'iconwode', 'key': 'sidebar_003' }
]

/* 路由跳转 */
const setUrl = {
    defaultUrl: '/',
    page0: '/page0',
    listPage: '/page0/itemInfoPage'
}

export { ContentPage, sidebarInfo, setUrl }
