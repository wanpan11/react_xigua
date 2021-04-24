//引入依赖
import React from "react"
import styles from './index.module.scss'

import Sidebar from './sidebar'
import Content from './content'

export default class App extends React.Component {

    render() {
        return (
            <div className={styles.content} >
                <Sidebar />
                <Content />
            </div>
        )
    }

}
