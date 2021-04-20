import React from "react";
import { withRouter } from 'react-router-dom'
import { sidebar, setUrl } from '../../router'
import { CSSTransition } from 'react-transition-group';
import PubSub from 'pubsub-js'
import './index.scss'

import { /* RightOutlined */ SmileOutlined, /* DownOutlined */ MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

class Sidebar extends React.Component {

    state = {
        minibar: false,
        normalbar: true
    }

    componentDidMount() {

        /* 默认URL切换路由路径 */
        const { history } = this.props
        const { history: { location: { pathname } } } = this.props;
        debugger
        if (pathname === setUrl.defaultUrl) {
            const path = setUrl.page0
            history.replace(path)
        }

        /* 导航栏切换 */
        PubSub.subscribe('openItemInfo', (_, obj) => {
            this.setState({ minibar: true, normalbar: false });
        })

    }

    componentWillUpdate() {
        const { history: { location: { pathname } } } = this.props;
        if (pathname === setUrl.defaultUrl || pathname === setUrl.page0) {
            const { minibar } = this.state
            if (minibar) {
                this.setState({
                    minibar: false,
                    normalbar: true
                })
            }
        }
    }

    render() {
        const { history: { location: { pathname } } } = this.props;
        const { minibar, normalbar } = this.state
        return (
            <div className="sidebar_box">

                <CSSTransition
                    in={minibar}
                    timeout={100}
                    classNames="sidebar_mini"
                    unmountOnExit
                >
                    <div className="sidebar_box_minibar" onClick={this.switchSidebar()} >
                        <MenuUnfoldOutlined />
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={normalbar}
                    timeout={300}
                    classNames="sidebar_normal"
                    unmountOnExit
                >
                    <div className="sidebar_box_normal">

                        <div className="sidebar_logo">
                            <div className="logo"></div>
                            {/* <span>西瓜视频</span> */}
                        </div>

                        <ul className="sidebar_list">
                            {
                                sidebar.map(ele => {
                                    return (
                                        <li key={ele.key}>
                                            <div className={pathname === ele.path || pathname === ele.defaultPath ? 'item_selected sidebar_itme' : 'sidebar_itme'} onClick={this.setUrl(ele.key)}>
                                                <div>
                                                    <SmileOutlined />
                                                    <span className="sidebar_list_text">{ele.text}</span>
                                                </div>
                                                {/* {
                                                    ele.key === '000'
                                                        ?
                                                        ''
                                                        :
                                                        (pathname === ele.path ? <DownOutlined /> : <RightOutlined />)
                                                } */}
                                            </div>
                                            <div className="list_line_box">
                                                <CSSTransition
                                                    in={pathname === ele.path}
                                                    timeout={300}
                                                    classNames="list_line"
                                                    unmountOnExit
                                                >
                                                    <div className="list_line"></div>
                                                </CSSTransition>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="sidebar_control" onClick={this.switchSidebar()}>
                            <MenuFoldOutlined />
                        </div>

                    </div>
                </CSSTransition>

            </div>
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

    switchSidebar = () => {
        return () => {
            const { minibar, normalbar } = this.state
            this.setState({
                minibar: minibar ? false : true,
                normalbar: normalbar ? false : true
            })
        }
    }

}

export default withRouter(Sidebar)