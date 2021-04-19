import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class ItemInfoPage extends Component {

    componentDidMount() {
        PubSub.publish('openItemInfo', { msg: 'success' })
    }

    render() {
        const { itmeInfo } = this.props

        return (
            <div>
                <h1>{itmeInfo.title}</h1>
                <span>{itmeInfo.content}</span>
            </div>
        )
    }
}
