/* 引入核心依赖 */
import { createStore } from 'redux';

/* 引入reducer */
import countReducer from './count_reducre'

export default createStore(countReducer);