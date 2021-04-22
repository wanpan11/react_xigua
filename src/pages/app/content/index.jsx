import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import Page0 from './page_0'
import Page1 from './page_1'
import Page2 from './page_2'
import Page3 from './page_3'

export default class Content extends Component {
    render() {
        return (
            <Switch>
                <Route to="/index" component={Page0} ></Route>
                <Route to="" component={Page1} ></Route>
                <Route to="" component={Page2} ></Route>
                <Route to="" component={Page3} ></Route>
            </Switch>
        )
    }
}

