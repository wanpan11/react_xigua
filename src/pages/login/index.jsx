import React, { Component } from 'react'
import { setUrl } from '../../config/router.config'

export default class Login extends Component {

    componentDidMount() {
        const { history } = this.props
        const { history: { location: { pathname } } } = this.props;
        pathname && history.replace(setUrl.defaultUrl)
    }

    render() {

        return (
            <div>
                Login
            </div>
        )
    }
}
