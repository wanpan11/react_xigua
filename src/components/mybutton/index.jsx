import React, { Component } from 'react'
import styles from './index.module.scss'

export default class Mybutton extends Component {
    render() {
        const { children, onclick, type } = this.props
        let className
        if (type === 'big') {
            className = styles.mybutton
        }
        return (
            <div className={className}>
                <button className={styles.big_btn} onClick={onclick}>{children}</button>
            </div>
        )
    }
}
