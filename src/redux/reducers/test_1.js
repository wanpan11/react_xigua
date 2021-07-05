
import { TEST_1 } from '../action/actionTypes'


/* 默认数据 */
const initState = {
    count: 0
};


// Reducer
function test_1(state = initState, action) {
    debugger
    const { data, type } = action
    switch (type) {
        case TEST_1:
            return { ...state, count: data }
        default:
            return state
    }
}

export default test_1