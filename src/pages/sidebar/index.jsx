import React from "react";
import { withRouter, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import { setUrl, sidebarInfo } from '../../config/router.config'
import { IconFont } from '../../config/iconfont.config'
import PubSub from 'pubsub-js'
// import axios from 'axios'
import './index.scss'


class Sidebar extends React.Component {

    state = {
        minibar: false,
        normalbar: true,
    }

    componentDidMount() {

        /* 默认URL切换路由路径 */
        const { history } = this.props
        const { history: { location: { pathname } } } = this.props;
        if (pathname === setUrl.defaultUrl) {
            const path = setUrl.page0
            history.replace(path)
        }

        /* 导航栏切换 */
        PubSub.subscribe('openItemInfo', (_, obj) => {
            this.setState({ minibar: true, normalbar: false });
        })

    }

    UNSAFE_componentWillUpdate() {
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
                        <IconFont type="iconzhedie_right" />
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
                        </div>

                        <ul className="sidebar_list">
                            {
                                sidebarInfo.map(ele => {
                                    return (
                                        <li key={ele.key}>
                                            <NavLink to={ele.path} className="sidebar_itme">
                                                <div>
                                                    {ele.icon ? <IconFont type={ele.icon} className="sidebar_list_icon" /> : ''}
                                                    <span className="sidebar_list_text">{ele.text}</span>
                                                </div>
                                            </NavLink>
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
                            <IconFont type="iconzhedie_left" />
                        </div>

                    </div>
                </CSSTransition>

            </div>
        )
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