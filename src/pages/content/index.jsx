import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import './index.scss'

import ItemCard from '../../components/item_card'
import Page1 from './page_1'
import Page2 from './page_2'
import Page3 from './page_3'

export default class index extends Component {
    render() {
        return (
            <div className="content_box">
                <Switch>
                    <Route exact path="/" component={ItemCard}></Route>
                    <Route path="/Page1" component={Page1}></Route>
                    <Route path="/Page2" component={Page2}></Route>
                    <Route path="/Page3" component={Page3}></Route>
                </Switch>
            </div>
        )
    }
}
