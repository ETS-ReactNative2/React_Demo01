import {Component} from "react";
import axios from "axios";

export default class Search extends Component {
    search=()=>{
        // 获取用户的输入  连续解构赋值
        const {keyWordElement:{value:keyWord}} = this
        console.log(keyWord)
        // 发送请求前通知App更新状态
        this.props.updateAppState({
            isFirst: false,
            isLoading: true
        })
        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`)
            .then(
                response=>{
                    console.log('成功',response.data)
                    // this.props.saveUsers(response.data.items)
                    this.props.updateAppState({
                        isLoading: false,
                        users: response.data.items
                    })
                },
                error=>{
                    console.log('失败：',error)
                    this.props.updateAppState({
                        isLoading: false,
                        err: error.message
                    })
                }
            )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }

}
