import React, { Component } from 'react'
import './index.scss'

import data from './data.json'

export default class index extends Component {

    render() {
        return (
            <div className="card_box">
                <div className="card_item_box">
                    {
                        data.map(ele => {
                            return (
                                <div className="card_item">
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
