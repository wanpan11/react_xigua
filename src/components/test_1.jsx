import React from 'react';
import 'antd/dist/antd.css';

import { DatePicker } from 'antd';

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
    state = { isLovely: false }

    render() {
        const { isLovely } = this.state
        return (
            <div style={{ margin: '12px 8px' }}>
                <DatePicker />
                <div onClick={this.clickDemo} style={{ width: '100%', fontSize: '20px', marginTop: '12px' }}>今天是{isLovely ? '可爱' : '暴躁'}四四酱</div>
            </div>
        )
    }

    /* 2.实例的自定义方法 */
    clickDemo = () => {
        // 箭头函数没有this 当使用this关键字时 箭头函数会从他的外层找this
        const isLovely = this.state.isLovely
        this.setState({ isLovely: !isLovely })
    }
}

export { Mycomponent };