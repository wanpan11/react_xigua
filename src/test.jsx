import React from 'react'
import { connect } from 'react-redux'
import { increase_action } from './redux/action'

function Test(props) {
    debugger
    return (
        <div>
            {console.log(props)}
            heoll world!
        </div>
    )
}

export default connect(
    null,
    { increase_action }
)(Test);