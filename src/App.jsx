//引入依赖
import React, { Component } from 'react';
import PubSub from 'pubsub-js'

//引入样式、工具包



//引入组件
import NavBar from './components/Navbar/NavbarComponent';
import Index from './components/lndex/index';
import LoadingComponent from './components/Loading/LoadingComponent';
import TipsBox from './components/Tips/Tips_1';


console.log(LoadingComponent);

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
                <div className="app_head">
                    <NavBar toggleAppContainer={this.toggleAppContainer} />
                </div>
                <div className="app_container">
                    {
                        navbarChecked === '001' ?
                            <Index />
                            :
                            navbarChecked === '002' ?
                                <div>002</div>
                                :
                                navbarChecked === '003' ?
                                    <div>003</div>
                                    :
                                    <div>004</div>
                    }
                </div>
                { loading ? <LoadingComponent /> : ''}
                { tips.tips ? <TipsBox msg={tips.msg} /> : ''}
            </div>
        )
    }

    toggleAppContainer = (itme) => {
        this.setState({ navbarChecked: itme.id })
    }


}
