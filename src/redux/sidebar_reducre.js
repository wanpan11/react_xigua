import { SIDEBAR_AUTO_DISPLAY, SIDEBAR_AUTO_NONE } from './constant'

/* sidebar 自动隐藏设置 */
const initState = {
    sidebarAutoDisplay: true
};

/**
 * 
 * @param {data} preState 接收store之前的状态state
 * @param {object} action 接收事件类型对象
 */
function sidebarReducre(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case SIDEBAR_AUTO_DISPLAY:
            return { ...preState, sidebarAutoDisplay: data };
        case SIDEBAR_AUTO_NONE:
            return { ...preState, sidebarAutoDisplay: data };
        default:
            return preState;
    }
}

export default sidebarReducre;