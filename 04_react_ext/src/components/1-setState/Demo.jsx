import {Component} from "react";

export default class Demo extends Component{
    state={
        count:0
    }

    // 对象式setState
    add=()=>{
        const {count}  = this.state
        this.setState({count: count+1},()=>{
            console.log('12行的输出：',this.state.count)
        })
    }

    // 函数式的setState
    sub=()=>{
        this.setState((state,props)=>({count: state.count - 1}))
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.sub}>点我-1</button>
            </div>
        );
    }
}