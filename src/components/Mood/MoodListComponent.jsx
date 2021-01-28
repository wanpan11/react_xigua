import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './MoodListComponent.scss'

import PubSub from 'pubsub-js'
import { nanoid } from 'nanoid';

import { Input, Button } from 'antd';
import MoodBox from './MoodItem';
import axios from 'axios';


// 类式组件 简写形式
class MoodListComponent extends Component {

    render() {
        return (
            <div className="moodComponent">
                <div className="moodComponent_head">
                    <Input placeholder="今天的心吗？" onKeyUp={this.setMood} />
                </div>
                <MoodBox />
                <div className="moodComponent_foot">
                    <Button onClick={this.getTodayTask} type="primary">获取今日任务</Button>
                    <Button onClick={this.clearTodayTask} >清空任务</Button>
                </div>
            </div>
        )
    }

    setMood = (event) => {
        const target = event.target
        const keyCode = event.keyCode
        const value = target.value
        let newMoodObj = {};
        if (keyCode === 13) {
            debugger
            nanoid()
            newMoodObj = {
                id: nanoid(),
                disabled: false,
                text: value
            }
        } else {
            return;
        }
        PubSub.publish('newMood', newMoodObj)
        target.value = ''
    }

    getTodayTask = () => {
        axios.get('/api/getTodayTask').then(
            response => {
                debugger
                console.log(response.data);
                PubSub.publish('defaultMood', response.data)
            },
            error => {
                debugger
                console.log(error);
            }
        )
    }

    clearTodayTask = () => {
        PubSub.publish('clearTodayTask', '')
    }

}

export { MoodListComponent };