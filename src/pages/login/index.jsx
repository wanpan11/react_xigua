import React, { Component } from 'react'
import { setUrl } from '../../config/router.config'
import styles from './index.module.scss'
import { MyinputAnimeta, Mybutton } from '../../components'
import smarteTool from '../../util/smarteTool.js'


export default class Login extends Component {

    state = {
        userAcount: '',
        password: ''
    }

    render() {
        const { userAcount, password } = this.state
        return (
            <div className={styles.login_page}>
                <div>
                    <div className={styles.login_box}>
                        <div className={styles.logo_box}>
                            <div className={styles.logo}></div>
                        </div>
                        <MyinputAnimeta type="text" value={userAcount} onchange={this.onchange('userAcount')}>帐号</MyinputAnimeta>
                        <MyinputAnimeta type="password" value={password} onchange={this.onchange('password')}>密码</MyinputAnimeta>
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

    onchange = (type) => {
        debugger
        return (evn) => {
            const value = smarteTool.getDeepVal(evn, 'target.value')
            let changeState = {}
            changeState[type] = value
            this.setState(changeState)
        }
    }


}
