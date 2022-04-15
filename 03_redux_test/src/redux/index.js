// 引入为Count组件服务的reducer
import count from './reducer/count'
// 引入为person组件服务的reducer
import persons from './reducer/person'
import {combineReducers} from "redux";

// 汇总reducer变成一个reducer
export default combineReducers({
    count,
    persons
})