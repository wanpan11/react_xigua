//引入依赖
import React from "react"

import Sidebar from './sidebar'
import Content from './content'

export default class App extends React.Component {

    state = {
        Height: '0',
    }

    componentDidMount() {
        const innerHeight = window.innerHeight + 'px'
        this.setState({ Height: innerHeight });
        window.onresize = () => {
            const innerHeight = window.innerHeight + 'px'
            this.setState({ Height: innerHeight });
        }
    }

    render() {
        const { Height } = this.state
        return (
            <div id="app" style={{ height: Height }}>
                <Sidebar />
                <Content />
            </div>
        )
    }

}
