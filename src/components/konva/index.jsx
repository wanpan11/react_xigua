import React, { Component, Fragment } from 'react'
import { Stage, Layer, Rect } from 'react-konva'
// import Konva from 'konva';
import './konva.scss'

class ColoredRect extends React.Component {
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
                {markInfoArr.map((ele, index) => {
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
                })}
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
        const { width, height } = this.props
        return (
            <Stage
                className="canvs_box"
                width={width}
                height={height}
                onMouseDown={this.mouseEvent}
                onMouseUp={this.mouseEvent}
                ref={(ele) => {
                    this.canvs_ele = ele
                }}
            >
                <Layer>
                    <ColoredRect state={this.state} />
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
        const { getPositionInfo } = this.props
        const { canvs_ele } = this
        const {
            type,
            evt: { offsetX, offsetY },
        } = evt
        let RTN = {}
        if (type === 'mousedown') {
            canvs_ele.addEventListener('mousemove', this.canvasMarkHandler)
            RTN.startX = offsetX
            RTN.startY = offsetY
            this.setState(RTN)
        } else if (type === 'mouseup') {
            canvs_ele.removeEventListener('mousemove', this.canvasMarkHandler)

            let currentMarkInfoArr = markInfoArr.concat()
            currentMarkInfoArr.push({ startX, startY, markWidth, markHeight })

            RTN.markInfoArr = currentMarkInfoArr
            RTN.endX = offsetX
            RTN.endY = offsetY
            RTN.startX = 0
            RTN.startY = 0
            RTN.markWidth = 0
            RTN.markHeight = 0
            this.setState(RTN)
            getPositionInfo(this.state)
        }
    }

    canvasMarkHandler = (evt) => {
        const { startX, startY } = this.state
        const { offsetX, offsetY } = evt
        const width = offsetX - startX
        const height = offsetY - startY
        let RTN = {}
        RTN.markWidth = width
        RTN.markHeight = height
        this.setState(RTN)
    }
}

export default Konva
