import React, { Component } from 'react'
import { Link } from 'react-router-dom'


//引入数据
import info from './info.json'

export default class InfoBlock extends Component {
    render() {
        return (
            <div>
                <div className="item_box">
                    {
                        info.map(ele => [
                            <Link className="item_block" key={ele.id} to={`/tab_0/${ele.id}`}>
                                <h1>{ele.title}</h1>
                                <span>{ele.content}</span>
                            </Link>
                        ])
                    }
                </div>
            </div >
        )
    }
}
