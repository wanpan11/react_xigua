import React, { Component, Fragment } from 'react'
import CSSTransition from 'react-addons-css-transition-group'

export default class page_1 extends Component {

    state = {
        show: true
    }

    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={el => { el.style.color = 'blue' }}
                    appear={true}
                >
                    <div>hello</div>
                </CSSTransition>
                <button onClick={this.handleToggole}>toggole</button>
            </Fragment>
        )
    }

    handleToggole = () => {
        this.setState({
            show: this.state.show ? false : true
        })
    }

}