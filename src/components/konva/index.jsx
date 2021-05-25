import React, { Component, Fragment } from 'react'
import { Stage, Layer, Rect } from 'react-konva'
// import Konva from 'konva';
import './index.scss'

class GraphContent extends React.Component {
    state = {
        color: 'rgba(0,0,0,0.6)',
        border: 'red',
    }

    render() {
        const { state } = this.props
        const { markInfoArr } = state
        const { color, border } = this.state
        return (
            <Fragment>
                <Rect
                    x={state.startX}
                    y={state.startY}
                    width={state.markWidth}
                    height={state.markHeight}
                    fill={color}
                    stroke={border}
                    strokeWidth={2}
                // cornerRadius={50}
                // dash={[20, 10]}
                />
                {
                    markInfoArr.map((ele, index) => {
                        const { startX, startY, markWidth, markHeight } = ele
                        return (
                            <Rect
                                x={startX}
                                y={startY}
                                width={markWidth}
                                height={markHeight}
                                fill={color}
                                stroke={border}
                                strokeWidth={2}
                                key={`Rect_${index}`}
                            // cornerRadius={50}
                            // dash={[20, 10]}
                            />
                        )
                    })
                }
            </Fragment>
        )
    }
}

class Konva extends Component {
    state = {
        markInfoArr: [],
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
        markWidth: 0,
        markHeight: 0,
    }

    render() {
        const { style, height, width } = this.props
        return (
            <Stage
                style={style}
                height={height}
                width={width}
                onMouseDown={this.mouseEvent}
                onMouseUp={this.mouseEvent}
                ref={(ele) => {
                    this.canvs_ele = ele
                }}
            >
                <Layer>
                    <GraphContent state={this.state} />
                </Layer>
            </Stage>
        )
    }

    mouseEvent = (evt) => {
        const {
            startX,
            startY,
            markWidth,
            markHeight,
            markInfoArr,
        } = this.state
        const { canvs_ele } = this
        const { type, evt: { offsetX, offsetY }, } = evt
        let stateChange = {}
        if (type === 'mousedown') {
            canvs_ele.addEventListener('mousemove', this.canvasMarkHandler)
            stateChange.startX = offsetX
            stateChange.startY = offsetY
            this.setState(stateChange)
        } else if (type === 'mouseup') {
            canvs_ele.removeEventListener('mousemove', this.canvasMarkHandler)

            let currentMarkInfoArr = markInfoArr.concat()
            currentMarkInfoArr.push({ startX, startY, markWidth, markHeight })

            stateChange.markInfoArr = currentMarkInfoArr
            stateChange.endX = offsetX
            stateChange.endY = offsetY
            stateChange.startX = 0
            stateChange.startY = 0
            stateChange.markWidth = 0
            stateChange.markHeight = 0
            this.setState(stateChange)
        }
    }

    canvasMarkHandler = (evt) => {
        const { startX, startY } = this.state
        const { offsetX, offsetY } = evt
        const width = offsetX - startX
        const height = offsetY - startY
        let state = {}
        state.markWidth = width
        state.markHeight = height
        this.setState(state)
    }
}

export default Konva
