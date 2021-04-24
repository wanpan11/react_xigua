import React, { Component } from 'react'
import './index.scss'
import { Switch } from 'antd';



export default class Myswitch extends Component {

    render() {
        const { children, oncheng, checked } = this.props
        return (
            <div className="mySwitch_box">
                <div>{children}</div>
                <Switch onChange={oncheng} checked={checked} />
            </div>
        )
    }
}
