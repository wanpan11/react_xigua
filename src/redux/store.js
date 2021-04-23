/* 引入核心依赖 */
import { createStore } from 'redux';

/* 引入reducer */
import countReducer from './count_reducre'
import themeReducre from './theme_reducre'

const countStore = createStore(countReducer)
const themeStore = createStore(themeReducre)

export { countStore, themeStore };