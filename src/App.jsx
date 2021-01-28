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

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0];
        body.style['backgroundColor'] = '#f2f2f2';
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

    isLoading = () => {
        return (boolean) => {
            this.setState({ loading: boolean })
        }
    }


}
