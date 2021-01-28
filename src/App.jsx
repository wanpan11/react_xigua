//引入依赖
import React, { Component } from 'react';
import PubSub from 'pubsub-js'

//引入样式、工具包
import './style/initStyle.scss'

//引入组件
import NavBar from './components/Navbar/NavbarComponent';
import MoodListComponent from './components/Mood/MoodListComponent';
import LoadingComponent from './components/Loading/LoadingComponent';
import TipsBox from './components/Tips/Tips_1';


console.log(LoadingComponent);

//设置cookie
document.cookie = 'name = wanpan'

export default class App extends Component {

    state = {
        loading: false,
        tips: false
    }

    componentDidMount() {

        PubSub.subscribe('clearTodayTaskError', (_, obj) => {
            this.setState({ tips: obj.tips });
            setTimeout(() => {
                this.setState({ tips: false });
            }, 500);
        })

        PubSub.subscribe('loading', (_, obj) => {
            this.setState({ loading: obj.loading });
        })
    }

    render() {

        const { loading, tips } = this.state

        return (
            <div className="app_model">
                <div className="app_head">
                    <NavBar />
                </div>
                <div className="app_container">
                    <MoodListComponent />
                </div>
                { loading ? <LoadingComponent /> : ''}
                { tips ? <TipsBox /> : ''}
            </div>
        )
    }


}
