import React from 'react'
import { connect } from 'react-redux'
import { test_2 } from '../redux/action/action'



function Test(props) {

    console.log(props);

    const { dispatch, test_2_count } = props

    const test_1_change = () => {
        dispatch(test_2(test_2_count + 1))
    }

    return (
        <div>
            <div>test_2_count：{test_2_count}</div>
            <button onClick={test_1_change}>点我2</button>
        </div>
    )

}

export default connect(
    state => {
        return {
            test_2_count: state.test_2.count,
        }
    },
    dispatch => {
        return { dispatch }
    }
)(Test);