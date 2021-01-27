//引入依赖
import React, { Component } from 'react';

//引入样式、工具包
import './style/initStyle.scss'

//引入组件
import { NavBar } from './components/Navbar/NavbarComponent';
import { MoodListComponent } from './components/Mood/MoodListComponent';

//设置cookie
document.cookie = 'name = wanpan'

export default class App extends Component {

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0];
        body.style['backgroundColor'] = '#f2f2f2';
    }

    render() {
        return (
            <div>
                <NavBar />
                <MoodListComponent />
            </div>
        )
    }

}
