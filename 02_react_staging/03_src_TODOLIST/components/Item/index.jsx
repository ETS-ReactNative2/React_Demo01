import {Component} from "react";
import './index.css'

export default class Item extends Component{


    state = {
        mouse:false
    }
    // 高阶函数
    handleMouse=(flag)=>{
        return () => {
            // console.log(flag)
            this.setState({mouse:flag})
        }
    }

    // 勾选
    handleCheck=(id)=>{
        return (event)=>{
            console.log(id,event.target.checked)
            this.props.updateTodo(id,event.target.checked)
        }
    }

    // 删除todo
    handleDelete = (id)=>{
        if (window.confirm('确定删除吗？')){
            console.log(id)
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input onChange={this.handleCheck(id)} type="checkbox" checked={done}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        );
    }

}
