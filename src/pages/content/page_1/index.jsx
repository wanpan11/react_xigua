import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group';
import './index.scss'

export default class Page1 extends Component {

    state = {
        showButton: true,
        showMessage: false
    }

    render() {
        const { showButton, showMessage } = this.state

        return (
            <Fragment>
                {showButton && (
                    <button onClick={this.setShowMessage(true)} > Show Message </button>
                )}
                <CSSTransition
                    in={showMessage}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={this.setShowButton(false)}
                    onExited={this.setShowButton(true)}
                >
                    <div>
                        <h1>Animated alert message</h1>
                        <p> This alert message is being transitioned in and out of the DOM. </p>
                        <button onClick={this.setShowMessage(false)}>Close</button>
                    </div>
                </CSSTransition>
            </Fragment>
        )
    }

    setShowMessage = (boolean) => {
        return () => {
            this.setState({ showMessage: boolean })
        }
    }

    setShowButton = (boolean) => {
        return () => {
            this.setState({ showButton: boolean })
        }
    }
}