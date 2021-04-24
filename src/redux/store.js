/* 引入核心依赖 */
import { createStore, combineReducers } from 'redux';

/* 引入reducer */
import themeReducre from './theme_reducre'
import sidebarReducre from './sidebar_reducre'

/* 合并多个 reducre */
const reducer = combineReducers({
    themeReducre,
    sidebarReducre
})

export default createStore(reducer)

