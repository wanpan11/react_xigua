//引入依赖
import React, { Component } from 'react';
//页面路由
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//引入样式、工具包
import './static/iconfont/iconfont.css'
import './style/App2.scss'
import './components/1_search_index/search.scss'

//引入组件
import Search from './components/1_search_index/search.jsx'
import InfoBlock from './components/1_search_index/InfoBlock.jsx'
import NavBar from './components/Navbar/NavbarComponent.jsx';

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="app_model">
                    <div className="banner_bxo">
                        <NavBar />
                    </div>
                    <Search />
                    <Switch>
                        <Route exact path="/" component={InfoBlock}></Route>
                        <Route path="/tab_0" component={InfoBlock}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}
