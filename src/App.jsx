//引入依赖
import React from 'react';

//引入样式、工具包
import axios from 'axios'
// import { dataUtil } from './tools/dataUtil'
import './style/initStyle.scss'

//引入组件
import { NavBar } from './components/Navbar/NavbarComponent';
import { Mycomponent } from './components/test/test_1';
import { Button } from 'antd'

//引入数据
import navbar from './data/navbar.json'

//设置cookie
document.cookie = 'name = wanpan'

export default class App extends React.Component {

    state = {
        navbarList: navbar
    }

    getNavbarData = () => {
        axios.get('http://localhost:3000/api/getNavbarData').then(
            response => {
                console.log('success', response.data);
                const newNavbar = response.data
                this.setState({ navbarList: newNavbar })
            },
            error => {
                console.log('failed', error);
            }
        )
    }

    setNavbarStatus = (itme) => {
        return () => {
            const { navbarList } = this.state
            const { id } = itme
            navbarList.forEach(ele => {
                ele.id === id ? ele.status = true : ele.status = false
            })
            this.setState({ navbarList: navbarList })
        }
    }

    render() {
        const { navbarList } = this.state
        return (
            <div>
                <NavBar navbar={navbarList} setNavbarStatus={this.setNavbarStatus} />
                <div style={{ width: 'calc(100% - 16px)', background: '#fff', margin: '12px 8px', padding: '12px' }}>
                    <Mycomponent />
                    <Button type="primary" onClick={this.getNavbarData}>点我获取数据</Button>
                </div>
            </div>
        )
    }
}
