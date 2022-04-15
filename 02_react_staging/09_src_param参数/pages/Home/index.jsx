import {Component} from "react";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../component/MyNavLink";
import {Route, Switch} from "react-router-dom";

export default class Home extends Component{

    render() {
        // console.log("Home组件的props",this.props)
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News}/>
                        <Route path="/home/message" component={Message}/>
                    </Switch>
                </div>
            </div>
        );
    }

}
