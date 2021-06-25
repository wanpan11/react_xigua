import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import { Provider, connect } from 'react-redux'

import Entry from './entry'

// Action
const increaseAction = { type: 'increase' }


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Entry)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)