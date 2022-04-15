import {Component} from "react";
import qs from 'qs'

const data = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，湖北'},
    {id:'03',content:'你好，武汉'},
]
export default class Detail extends Component{

    render() {
        console.log(this.props)

        // 接收params参数
        let {id,title} = this.props.match.params

        // 接收search参数
        // const {search} = this.props.location
        // let {id,title} = qs.parse(search.slice(1))
        // console.log(id,title)

        // 接收 state参数
        // let {id,title} = this.props.location.state || {}

        let findResult = data.find(dataObj=>{
            return dataObj.id===id
        }) || {}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        );
    }

}
