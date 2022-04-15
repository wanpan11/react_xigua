import { combineReducers } from "redux";
import test_1 from './test_1'
import test_2 from './test_2'

/* 合并 store 后每次 dispatch 被调用时 都会调用所有 reducers  */
export default combineReducers({ test_1, test_2 });/*  */