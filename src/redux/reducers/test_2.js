import { TEST_2 } from '../action/actionTypes'

/*  默认数据 */
const initState = {
    count: 0
};


// Reducer
function test_2(state = initState, action) {
    debugger
    const { data, type } = action
    switch (type) {
        case TEST_2:
            return { ...state, count: data }
        default:
            return state
    }
}

export default test_2

