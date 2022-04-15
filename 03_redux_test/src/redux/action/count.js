import {DECREMENT, INCREMENT} from "../constant";

export const increment = data => ({
    type:INCREMENT,
    data
})


// 同步action  就是指action的值为Object类型的一般对象
export const decrement = data => ({
    type:DECREMENT,
    data
})

// 异步action：就是指action的值为函数,因为函数里面可以开启异步任务
// 异步action中一般
export const incrementAsync = (data,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increment(data))
        },time)
    }
}
