//引入依赖
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { ContentPage } from './config/router.config'
import './static/style/App3.scss'

export default class App3 extends React.Component {

    render() {
        return (
            <BrowserRouter>
                {ContentPage()}
            </BrowserRouter>
        )
    }

}

