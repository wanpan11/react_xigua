import React, { Component } from 'react'
import store from '../../../../redux/store'
import PubSub from 'pubsub-js'

export default class ItemInfo extends Component {

    componentDidMount() {
        const { sidebarReducre: { sidebarAutoDisplay } } = store.getState()
        sidebarAutoDisplay && PubSub.publish('openItemInfo', { msg: 'success' })
    }

    render() {

        return (
            <div>
                infos
            </div>
        )
    }
}
