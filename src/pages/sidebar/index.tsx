import React from 'react'
import './index.scss'


interface State {
    selected: string
}

export default class Sidebar extends React.Component<{}, State> {

    state: State = {
        selected: 'yes'
    }

    componentDidMount() {
        
    }


    render() {
        return (
            <ul className="sidebar_box" ref="sidebar_ele">
                <li>首页</li>
                <li>精彩内容</li>
                <li>热门推荐</li>
                <li>配置管理</li>
            </ul>
        )
    }
}