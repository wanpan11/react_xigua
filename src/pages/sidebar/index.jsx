import React from "react";
import { withRouter } from 'react-router-dom'
import './index.scss'

import { RightOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';


class Sidebar extends React.Component {

    state = {
        selected: 'yes',
        sidebarHeight: '0',
        item_selected: '001'
    }

    componentDidMount() {
        console.log(window);
        const innerHeight = window.innerHeight + 'px'
        this.setState({ sidebarHeight: innerHeight })
    }

    render() {
        const { listData } = this.props;
        const { sidebarHeight, item_selected } = this.state

        return (
            <div className="sidebar_box" style={{ height: sidebarHeight }}>
                <div className="sidebar_logo">
                    logo
                </div>
                <ul className="sidebar_list">
                    {
                        listData.map(ele => {
                            return (
                                <li key={ele.key} className={item_selected === ele.key ? 'item_selected' : ''} onClick={this.listSelectedSwitch(ele.key)} >
                                    <div>
                                        <SmileOutlined />
                                        <span className="sidebar_list_text">{ele.text}</span>
                                    </div>
                                    {
                                        ele.key === '001' ? '' : (item_selected === ele.key ? <DownOutlined /> : <RightOutlined />)
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div >
        )
    }

    listSelectedSwitch = (key) => {
        return () => {
            this.setUrl(key)
            this.setState({ item_selected: key })
        }
    }

    setUrl = (key) => {
        const router = {
            '001': '',
            '002': 'Page1',
            '003': 'Page2',
            '004': 'Page3'
        }
        const { history } = this.props
        history.push(`/${router[key]}`)
    }


}

export default withRouter(Sidebar)