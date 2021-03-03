import React, { Component } from 'react'
import $ from 'jquery'

import './search.scss'

export default class Search extends Component {

    componentDidMount() {
        const height = window.innerHeight
        $('.content_box').css({
            height: height + 'px'
        })
    }

    render() {
        return (
            <div>
                <div className="content_box">
                    <div className="search_box">
                        <div className="search_itme">
                            <span className="search_span" onClick={this.inputSpanClick}>请输入你要查询的内容</span>
                            <input className="search_input" type="text" ref="input" />
                            <div className="search_line"></div>
                            <div className="info_content"></div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    inputSpanClick = () => {
        $('.search_span').animate({
            opacity: 0,
            top: 0
        }, 200);
        $('.search_line').animate({
            width: '100%'
        }, 200);
        $('.search_input').focus().on('blur', (self) => {
            const target = self.target
            if (target.value === '') {
                $('.search_span').animate({
                    opacity: 1,
                    top: '16px'
                }, 200);
                $('.search_line').animate({
                    width: '0'
                }, 200);
                $('.info_content').animate({
                    height: '0'
                }, 200);
            }
        });
        $('.info_content').animate({
            height: '200px'
        }, 200);
    };
}
