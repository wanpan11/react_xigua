import React, { Component } from 'react'
import styles from './index.module.scss'

export default class Tips extends Component {

    state = {
        width: 0,
        animeta: true
    }

    componentDidMount() {
        const { clientWidth } = this.tips
        const { timeOut } = this.props
        this.setState({
            width: clientWidth / 2
        })

        setTimeout(() => {
            timeOut()
            this.setState({
                animeta: false
            })
        }, 2500);
    }

    render() {
        const { msg } = this.props
        const { width, animeta } = this.state

        let className
        animeta
            ?
            className = styles.tips_active
            :
            className = styles.tips_exit


        return (
            <div className={className} style={{ left: `calc(50% - ${width}px)` }} ref={ele => { this.tips = ele }}>
                <h3>{msg}</h3>
            </div>
        )
    }
}
