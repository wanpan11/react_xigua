import React, { Component } from 'react'
import './index.scss'

import ListPage from './listPage'
import ItemInfoPage from './itemInfoPage'

export default class index extends Component {

    state = {
        itmeInfo: ''
    }

    render() {
        const { itmeInfo } = this.state
        return (
            <div>
                {
                    itmeInfo === ''
                        ?
                        <ListPage openItemFun={this.openItem} />
                        :
                        <ItemInfoPage itmeInfo={itmeInfo} />
                }
            </div>
        )
    }

    openItem = (info) => {
        return () => {
            this.setState({ itmeInfo: info })
        }
    }

}
