import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './index.scss'

import { page0 } from '../../../router'


export default class Page0 extends Component {

    render() {
        return (
            <Switch>
                {
                    page0.map(ele => {
                        return <Route path={ele.path} exact={ele.exact} component={ele.component} key={ele.key}></Route>
                    })
                }
            </Switch>
        )
    }

}
