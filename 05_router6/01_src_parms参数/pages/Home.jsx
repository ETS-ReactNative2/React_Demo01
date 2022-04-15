import {useState} from "react";
import {Navigate, NavLink,Outlet} from 'react-router-dom'

export default function Home() {
    const [sum,setSum] = useState(1)
    return (
        <div>
            <h3>我是Home的内容</h3>
            {sum==2?<Navigate to="/about" replace/>: <h4>当前sum的值是：{sum}</h4>}
            <button onClick={()=>setSum(2)}>点我将sum变为2</button>

            <ul className="nav nav-tabs">
                <li>
                    <NavLink className="list-group-item" to="news">News</NavLink>
                </li>
                <li>
                    <NavLink className="list-group-item" to="message">Message</NavLink>
                </li>
            </ul>

            {/*指定路由组件的展示的位置*/}
            <Outlet/>
        </div>
    )
}