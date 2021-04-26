import React, { Component } from 'react'
import { setUrl } from '../../../../config/router.config'
import './index.scss'
import axios from 'axios'
// import PubSub from 'pubsub-js'
import { Loading } from '../../../../components'
import { smarteTool } from '../../../../util/smarteTool.js'

export default class ListPage extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        this.getListPageData()
    }

    render() {
        const { data } = this.state
        return (
            <div className="card_box">
                {
                    data.length > 0
                        ?
                        <div className="card_item_box">
                            {
                                data.map(ele => {
                                    return (
                                        <div className="card_item" key={ele.key} onClick={this.setUrl(ele.key, ele.title)} >
                                            <img src={ele.url} alt="" />
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
                        <Loading />
                }
            </div>
        )
    }

    getListPageData = () => {

        axios.get('/mock/listPageInfo').then(res => {
            const data = smarteTool.getDeepVal(res, 'data.dataSource')
            // const code = smarteTool.getDeepVal(res, 'data.code')
            // setTimeout(() => {
            this.setState({ data: data })
            // }, 200);
        }).catch(err => {
            console.log(err);
        })

    }

    setUrl = (key, title) => {
        return () => {
            const path = setUrl.listPage
            const { history } = this.props
            let params = {}
            params.key = key
            params.title = title
            const openPath = smarteTool.setUrlParams(path, params)
            history.push(openPath)
        }
    }

}
