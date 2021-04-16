import React from 'react'
import './index.scss'

import { RightOutlined, SmileOutlined } from '@ant-design/icons';


interface State {
    selected: string,
    sidebarHeight: string
}

interface Props {
    listData: Array<{ text: string, key: string }>
}

export default class Sidebar extends React.Component<Props, State> {

    state: State = {
        selected: 'yes',
        sidebarHeight: '0'
    }

    componentDidMount() {
        console.log(window);
        const innerHeight: string = window.innerHeight + 'px'
        this.setState({ sidebarHeight: innerHeight })
    }


    render() {
        const { listData } = this.props;
        const { sidebarHeight } = this.state
        return (
            <div className="sidebar_box">
                <div className="sidebar_logo">
                    logo
                </div>
                <ul className="sidebar_list" style={{ height: sidebarHeight }}>
                    {
                        listData.map(ele => {
                            return (
                                <li key={ele.key}>
                                    <div>
                                        <SmileOutlined />
                                        <span>{ele.text}</span>
                                    </div>
                                    <RightOutlined />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}