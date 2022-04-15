import {Component, PureComponent} from "react";
import './index.css'

export default class Parent extends PureComponent{

    state = {
        carName:'奔驰C36'
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(this.props,this.state)  // 目前的props和state
    //     console.log(nextProps,nextState) // 接下来变化的目标props和state
    //     if (this.state===nextState) return false
    //     else return true
    // }

    changeCar = () =>{
        this.setState({carName:'迈巴赫'}) // 要产生新数据
    }

    render() {
        console.log('parent-render')
        const {carName} = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <h5>我的车名字是:{carName}</h5>
                <button onClick={this.changeCar}>点我换车</button>

                <Child carName={carName}/>
            </div>
        );
    }
}

class Child extends Component{
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(this.props,this.state)  // 目前的props和state
    //     console.log(nextProps,nextState) // 接下来变化的目标props和state
    //     if (this.state===nextState) return false
    //     else return true
    // }

    render() {
        console.log('child--render')
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <h5>我收到的车是: {this.props.carName}</h5>
            </div>
        );
    }
}