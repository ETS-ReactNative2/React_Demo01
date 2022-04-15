import {connect} from "react-redux";
import {decrement, increment, incrementAsync} from "../../redux/action/count";
import {Component} from "react";

class Count extends Component{

    increment=()=>{
        const {value} = this.selectNumber
        this.props.increment(value*1)
    }

    decrement=()=>{
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }

    incrementIfOdd=()=>{
        const {value} = this.selectNumber
        if (this.props.count%2!==0){
            this.props.increment(value*1)
        }
    }

    incrementAsync=()=>{
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,500)
    }

    render() {
        // console.log('UI组件收到的props是：',this.props)
        return (
            <div>
                <h1>我是Count组件</h1>
                <h3>当前求和为： {this.props.count}</h3>
                <h5>下方组件的总人数为：{this.props.personCount}</h5>
                <select ref={c=>this.selectNumber=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}


// 使用connect（）（）创建并暴露一个容器组件
export default connect(
    state => (
        {
            personCount: state.persons.length,
            count: state.count
        }
    ),
    // dispatch =>({
    //     jia:(number)=>dispatch(increment(number)),
    //     jian:number=>dispatch(decrement(number)),
    //     jiaAsync:(number,time)=>dispatch(incrementAsync(number,time))}),
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count);