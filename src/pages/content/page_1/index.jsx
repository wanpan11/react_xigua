import React, { Component, Fragment } from 'react'
import CSSTransitionGroup from 'react-transition-group';

import './index.scss'

export default class page_1 extends Component {

    state = {
        isShow: true
    }

    render() {
        return (
            <Fragment>
                <CSSTransitionGroup
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="test"
                    appear={true}
                >
                    <div>hello</div>
                </CSSTransitionGroup>
                <button onClick={this.handleToggole}>toggole</button>
            </Fragment>
        )
    }

    handleToggole = () => {
        this.setState({
            show: this.state.isShow ? false : true
        })
    }

}