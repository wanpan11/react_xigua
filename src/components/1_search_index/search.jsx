import React, { Component } from 'react'
import $ from 'jquery'

import './search.scss'

export default class Search extends Component {

    state = {
        span: {
            top: 16,
            opacity: 1
        },
        line: {
            width: 0
        },
        info: {
            height: 0
        }

    }
    componentDidMount() {
        debugger
        const height = window.innerHeight
        $('.content_box').css({
            height: height + 'px'
        })
    }

    render() {
        const { span, line, info } = this.state
        return (
            <div>
                <div className="content_box">
                    <div className="search_box">
                        <div className="search_itme">
                            <span className="search_span" onClick={this.inputSpanClick} style={{ top: span.top + 'px', opacity: span.opacity }} > 请输入你要查询的内容</span>
                            <input className="search_input" type="text" ref="input" />
                            <div className="search_line" style={{ width: line.width }}></div>
                            <div className="info_content" style={{ height: info.height }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    inputSpanClick = (evt) => {
        const { input } = this.refs
        const { span } = this.state
        let width1 = 0;

        // span点击事件动画
        const spanAnimation = setInterval(() => {
            if (span.top === 0) {
                clearInterval(spanAnimation);
                return;
            }
            width1 = width1 + 25
            span.top -= 4
            span.opacity -= 0.5
            this.setState({
                span: {
                    top: span.top,
                    opacity: span.opacity
                },
                line: {
                    width: width1 + '%'
                },
                info: {
                    height: width1 + 'px'
                }
            });

        }, 50);
        input.focus()

        // input失去焦点事件动画
        input.onblur = (evt) => {
            const target = evt.target
            let width2 = 100;
            if (target.value === '') {
                const spanAnimation = setInterval(() => {
                    if (span.top === 16) {
                        clearInterval(spanAnimation);
                        return;
                    }
                    width2 = width2 - 25
                    span.top += 4
                    span.opacity += 0.5
                    this.setState({
                        span: {
                            top: span.top,
                            opacity: span.opacity
                        },
                        line: {
                            width: width2 + '%'
                        },
                        info: {
                            height: width2 + 'px'
                        }
                    })
                }, 50);
            };
        };

    };

}
