//引入依赖
import React, { Component } from 'react';

//引入样式、工具包
import './style/initStyle.scss'

//引入组件
import Search from './components/1_search_index/search'
import InfoBlock from './components/1_search_index/info_block'


export default class App extends Component {

    render() {
        return (
            <div className="app_model">
                <Search />
                <div>
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                    <InfoBlock />
                </div>
            </div>
        )
    }

}
