import { createStore /* applyMiddleware */ } from 'redux';
import reducers from './reducers';
// import thunk from 'redux-thunk';

/* 使用中间件 */
// const store = createStore(reducers, applyMiddleware(thunk))

/* 不使用中间件 */
const store = createStore(reducers);

export default store;
