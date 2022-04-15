import {Component} from "react";
import './index.css'

export default class Parent extends Component{

    render() {
        return (
            <div className="parent">
                <h1>我是parent组件</h1>
                <A render={(name)=><B name={name}/>} />
            </div>
        );
    }
}

class A extends Component{
    state = {name:'tom'}

    render() {
        console.log(this.props)
        const {name} = this.state
        return (
            <div className="a">
                <h1>我是 A 组件</h1>
                {this.props.render(name)}
            </div>
        );
    }
}

class B extends Component{
    render() {
        console.log(this.props)
        return (
            <div className="b">
                <h1>我是 B 组件</h1>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}