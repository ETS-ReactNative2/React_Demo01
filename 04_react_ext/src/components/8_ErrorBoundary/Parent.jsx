import React, {Component} from 'react';
import Child from "./Child";

class Parent extends Component {
    state={
        hashError: "",
    }

    // 当parent的子组件出现报错的时候,会触发getDerivedStateFromError调用,并携带错误信息
    static getDerivedStateFromError(error) {
        console.log(error)
        return {hasError:error}
    }

    componentDidCatch(){
        console.log('统计错误')
    }

    render() {
        return (
            <div>
                <h1>我是parent组件</h1>
                {this.state.hashError?<h2>当前网络不稳定,请稍后再试</h2>:<Child/>}
            </div>
        );
    }
}

export default Parent;