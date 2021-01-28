//引入依赖
import React, { Component } from 'react';

//引入样式、工具包
import './style/initStyle.scss'

//引入组件
import NavBar from './components/Navbar/NavbarComponent';
import MoodListComponent from './components/Mood/MoodListComponent';
import LoadingComponent from './components/Loading/LoadingComponent';


console.log(LoadingComponent);

//设置cookie
document.cookie = 'name = wanpan'

export default class App extends Component {

    state = {
        loading: false
    }

    render() {
        const { loading } = this.state
        return (
            <div>
                <NavBar />
                <MoodListComponent isLoading={this.isLoading()} />
                { loading ? <LoadingComponent /> : ''}
            </div>
        )
    }

    //加载动画回调
    isLoading = () => {
        return (boolean) => {
            this.setState({ loading: boolean })
        }
    }


}
