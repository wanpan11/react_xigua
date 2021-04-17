import React from "react";
import { withRouter } from 'react-router-dom'
import { sidebar } from '../../router/router'
import './index.scss'
import logo from '../../img/logo.png'

import { RightOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';


class Sidebar extends React.Component {

    state = {
        sidebarHeight: '0',
    }

    componentDidMount() {
        const innerHeight = window.innerHeight + 'px'
        this.setState({ sidebarHeight: innerHeight })
    }

    render() {
        const { history: { location: { pathname } } } = this.props;
        const { sidebarHeight } = this.state
        return (
            <div className="sidebar_box" style={{ height: sidebarHeight }}>
                <div className="sidebar_logo">
                    <img src={logo} alt="logo" className="logo" />
                    <span>西瓜视频</span>
                </div>
                <ul className="sidebar_list">
                    {
                        sidebar.map(ele => {
                            return (
                                <li key={ele.key} className={pathname === ele.path ? 'item_selected' : ''} onClick={this.setUrl(ele.key)}>
                                    <div>
                                        <SmileOutlined />
                                        <span className="sidebar_list_text">{ele.text}</span>
                                    </div>
                                    {
                                        ele.key === '000' ? '' : (pathname === ele.path ? <DownOutlined /> : <RightOutlined />)
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div >
        )
    }

    setUrl = (key) => {
        return () => {
            let path = ''
            sidebar.forEach(ele => {
                if (ele.key === key) {
                    path = ele.path
                }
            })
            const { history } = this.props
            history.push(path)
        }
    }


}

export default withRouter(Sidebar)