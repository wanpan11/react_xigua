import React, { Component } from 'react'
import { setUrl } from '../../../router'
import data from './data.json'

export default class ListPage extends Component {

    render() {
        return (
            <div className="card_box">
                <div className="card_item_box">
                    {
                        data.map(ele => {
                            return (
                                <div className="card_item" key={ele.key} onClick={this.setUrl()} >
                                    <img src="" alt="" />
                                    <div>
                                        <h1>{ele.title}</h1>
                                        <span>{ele.content}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }

    setUrl = () => {
        return () => {
            const path = setUrl.listPage
            const { history } = this.props
            history.push(path)
        }
    }
}
