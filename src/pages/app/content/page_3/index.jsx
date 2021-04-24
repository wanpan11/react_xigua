import React, { Component } from 'react'
import { Layout } from 'antd';
import './index.scss'
import { MySwitch, Mycard } from '../../../../components'
import store from '../../../../redux/store'
import { sidebar_auto_none, sidebar_auto_diplay } from '../../../../redux/sidebar_action'

const { Content } = Layout;

export default class page_3 extends Component {
    render() {
        const { sidebarAutoDisplay } = store.getState()
        return (
            <Layout className="layout">
                <Content>
                    <div className="site-card-border-less-wrapper">
                        <Mycard title="风格设置" bordered={false} >
                            <MySwitch oncheng={this.oncheng('sidebar')} checked={sidebarAutoDisplay}>详情页侧边栏自动隐藏</MySwitch>
                        </Mycard>
                    </div>
                </Content>
            </Layout>
        )
    }

    oncheng = (type) => {
        return (checked) => {
            if (type === 'sidebar') {
                checked
                    ?
                    store.dispatch(sidebar_auto_diplay(true))
                    :
                    store.dispatch(sidebar_auto_none(false))

            }
        }
    }
}