import React, { Component } from 'react'

import './search.scss'

export default class Search extends Component {

    state = {
        span: {
            display: true,
            top: 32
        }

    }

    render() {
        const { span } = this.state
        return (
            <div>
                <div className="content_box">
                    <div className="search_box">
                        <div className="search_itme">
                            {span.display ? <span onClick={this.inputSpanClick} style={{ top: span.top + 'px' }}>请输入你要查询的内容</span> : ''}
                            <input type="text" ref="input" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    inputSpanClick = (evt) => {
        const { input } = this.refs
        const { top } = this.state.span
        for (let i = 0; i < top; i++) {
            if (top === 1) {
                break;
            }
            this.setState({
                span: {
                    display: false,
                    top: top--
                }
            })
        }


        // input.focus()
        // input.onblur = (evt) => {
        //     const target = evt.target
        //     if (target.value === '') {
        //         this.setState({
        //             display: true
        //         })
        //     }
        // }
    }
}
