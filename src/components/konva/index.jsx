import React, { Component, Fragment } from 'react'
import { Stage, Layer, Rect } from 'react-konva'
import { nanoid } from 'nanoid'
// import Konva from 'konva';
import './index.scss'

class GraphContent extends React.Component {
    state = {
        color: 'red',
        border: 'red',
        isDragging: false
    }

    render() {
        const { state } = this.props
        const { markInfoArr } = state
        const { color, /* border */ } = this.state
        return (
            <Fragment>
                <Rect
                    x={state.startX}
                    y={state.startY}
                    width={state.markWidth}
                    height={state.markHeight}
                    fill={color}
                // stroke={border}
                // strokeWidth={2}
                // cornerRadius={50}
                // dash={[20, 10]}
                />
                {
                    markInfoArr.map((ele) => {
                        const { startX, startY, markWidth, markHeight, key } = ele
                        return (
                            <Rect
                                draggable
                                key={key}
                                x={startX}
                                y={startY}
                                width={markWidth}
                                height={markHeight}
                                fill={color}
                                // stroke={border}
                                // strokeWidth={2}
                                // cornerRadius={50}
                                // dash={[20, 10]}
                                onDragStart={this.onDragStart(key)}
                                onDragEnd={this.onDragEnd(key)}
                            />
                        )
                    })
                }
            </Fragment>
        )
    }

    onDragStart = (key) => {
        return (e) => {
            console.log(e.target.x());
            console.log(e.target.y());
        }
    }

    onDragEnd = (key) => {
        return (e) => {
            console.log(e.target.x());
            console.log(e.target.y());
        }
    }

}

class Konva extends Component {
    state = {
        markInfoArr: [],
        startX: 0,
        startY: 0,
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
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                ref={(ele) => {
                    this.canvas_ele = ele
                }}
            >
                <Layer>
                    <GraphContent state={this.state} />
                </Layer>
            </Stage>
        )
    }

    /* 监听鼠标事件 */
    onMouseUp = (e) => {
        const {
            startX,
            startY,
            markWidth,
            markHeight,
            markInfoArr,
        } = this.state
        const { canvas_ele } = this
        canvas_ele.removeEventListener('mousemove', this.canvasMarkHandler)

        if (markWidth !== 0 || markHeight !== 0) {
            let stateChange = {}
            let currentMarkInfoArr = markInfoArr.concat()
            currentMarkInfoArr.push({ startX, startY, markWidth, markHeight, key: nanoid() })
            stateChange.markInfoArr = currentMarkInfoArr
            stateChange.startX = 0
            stateChange.startY = 0
            stateChange.markWidth = 0
            stateChange.markHeight = 0
            this.setState(stateChange)
        }
    }

    onMouseDown = (e) => {
        const { canvas_ele } = this
        const { evt: { offsetX, offsetY }, target } = e
        let stateChange = {}
        if (target === canvas_ele) {
            canvas_ele.addEventListener('mousemove', this.canvasMarkHandler)
        }
        stateChange.startX = offsetX
        stateChange.startY = offsetY
        this.setState(stateChange)
    }


    /* 鼠标移动时 计算大小 */
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
