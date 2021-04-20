import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { page } from '../../router'
import './index.scss'


import Loading from '../../components/loading'


export default class index extends Component {

    state = {
        isDone: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isDone: true })
        }, 1000);
    }

    render() {
        const { isDone } = this.state

        return (
            <div className="content_box">
                {
                    isDone
                        ?
                        <Switch>
                            {
                                page.map(ele => {
                                    return (
                                        <Route path={ele.path} component={ele.component} key={ele.key}></Route>
                                    )
                                })
                            }
                        </Switch>
                        :
                        <Loading></Loading>
                }
            </div>
        )
    }
}
