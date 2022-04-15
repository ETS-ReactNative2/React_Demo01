
// function createIncrementAction(data) {
//     return {
//         type:'increment',
//         data
//     }
// }

import {DECREMENT, INCREMENT} from "./constant";

export const createIncrementAction = data => ({
    type:INCREMENT,
    data
})

// function createDecrementAction(data) {
//     return {
//         type:'decrement',
//         data
//     }
// }

// 同步action  就是指action的值为Object类型的一般对象
export const createDecrementAction = data => ({
    type:DECREMENT,
    data
})

// 异步action：就是指action的值为函数,因为函数里面可以开启异步任务
// 异步action中一般
export const createIncrementAsyncAction=(data,time)=>{
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(createIncrementAsyncAction(data))
        },time)
    }
}
