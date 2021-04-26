import React, { Component } from 'react'
import store from '../../../../redux/store'
import PubSub from 'pubsub-js'
import smartaTool from '../../../../util/smarteTool.js'
// import styles from './index.module.scss'
import { Mycard } from '../../../../components'

export default class ItemInfo extends Component {

    componentDidMount() {
        const { sidebarReducre: { sidebarAutoDisplay } } = store.getState()
        sidebarAutoDisplay && PubSub.publish('openItemInfo', { msg: 'success' })
    }

    render() {
        const { history: { location } } = this.props
        const params = smartaTool.getUrlParams(location.search)
        return (
            <div>
                <Mycard title={params.title} >
                    <div>
                        内容
                    </div>
                </Mycard>
            </div>
        )
    }
}
