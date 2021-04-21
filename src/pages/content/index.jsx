import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import { page } from '../../router'
import axios from 'axios'
import './index.scss'


import Loading from '../../components/loading'


export default class Content extends Component {

    state = {
        isDone: false
    }

    componentDidMount() {
        //通过给定的ID来发送请求
        axios.get('/user?ID=12345')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            });
        //以上请求也可以通过这种方式来发送
        axios.get('/user', {
            params: {
                ID: 12345
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            });
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
                                        <Route path={ele.path} exact={ele.exact} component={ele.component} key={ele.key}></Route>
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
