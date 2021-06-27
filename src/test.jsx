import React from 'react'
import { connect } from 'react-redux'
import { increase_action } from './redux/action'

function Test(props) {

    return (
        <div>
            heoll {props.name}!
            <button onClick={props.setNameFun.bind(null, 123)}>点我修改姓名</button>
        </div>
    )
}

export default connect(
    null,
    { increase_action }
)(Test);