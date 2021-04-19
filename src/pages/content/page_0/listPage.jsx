import React, { Component } from 'react'
import data from './data.json'

export default class ListPage extends Component {

    render() {
        const { openItemFun } = this.props
        return (
            <div className="card_box">
                <div className="card_item_box">
                    {
                        data.map(ele => {
                            return (
                                <div className="card_item" key={ele.key} onClick={openItemFun(ele)} >
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
}
