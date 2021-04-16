//引入依赖
import React from "react";
//页面路由
import { BrowserRouter } from 'react-router-dom';

import './style/App3.scss'

import Sidebar from './pages/sidebar'
import Contrnt from './pages/content';

const listData = [
    { text: '首页', key: '001' },
    { text: '热门活动', key: '002' },
    { text: '精彩推荐', key: '003' },
    { text: '账号设置', key: '004' }
]

export default class App3 extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Sidebar listData={listData}></Sidebar>
                    <Contrnt></Contrnt>
                </div>
            </BrowserRouter>

        )
    }
}

