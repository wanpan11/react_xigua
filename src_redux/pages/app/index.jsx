//引入依赖
import React from "react"
import styles from './index.module.scss'
import { setUrl } from '../../config/router.config'

import Sidebar from './sidebar'
import Content from './content'

export default class App extends React.Component {

    constructor(props) {
        super(props)
        const token = sessionStorage.getItem("token");
        console.log(this.props);
        if (!token) {
            const { history } = this.props
            history.replace(setUrl.login)
        }
    }

    render() {
        return (
            <div className={styles.content} >
                <Sidebar />
                <Content />
            </div>
        )
    }

}
