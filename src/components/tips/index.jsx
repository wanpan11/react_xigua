import React, { Component } from 'react'
import './index.scss'

export default class Tips extends Component {
    render() {
        const { msg } = this.props
        return (
            <div className="Tips_1_box">
                <h3>{msg}</h3>
            </div>
        )
    }
}
