/* 
    1.该文件用于为count组件创建一个为他服务的reducre函数
    2.reducer 函数会接到两个参数 
    3.reducer 只处理数据 不处理业务逻辑判断
*/


const initState = 0;
/**
 * 
 * @param {data} preState 接收组件之前的状态state
 * @param {object} action 接收事件类型对象
 */
function countReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case 'increment':
            return preState + data;
        case 'decrement':
            return preState - data;
        default:
            return preState;
    }
}

export default countReducer;