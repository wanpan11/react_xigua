import React, { Component } from 'react'
import { Layout } from 'antd';
import './index.scss'
import { Myswitch, Mycard } from '../../../../components'
import store from '../../../../redux/store'
import { sidebar_auto_none, sidebar_auto_diplay } from '../../../../redux/sidebar_action'

const { Content } = Layout;

export default class page_3 extends Component {
    render() {
        const { sidebarReducre: { sidebarAutoDisplay } } = store.getState()
        return (
            <Layout className="layout">
                <Content>
                    <div className="site-card-border-less-wrapper">
                        <Mycard title="风格设置" bordered={false} >
                            <Myswitch oncheng={this.oncheng('sidebar')} checked={sidebarAutoDisplay}>详情页侧边栏自动隐藏</Myswitch>
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