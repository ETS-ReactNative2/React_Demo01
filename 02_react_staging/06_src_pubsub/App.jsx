import {Component} from "react";
import Search from "./conponents/Search";
import List from "./conponents/List";

export default class App extends Component{

   render() {
        return (
            <div id="app">
                <div className="container">
                    <Search/>
                    <List/>
                </div>
            </div>
        );
    }

}
