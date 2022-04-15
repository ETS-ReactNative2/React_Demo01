// 引入count组件的UI组件
import CountUI from '../../components/Count'

// 引入connect用于连接UI组件与reduxa
import {connect} from "react-redux";
import {INCREMENT} from "../../redux/constant";
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

// a函数返回的对象中的key就为传递给UI组件props的key，
// value就作为传递给UI组件props的value----状态
function mapStateToProps(state) {
    return {
        count: state
    }
}

// b函数返回的对象中的key就为传递给UI组件props的key，
// value就作为传递给UI组件props的value----操作状态的方法
function mapDispatchToProps(dispatch){
    return {
        jia:(number)=>{
            // 通知redux执行加法
            dispatch(createIncrementAction(number))
        },
        jian:number=>dispatch(createDecrementAction(number)),
        jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }
}

// 使用connect（）（）创建并暴露一个容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);
