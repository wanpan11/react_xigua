//引入依赖
import React from "react";
//页面路由
import { BrowserRouter } from 'react-router-dom';

import './style/App3.scss'

import Sidebar from './pages/sidebar'
import Contrnt from './pages/content';

export default class App3 extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Sidebar></Sidebar>
                    <Contrnt></Contrnt>
                </div>
            </BrowserRouter>

        )
    }
}

