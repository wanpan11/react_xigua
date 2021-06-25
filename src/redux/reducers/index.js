import { combineReducers } from "redux";
import { increase } from './increase'
import { minus } from './minus'


export default combineReducers({ increase, minus });