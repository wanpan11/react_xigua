import { TEST_1, TEST_2 } from './actionTypes';


/* 使用中间件 完成异步action dispatch接受函数时不会立即调用 
   使用 thunk 后 action 返回的函数会接受 dispatch 作为参数  
   reducers 接受对象时才会立即调用  */
export const test_1_action = (data) => {
    return dispatch => {
        console.log('asyc test_1_action');
        setTimeout(() => {
            dispatch({ type: TEST_1, data })
        }, 1000)
    }
}


/* 手动实现 react-thunk */
// export const test_1_action = (dispatch, data) => {
//     console.log('asyc test_1_action');
//     setTimeout(() => {
//         dispatch({ type: TEST_1, data })
//     }, 1000)
// }

export const test_2 = (data) => ({ type: TEST_2, data })