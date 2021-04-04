import React, { Component } from 'react'
import './LoadingComponent.scss'
import Lottie from 'react-lottie-player'
import lottieJson from './loading_1.json'

export default class LoadingComponent extends Component {
    render() {
        return (
            <div className="LoadingComponent_box">
                <div className="loading_1">
                    <Lottie loop animationData={lottieJson} play style={{ width: 144, height: 144 }} />
                </div>
            </div>
        )
    }
}
