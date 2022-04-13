import {Component} from "react";
import axios from "axios";
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search=()=>{
        // 获取用户的输入  连续解构赋值
        const {keyWordElement:{value:keyWord}} = this
        console.log(keyWord)
        // 发送请求前通知List更新状态
        PubSub.publish('shuhongfan',{
            isFirst: false,
            isLoading: true
        })
        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`)
            .then(
                response=>{
                    console.log('成功',response.data)
                    PubSub.publish('shuhongfan',{
                        isLoading: false,
                        users: response.data.items
                    })
                },
                error=>{
                    console.log('失败：',error)

                    PubSub.publish('shuhongfan',{
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
