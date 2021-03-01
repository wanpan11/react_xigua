//引入依赖
import React, { Component } from 'react';
import PubSub from 'pubsub-js'

//引入样式、工具包
import './style/initStyle.scss'

//引入组件
import Search from './components/1_search_index/search'

//设置cookie
document.cookie = 'name = wanpan'

export default class App extends Component {

    state = {
        loading: false,
        tips: {
            tips: false,
            msg: ''
        },
        navbarChecked: '001'
    }

    componentDidMount() {

        //提示窗消息订阅
        PubSub.subscribe('tipsDIsplay', (_, obj) => {
            this.setState({ tips: { tips: obj.tips, msg: obj.msg } });
            setTimeout(() => {
                this.setState({ tips: { tips: false, msg: '' } });
            }, 500);
        })

        //加载动画消息订阅
        PubSub.subscribe('loading', (_, obj) => {
            this.setState({ loading: obj.loading });
        })
    }

    render() {
        const { loading, tips, navbarChecked } = this.state
        return (
            <div className="app_model">
                <Search />
            </div>
        )
    }

    toggleAppContainer = (itme) => {
        this.setState({ navbarChecked: itme.id })
    }


}
