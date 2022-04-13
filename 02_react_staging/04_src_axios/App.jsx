import {Component} from "react";
import axios from "axios";

export default class App extends Component{
    getStudentData=()=>{
        axios.get('https://api.apiopen.top/getWangYiNews')
            .then(
                response=> {
                    console.log('成功了', response.data)
                },
                error=>{
                    console.log('失败',error)
                }
            )
    }

   render() {
        return (
            <div>
                <button  onClick={this.getStudentData}>点我获取学生数据</button>
            </div>
        );
    }

}
