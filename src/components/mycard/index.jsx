import React, { Component } from 'react'
import './index.scss'

import { Card } from 'antd';
export default class Mycard extends Component {
    render() {
        const { children, title, bordered } = this.props
        return (
            <Card title={title} bordered={bordered} >
                {children}
            </Card>
        )
    }
}
