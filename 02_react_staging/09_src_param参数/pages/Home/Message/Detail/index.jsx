import {Component} from "react";

const data = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，湖北'},
    {id:'03',content:'你好，武汉'},
]
export default class Detail extends Component{

    render() {
        console.log(this.props)
        let {id,title} = this.props.match.params
        let findResult = data.find(dataObj=>{
            return dataObj.id===id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        );
    }

}
