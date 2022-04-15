import React, {Component} from "react";
import './index.css'

// 创建context对象
const MyContext = React.createContext()
const {Provider,Consumer} = MyContext
export default class A extends Component{
    state = {
        username:'tom',
        age:128
    }

    render() {
        const {username,age} = this.state
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是: {username}</h4>
                <Provider value={{username,age}}>
                    <B />
                </Provider>
            </div>
        );
    }
}

class B extends Component{
    // 声明接收context
    static contextType = MyContext
    render() {
        // console.log(this.context)
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <h4>我是A组件接收到的用户名：{this.context.username}</h4>
                <C />
            </div>
        );
    }
}

class C extends Component{
    static contextType = MyContext
    render() {
        console.log(this.context)
        const {username,age} = this.context
        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h4>我是A组件接收到的用户名：{username}</h4>
                <h4>我是A组件接收到的年龄：{age}</h4>
                <D/>
            </div>
        );
    }
}

function D() {
    return (
        <div className="grand">
            <h3>我是D组件</h3>
            <Consumer>
                {
                    value => `
                        <div className="grand">
                            <h4>我是A组件接收到的用户名：${value.username}</h4>
                            <h4>我是A组件接收到的年龄：${value.age}</h4>
                        </div>
                    `
                }
            </Consumer>

        </div>
    )
}