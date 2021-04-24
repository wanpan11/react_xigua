import React, { Component } from 'react'
import { setUrl } from '../../config/router.config'
import styles from './index.module.scss'
import { Myinput, Mybutton } from '../../components'

export default class Login extends Component {

    render() {
        return (
            <div className={styles.login_page}>
                <div>
                    <div className={styles.login_box}>
                        <div className={styles.logo_box}>
                            <div className={styles.logo}></div>
                        </div>
                        <Myinput>帐号</Myinput>
                        <Myinput>密码</Myinput>
                        <Mybutton onclick={this.onclick} type="big">登录</Mybutton>
                    </div>
                </div>
            </div>
        )
    }

    onclick = () => {
        const { history } = this.props
        const { history: { location: { pathname } } } = this.props;
        pathname && history.push(setUrl.defaultUrl)
    }


}
