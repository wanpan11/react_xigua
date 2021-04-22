import React from "react";
import { withRouter, NavLink } from 'react-router-dom'
import { sidebarInfo, setUrl } from '../../../config/router.config'
import { CSSTransition } from 'react-transition-group';
import { IconFont } from '../../../config/iconfont.config'
import PubSub from 'pubsub-js'
import './index.scss'


class Sidebar extends React.Component {

    state = {
        minibar: false,
    }

    componentDidMount() {

        /* 导航栏切换 */
        PubSub.subscribe('openItemInfo', (_, obj) => {
            this.setState({ minibar: true });
        })

    }

    UNSAFE_componentWillUpdate() {
        const { history: { location: { pathname } } } = this.props;
        if (pathname === setUrl.defaultUrl) {
            const { minibar } = this.state
            if (minibar) {
                this.setState({ minibar: false })
            }
        }
    }

    render() {
        const { history: { location: { pathname } } } = this.props;
        const { minibar } = this.state
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
                    in={!minibar}
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
                                        <li key={ele.key} >
                                            <NavLink to={ele.path} className="sidebar_itme" >
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
            const { minibar } = this.state
            this.setState({
                minibar: minibar ? false : true,
            })
        }
    }

}

export default withRouter(Sidebar)