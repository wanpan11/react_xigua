import React, { Component } from 'react'
import './index.scss'

import { Layout } from 'antd';
import { MySwitch, Mycard } from '../../../../components'
const { Content } = Layout;


export default class page_3 extends Component {
    render() {
        return (
            <Layout className="layout">
                <Content>
                    <div className="site-card-border-less-wrapper">
                        <Mycard title="风格设置" bordered={false} >
                            <MySwitch>夜间模式</MySwitch>
                            <MySwitch>夜间模式</MySwitch>
                            <MySwitch>夜间模式</MySwitch>
                            <MySwitch>夜间模式</MySwitch>
                        </Mycard>
                    </div>
                </Content>
            </Layout>
        )
    }
}