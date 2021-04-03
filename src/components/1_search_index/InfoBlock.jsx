import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import Search from './search'

//引入数据
import info from './info.json'

export default class InfoBlock extends Component {
    render() {
        return (
            <div>
                <Search />
                <div className="item_box">
                    {
                        info.map(ele => [
                            <div className="item_block" key={ele.id}>
                                <h1>{ele.title}</h1>
                                <span>{ele.content}</span>
                            </div>
                        ])
                    }
                </div>
            </div >
        )
    }
}
