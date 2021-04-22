import React, { Component } from 'react'
import './index.scss'
import { Switch } from 'antd';

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

export default class MySwitch extends Component {

    render() {
        const { children } = this.props
        return (
            <div className="mySwitch_box">
                <div>{children}</div>
                <Switch defaultChecked onChange={onChange} />
            </div>
        )
    }
}
