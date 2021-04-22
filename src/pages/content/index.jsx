import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { page } from '../../router'
import PubSub from 'pubsub-js'
import './index.scss'
import Loading from '../../components/loading'


export default class Content extends Component {

    state = {
        isDone: false
    }

    componentDidMount() {
        PubSub.subscribe('getListPageInfo', (_, obj) => {
            const code = obj.code
            if (code === 114) {
                this.setState({ isDone: true });
            } else {
                this.setState({ isDone: false });
            }
        })
    }

    render() {

        const { isDone } = this.state

        return (
            <div className="content_box">
                {isDone ? null : <Loading />}
                {
                    <Switch>
                        {
                            page.map(ele => {
                                return (
                                    <Route path={ele.path} exact={ele.exact} component={ele.component} key={ele.key} />
                                )
                            })
                        }
                    </Switch>
                }
            </div>
        )
    }
}
