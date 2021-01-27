import React from 'react';
import { nanoid } from 'nanoid';
import 'antd/dist/antd.css';
import './test_1.scss'

import { Input } from 'antd';
import MoodBox from './MoodItem';

//#region region
// 类式组件 标准形式
// class OldMycomponent extends React.Component {
//     /* 1.构造器 重构初始属性 */
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLovely: false,
//         }
//     }
//     /* 2.返回组件 */
//     render() {
//         /* render里的this是 Mycomponent的实例对象  */
//         const { isLovely } = this.state

//         /* 
//         this.onClick = this.clickDemo 
//         相当于把Mycomponent的实例对象上的clickDemo方法赋值给了onClick事件
//         但是当onclick事件被触发时 并不是Mycomponent的实例对象调用的clickDemo 所有clickDemo 里的this指向是错的
//         为了解决这个问题就需要 使用bind方法 在render里面onclick赋值方法的时候把 把正确的this 绑定上
//         */
//         return <h1 onClick={this.clickDemo.bind(this)}>今天是{isLovely ? '可爱' : '暴躁'}四四酱</h1>
//     }

//     clickDemo() {
//         const isLovely = this.state.isLovely
//         //修改组件内的state 必须调用setState API 不能直接this.state修改
//         this.setState({ isLovely: !isLovely })
//     }
// }
//#endregion


// 类式组件 简写形式
class Mycomponent extends React.Component {

    /* 1.直接复制给实例对象 在类里面直接赋值 不需要声明变量 且赋值会直接给到实例对象本身 而不是类的原型上*/
    state = {
        moodList: [
            { id: '001', disabled: false, text: '今天的四四酱好好看呀！' }
        ]
    }

    setMoodListCallBack = (itme) => {
        return () => {
            const { moodList } = this.state
            const { id } = itme
            moodList.forEach(ele => {
                if (ele.id === id) {
                    if (ele.disabled) {
                        ele.disabled = false
                    } else {
                        ele.disabled = true
                    }
                } else {
                    return
                }
            })
            this.setState({ moodList: moodList })
        }
    }

    render() {
        const { moodList } = this.state
        return (
            <div>
                <Input placeholder="今天的心吗？" onKeyUp={this.setMood} />
                <MoodBox setMoodListCallBack={this.setMoodListCallBack} moodList={moodList} />
            </div>
        )
    }

    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }

    setMood = (event) => {
        const { moodList } = this.state
        const target = event.target
        const keyCode = event.keyCode
        const value = target.value
        let item = {};
        if (keyCode === 13) {
            debugger
            nanoid()
            item = {
                id: nanoid(),
                disabled: false,
                text: value
            }
        } else {
            return;
        }
        moodList.push(item)
        this.setState({ moodList: moodList })
        target.value = ''
    }
}

export { Mycomponent };