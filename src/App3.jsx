//引入依赖
import React from "react";
//页面路由
import { BrowserRouter } from 'react-router-dom';

import './static/style/App3.scss'

import Sidebar from './pages/sidebar'
import Contrnt from './pages/content';

export default class App3 extends React.Component {

    state = {
        Height: '0',
    }

    componentDidMount() {
        const innerHeight = window.innerHeight + 'px'
        this.setState({ Height: innerHeight });
        window.onresize = () => {
            const innerHeight = window.innerHeight + 'px'
            this.setState({ Height: innerHeight });
        }
    }

    render() {
        const { Height } = this.state
        return (
            <BrowserRouter>
                <div id="app" style={{ height: Height }}>
                    <Sidebar></Sidebar>
                    <Contrnt></Contrnt>
                </div>
            </BrowserRouter>

        )
    }
}

