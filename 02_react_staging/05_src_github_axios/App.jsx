import {Component} from "react";
import List from "./conponents/List";
import Search from "./conponents/Search";

export default class App extends Component{

    state = {
        users: [], // 初始化状态，
        isFirst: true, // 是否为第一次打开页面
        isLoading: false, // 标识是否处于加载中
        err: '' // 存储请求相关的错误信息
    }

    saveUsers = (users) => {
        this.setState({users})
    }

    // 更新App的state
    updateAppState = (stateObj) =>{
        this.setState(stateObj)
    }

   render() {
        return (
            <div id="app">
                <div className="container">
                    <Search saveUsers={this.saveUsers} updateAppState={this.updateAppState}/>
                    <List {...this.state}/>
                </div>
            </div>
        );
    }

}
