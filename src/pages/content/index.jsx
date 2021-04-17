import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { page } from '../../router/router'
import './index.scss'


export default class index extends Component {
    render() {
        return (
            <div className="content_box">
                <Switch>
                    {
                        page.map(ele => {
                            return (
                                ele.key === '001'
                                    ?
                                    <Route exact path={ele.path} component={ele.component} key={ele.key}></Route>
                                    :
                                    <Route path={ele.path} component={ele.component} key={ele.key}></Route>
                            )
                        })
                    }
                </Switch>
            </div>
        )
    }
}
