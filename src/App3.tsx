//引入依赖
import React from 'react';
//页面路由
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './pages/sidebar'

export default class App3 extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Sidebar></Sidebar>
                </div>
            </BrowserRouter>

        )
    }
}
