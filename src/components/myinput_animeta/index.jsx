import React, { Component } from 'react'
import styles from './index.module.scss'
import smarteTool from '../../util/smarteTool.js'

export default class MyinputAnimeta extends Component {

    state = {
        text_animeta: 'none',
        line_animeta: 'none'
    }

    render() {
        const { text_animeta, line_animeta } = this.state
        const { children, type, value, onchange } = this.props

        /* 判定是否需要执行动画 */
        let tetx_className, line_className
        if (text_animeta === 'active' || text_animeta === 'exit' || text_animeta === 'done') {
            if (text_animeta === 'active') {
                tetx_className = styles.input_type_text_active
            }
            if (text_animeta === 'exit') {
                tetx_className = styles.input_type_text_exit
            }
            if (text_animeta === 'done') {
                tetx_className = styles.input_type_text_done
            }
        } else {
            tetx_className = styles.input_type_text
        }

        if (line_animeta === 'active' || line_animeta === 'exit') {
            if (line_animeta === 'active') {
                line_className = styles.input_line_active
            }
            if (line_animeta === 'exit') {
                line_className = styles.input_line_exit
            }
        } else {
            line_className = styles.input_line
        }

        return (
            <div className={styles.myinput} >
                <span className={tetx_className} >{children}</span>
                <input type={type} className={styles.input} value={value} onChange={onchange} onBlur={this.input_exit} onClick={this.input_active} />
                <div className={line_className} ></div>
            </div >
        )
    }

    input_active = (evt) => {
        const value = smarteTool.getDeepVal(evt, 'target.value')
        if (value) {
            this.setState({ line_animeta: 'active' })
            return
        } else {
            this.setState({ text_animeta: 'active', line_animeta: 'active' })
        }
    }

    input_exit = (evt) => {
        const value = smarteTool.getDeepVal(evt, 'target.value')
        if (value) {
            this.setState({ text_animeta: 'done', line_animeta: 'exit' })
        } else {
            this.setState({ text_animeta: 'exit', line_animeta: 'exit' })
        }
    }

}
