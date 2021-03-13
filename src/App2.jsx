//引入依赖
import React, { Component } from 'react';
//页面路由
import { NavLink, Route, BrowserRouter } from 'react-router-dom';

//引入样式、工具包
import './static/iconfont/iconfont.css'
import './style/App2.scss'
import './components/1_search_index/search.scss'

//引入组件
import Search from './components/1_search_index/search'
import InfoBlock from './components/1_search_index/info_block'
import NavBar from './components/Navbar/NavbarComponent';

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="app_model">
                    <div className="banner_bxo">
                        <NavBar />
                    </div>
                    <Search />
                    <div className="info_box">
                        <InfoBlock />
                        <InfoBlock />
                        <InfoBlock />
                        <InfoBlock />
                    </div>
                </div>
            </BrowserRouter>
        )
    }

}
