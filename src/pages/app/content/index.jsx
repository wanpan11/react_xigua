import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
// import PubSub from 'pubsub-js'
import './index.scss'

import Page0 from './page_0'
import Page1 from './page_1'
import Page2 from './page_2'
import Page3 from './page_3'
import ItemInfo from './llist_info'


export default class Content extends Component {

    render() {
        return (
            <div className="content_box">
                <Switch>
                    <Route path="/index/page0" exact component={Page0} ></Route>
                    <Route path="/index/page1" component={Page1} ></Route>
                    <Route path="/index/page2" component={Page2} ></Route>
                    <Route path="/index/page3" component={Page3} ></Route>
                    <Route path="/index/page0/itemInfo" component={ItemInfo} ></Route>
                </Switch>
            </div>
        )
    }
}

