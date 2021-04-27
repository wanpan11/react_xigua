import React, { Component } from 'react'
import { setUrl } from '../../config/router.config'
import styles from './index.module.scss'
import { MyinputAnimeta, Mybutton, Tips } from '../../components'
import { smarteTool } from '../../util/smarteTool.js'
import axios from 'axios'
import '../../request/api'

export default class Login extends Component {

    state = {
        userAcount: '',
        userPassword: '',
        tips: ''
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                userAcount: '123',
                userPassword: '123'
            })
        }, 200);
    }

    render() {
        const { userAcount, userPassword, tips } = this.state
        return (
            <div className={styles.login_page}>
                <div style={{ position: 'relative' }}>

                    {
                        tips !== ''
                            ?
                            <Tips msg={tips} timeOut={this.tipsTimeOut} />
                            :
                            null
                    }

                    {/* <div className={styles.panda_box}>
                        <img src="./img/login_00.png" alt="" />
                    </div> */}

                    <div className={styles.login_box}>
                        <div className={styles.logo_box}>
                            <div className={styles.logo}></div>
                        </div>
                        <MyinputAnimeta type="text" value={userAcount} onchange={this.onchange('userAcount')} animeta={userAcount ? 'none' : 'done'} >帐号</MyinputAnimeta>
                        <MyinputAnimeta type="password" value={userPassword} onchange={this.onchange('userPassword')} animeta={userPassword ? 'none' : 'done'} >密码</MyinputAnimeta>
                        <Mybutton onclick={this.onclick} type="big">登录</Mybutton>
                    </div>

                </div>
            </div>
        )
    }

    onclick = () => {
        const { history } = this.props
        const { userAcount, userPassword } = this.state
        let params = {}
        params.userAcount = userAcount
        params.userPassword = userPassword

        //#region 
        /* axios.get('/mock/loginAuth', { params }).then(res => {
            debugger
            const { code } = res.data
            if (code === 114) {
                history.replace(setUrl.index)
            } else {
                alert('帐号/密码有误！')params
            }
        }) */
        //#endregion

        axios.post('http://20181024Mock.com/loginAuth', params).then(res => {
            const { code } = res.data
            if (code === 114) {
                history.replace(setUrl.index)
            } else {
                const { msg } = res.data
                this.setState({
                    tips: msg
                })
            }
        })

    }

    onchange = (type) => {
        return (evn) => {
            const value = smarteTool.getDeepVal(evn, 'target.value')
            let changeState = {}
            changeState[type] = value
            this.setState(changeState)
        }
    }

    tipsTimeOut = () => {
        this.setState({
            tips: ''
        })
    }


}
