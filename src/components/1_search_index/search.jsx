import React, { Component } from 'react'

import $ from 'jquery';  //必须引入jquery

export default class Search extends Component {

    render() {
        return (
            <div className="search_box">
                <div className="search_content_box">
                    <div className="search_itme">
                        <div className="search_click" onClick={this.inputClick}>
                            <i className="iconfont iconsousuo_2"></i>
                            <span>请输入你要查询的内容</span>
                        </div>
                        <input className="search_input" type="text" ref="input" />
                        <div className="search_line"></div>
                        <div className="info_content"></div>
                    </div>
                </div>
            </div>
        )
    }

    inputClick = () => {
        $('.search_itme').addClass('color_animation').stop().animate({
            'border-radius': '40px'
        }, 10);
        $('.search_click').stop().animate({
            opacity: 0,
            top: 0
        }, 200);
        $('.search_line').stop().animate({
            width: '100%'
        }, 200);
        $('.search_input').focus().on('blur', (self) => {
            const target = self.target
            if (target.value === '') {
                $('.search_click').stop().animate({
                    opacity: 1,
                    top: '16px'
                }, 200);
                $('.search_line').stop().animate({
                    width: '0'
                }, 200);
                $('.info_content').stop().animate({
                    height: '0',
                    'padding-top': '0'
                }, 200, () => {
                    $('.info_content').text('')
                    $('.search_itme').removeClass('color_animation')
                });
            }
        });
        $('.info_content').stop().animate({
            height: '200px',
            'padding-top': '20px'
        }, 200, () => {
            $('.info_content').text('输入关键字试试吧~~')
        });
    };
}
