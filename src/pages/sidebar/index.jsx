import React, { Fragment } from "react";
import { withRouter } from 'react-router-dom'
import { sidebar } from '../../router'
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
        PubSub.subscribe('openItemInfo', (_, obj) => {
            this.setState({ minibar: true, normalbar: false });
        })
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
                                        <Fragment>
                                            <li key={ele.key} className={pathname === ele.path ? 'item_selected' : ''} onClick={this.setUrl(ele.key)}>
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
                                            </li>
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
                                        </Fragment>
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