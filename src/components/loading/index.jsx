import React, { Component } from 'react'
import './index.scss'
import Lottie from 'react-lottie-player'
import lottieJson from './loading_1.json'

export default class LoadingComponent extends Component {
    render() {
        const { children } = this.props
        return (
            <div className="LoadingComponent_box">
                <div className="loading_1">
                    <Lottie loop animationData={lottieJson} play style={{ width: 144, height: 144 }} />
                    {
                        children
                            ?
                            <div style={{ color: '#fff', textAlign: 'center' }}>{children}</div>
                            :
                            null
                    }
                </div>
            </div>
        )
    }
}
