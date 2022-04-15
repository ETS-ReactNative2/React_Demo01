import {Component} from "react";
import {Link, NavLink, Redirect, Route, Switch} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./component/Header";
import MyNavLink from "./component/MyNavLink";
import Test from "./pages/Test";

export default class App extends Component{

   render() {
        return (
            <div id="root">
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
                                        <Route exact path="/about" component={About}></Route>
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
