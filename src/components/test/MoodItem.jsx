import React from 'react';
import { Checkbox } from 'antd';

export default class MoodBox extends React.Component {



    render() {
        const { moodList, setMoodListCallBack } = this.props
        // const date = new Date()

        return (
            <div className="moodBox">
                {
                    moodList.map(ele => {
                        return (
                            <div key={ele.id}>
                                <Checkbox size="small" checked={ele.disabled} onClick={setMoodListCallBack(ele)} />
                                <span onClick={this.clickDemo}>{ele.text}</span>
                                {/* <span onClick={this.clickDemo}>今天是{isLovely ? '可爱' : '暴躁'}四四酱</span> */}
                            </div>
                        )
                    })
                }
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