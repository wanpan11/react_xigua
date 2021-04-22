import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class ItemInfo extends Component {

    componentDidMount() {
        PubSub.publish('openItemInfo', { msg: 'success' })
    }

    render() {

        return (
            <div>
                infos
            </div>
        )
    }
}