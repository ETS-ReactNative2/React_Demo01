import {Component} from "react";
import Count from "./containers/Count"; // 引入容器组件
import Index from "./containers/Person";

export default class App extends Component{

  render() {
    return (
        <div>
            <Count />
            <hr/>
            <Index/>
        </div>
    );
  }

}
