//引入依赖
import React, { Component } from 'react';
//页面路由
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//引入样式、工具包
import './static/iconfont/iconfont.css'
import './style/App2.scss'
import './components/1_tab01/search.scss'

//引入组件
import NavBar from './components/Navbar/NavbarComponent.jsx';
import InfoBlock from './components/1_tab01/InfoBlock'
import Tab02 from './components/2_tab02'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app_model">
                    <div className="banner_bxo">
                        <NavBar />
                    </div>
                    <div className="container_box">
                        <Switch className="container_box">
                            <Route exact path="/" component={InfoBlock}></Route>
                            <Route path="/tab_0" component={InfoBlock}></Route>
                            <Route path="/tab_1" component={Tab02}></Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

}
