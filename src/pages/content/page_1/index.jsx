import React, { Component, Fragment } from 'react'
import './index.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class page_1 extends Component {

    state = {
        show: false
    }

    render() {
        debugger
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="element"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {

                        this.state.show ? <h1>My Element...</h1> : ''
                    }
                    <button onClick={this.showElement}>展示</button>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }

    showElement = () => {
        this.setState({ show: this.state.show ? false : true })
    }
}