import React, { Component } from 'react'
import { setUrl } from '../../../../config/router.config'
import axios from 'axios'
import PubSub from 'pubsub-js'


export default class ListPage extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        PubSub.publish('getListPageInfo', { code: 113 })
        axios.get('http://localhost:4400/data.json').then(res => {
            console.log(res);
            setTimeout(() => {
                PubSub.publish('getListPageInfo', { code: 114 })
                this.setState({ data: res.data })
            }, 300);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { data } = this.state
        return (
            <div className="card_box">
                <div className="card_item_box">
                    {
                        data.length > 0
                            ?
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
                            :
                            null
                    }

                </div>
            </div>
        )
    }

    setUrl = () => {
        return () => {
            const path = setUrl.listPage
            const { history } = this.props
            history.push(path)
        }
    }

}
