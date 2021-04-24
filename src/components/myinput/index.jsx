import React, { Component } from 'react'
import styles from './index.module.scss'
import smarteTool from '../../util/smarteTool.js'

export default class Myinput extends Component {

    state = {
        text_animeta: 'none'
    }


    render() {
        const { text_animeta } = this.state
        const { children } = this.props
        let className
        if (text_animeta === 'active' || text_animeta === 'exit' || text_animeta === 'done') {
            if (text_animeta === 'active') {
                className = styles.input_type_text_active
            }
            if (text_animeta === 'exit') {
                className = styles.input_type_text_exit
            }
            if (text_animeta === 'done') {
                className = styles.input_type_text_done
            }
        } else {
            className = styles.input_type_text

        }

        return (
            <div className={styles.myinput} >
                <span className={className} >{children}</span>
                <input type="text" className={styles.input} onBlur={this.input_exit} onClick={this.input_active} />
            </div >
        )
    }

    input_active = (evt) => {
        const value = smarteTool.getDeepVal(evt, 'target.value')
        if (value) {
            return
        } else {
            this.setState({ text_animeta: 'active' })
        }
    }

    input_exit = (evt) => {
        const value = smarteTool.getDeepVal(evt, 'target.value')
        if (value) {
            this.setState({ text_animeta: 'done' })
        } else {
            this.setState({ text_animeta: 'exit' })
        }
    }

}
