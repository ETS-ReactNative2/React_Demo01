import React,{Component} from "react";
import ReactDOM from "react-dom";

// export default class Demo extends Component{
//     state={
//         count:0
//     }
//
//     myRef = React.createRef()
//
//     componentDidMount() {
//         this.timer = setInterval(()=>{
//             console.log('@')
//             this.setState(state=>({count:state.count+1}))
//         },1000)
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//
//     unmount=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById("root"))
//     }
//
//     show = () => {
//         alert(this.myRef.current.value)
//     }
//
//     add = () =>{
//         this.setState(state=>({count:this.state.count+1}))
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef}/>
//                 <h2>当前求和为：{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>提示数据</button>
//             </div>
//         );
//     }
// }

function Demo() {

    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState('tom')
    // console.log(count,setCount)

    React.useEffect(()=>{
        let timer = setInterval(()=>{
            console.log('@')
            add()
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    },[])

    const myRef = React.createRef()

    function add() {
        // setCount(count+1)
        setCount(count=>count+1)
    }

    function changeName(){
        setName('Jack')
    }

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }
    
    function show() {
        alert(myRef.current.value)
    }
    
    return(
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为：{count}</h2>
            <h2>我的名字是：{name}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>提示输入的回调</button>
        </div>
    )
}

export default Demo