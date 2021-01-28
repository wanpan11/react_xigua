import React, { Component } from 'react'
import './Tips_1.scss'

export default class TipsBox extends Component {
    render() {
        const { msg } = this.props
        return (
            <div className="Tips_1_box">
                <h3>{msg}</h3>
            </div>
        )
    }
}
