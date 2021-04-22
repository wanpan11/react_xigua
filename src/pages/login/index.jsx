import React, { Component } from 'react'

export default class Login extends Component {

    componentDidMount() {
        const { history } = this.props
        const { history: { location: { pathname } } } = this.props;
        pathname && history.replace('/index')
    }

    render() {

        return (
            <div>
                Login
            </div>
        )
    }
}
