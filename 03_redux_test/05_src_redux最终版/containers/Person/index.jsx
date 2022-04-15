import {Component} from "react";
import {nanoid} from "nanoid";
import {addPerson} from "../../redux/action/person";
import {connect} from "react-redux";
import {increment} from "../../redux/action/count";

class Person extends Component{
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        // console.log(name,age)
        const personObj = {id:nanoid(),name,age}
        console.log(personObj)
        this.props.addPerson(personObj)

        this.nameNode.value=''
        this.ageNode.value=''
    }

    render() {
        return (
            <div>
                <h2>我是person组件</h2>
                <h5>上方组件求和为： {this.props.count}</h5>
                <input ref={c=>this.nameNode=c} type="text" placeholder="请输入名字"/>
                <input ref={c=>this.ageNode=c} type="text" placeholder="请输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map(p=>{
                            return <li key={p.id}>{p.id}----{p.name}----{p.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state=>(
        {
            count: state.count,
            persons:state.persons
        }
    ), // 映射状态
    {
        addPerson
    }
)(Person)
