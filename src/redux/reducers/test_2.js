import { TEST_2 } from '../action/actionTypes'

/*  默认数据 */
const initState = {
    count: 0
};


/**
 * reducers
 * @param {Object} state 更新之前的数据
 * @param {Object} action type,data 
 * @returns 
 */
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

