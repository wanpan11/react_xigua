import React, { Component } from 'react';
import PubSub from 'pubsub-js'

import { Checkbox } from 'antd';


export default class MoodBox extends Component {

    state = {
        moodList: [],
        firstLoad: true
    }

    componentDidMount() {
        const { moodList } = this.state
        PubSub.subscribe('newMood', (msg, newMoodObj) => {
            console.log(newMoodObj);
            moodList.push(newMoodObj)
            this.setState({ moodList: moodList, firstLoad: false })
        })
        PubSub.subscribe('defaultMood', (msg, defaultMoodArr) => {
            console.log(defaultMoodArr);
            this.setState({ moodList: defaultMoodArr, firstLoad: false })
        })
        PubSub.subscribe('clearTodayTask', (msg, defaultMoodArr) => {
            console.log(defaultMoodArr);
            this.setState({ moodList: [], firstLoad: false })
        })
    }

    render() {
        const { moodList, firstLoad } = this.state
        return (
            <div className="moodComponent_container">
                {
                    firstLoad ?
                        <div className="moodComponent_container_itme">点击下方按钮获取今日任务~~</div>
                        :
                        moodList.map(ele => {
                            return (
                                <div key={ele.id} className="moodComponent_container_itme">
                                    <Checkbox size="small" checked={ele.checked} onClick={this.setMoodListCallBack(ele)} />
                                    <span onClick={this.clickDemo}>{ele.text}</span>
                                </div>
                            )
                        })
                }
            </div>
        )
    }

    setMoodListCallBack = (itme) => {
        return () => {
            const { moodList } = this.state
            const { id } = itme
            moodList.forEach(ele => {
                if (ele.id === id) {
                    if (ele.checked) {
                        ele.checked = false
                    } else {
                        ele.checked = true
                    }
                } else {
                    return
                }
            })
            this.setState({ moodList: moodList })
        }
    }

}