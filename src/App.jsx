//引入依赖
import React from "react"
import { BrowserRouter } from 'react-router-dom'
import { Pages } from './config/router.config'

export default class App3 extends React.Component {

    state = {
        height: '0',
    }

    componentDidMount() {
        /* 固定页面高度 */
        const innerHeight = window.innerHeight + 'px'
        this.setState({ height: innerHeight });
        window.onresize = () => {
            const innerHeight = window.innerHeight + 'px'
            this.setState({ height: innerHeight });
        }
    }

    render() {
        const { height } = this.state
        return (
            <BrowserRouter>
                <div style={{ height: height }} id="app">
                    <Pages></Pages>
                </div>
            </BrowserRouter>
        )
    }

}

