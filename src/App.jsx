//引入依赖
import React from 'react';

//引入样式、工具包
import axios from 'axios'
import './style/initStyle.scss'

//引入组件
import { Navbar } from './components/Navbar';
import { Mycomponent } from './components/test_1';

//引入数据
import navbar from './navbar.json'
document.cookie = 'name = wanpan'

export default class App extends React.Component {

    state = {
        navbar: navbar
    }

    getNavbarData = () => {
        axios.get('http://localhost:8888/index.html').then(
            response => {
                console.log('success', response.data);
            },
            error => {
                console.log('failed', error);
            }
        )
    }

    render() {
        const { navbar } = this.state
        return (
            <div>
                <Navbar navbar={navbar} />
                <div style={{ width: 'calc(100% - 16px)', background: '#fff', margin: '12px 8px', padding: '12px' }}>
                    <Mycomponent />
                    <button onClick={this.getNavbarData}>点我获取数据</button>
                </div>
            </div>
        )
    }
}
