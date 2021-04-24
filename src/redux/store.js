/* 引入核心依赖 */
import { createStore } from 'redux';

/* 引入reducer */
import themeReducre from './theme_reducre'
import sidebarReducre from './sidebar_reducre'

const themeStore = createStore(themeReducre)
const sidebarStore = createStore(sidebarReducre)

export { themeStore, sidebarStore };