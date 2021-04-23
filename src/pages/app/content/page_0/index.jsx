import React, { Component } from 'react'
import { setUrl } from '../../../../config/router.config'
import './index.scss'
import axios from 'axios'
// import PubSub from 'pubsub-js'
// import { Skeleton } from 'antd';
import { Loading } from '../../../../components'


export default class ListPage extends Component {

    state = {
        data: [],
        done: false
    }

    componentDidMount() {
        this.getListPageData()
    }

    render() {
        const { data, done } = this.state
        return (
            <div className="card_box">
                {
                    done
                        ?
                        <div className="card_item_box">
                            {
                                data.map(ele => {
                                    return (
                                        <div className="card_item" key={ele.key} onClick={this.setUrl()} >
                                            <img src="" alt="" />
                                            <div>
                                                <h1>{ele.title}</h1>
                                                <span>{ele.content}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        // <Skeleton active />
                        <Loading />
                }
            </div>
        )
    }

    getListPageData = () => {
        const { done } = this.state
        if (done) {
            return
        } else {
            axios.get('/api/getTodayTask').then(res => {
                setTimeout(() => {
                    this.setState({ data: res.data, done: true })
                }, 300);
            }).catch(err => {
                console.log(err);
            })
        }
    }

    setUrl = () => {
        return () => {
            const path = setUrl.listPage
            const { history } = this.props
            history.push(path)
        }
    }

}
