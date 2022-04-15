import {Component} from "react";
import {Link, NavLink, Redirect, Route, Switch} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./component/Header";
import MyNavLink from "./component/MyNavLink";
import Test from "./pages/Test";
import 'antd/dist/antd.less';
import {Button, DatePicker} from 'antd';
import {WechatOutlined} from "@ant-design/icons";
const { RangePicker } = DatePicker;

export default class App extends Component{

   render() {
        return (
            <div id="root">
                <WechatOutlined />
                <DatePicker />
                <RangePicker />
                <div>
                    <Header/>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                {/*编写路由链接*/}
                                {/*<NavLink activeClassName="active" className="list-group-item" to="/about">About</NavLink>*/}
                                {/*<NavLink activeClassName="active" className="list-group-item" to="/home">Home</NavLink>*/}
                                <MyNavLink to="/about">About</MyNavLink>
                                <MyNavLink to="/home">Home</MyNavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    {/*注册路由*/}
                                    {/*exact 严格匹配*/}
                                    <Switch>
                                        <Route path="/about" component={About}></Route>
                                        <Route path="/home" component={Home}></Route>
                                        {/*<Route path="/home" component={Test}></Route>*/}
                                        {/*都没有匹配 跳转到about*/}
                                        <Redirect to="/about"/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
