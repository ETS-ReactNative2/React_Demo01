import React from 'react';
import App from './App';
import ReactDOM from "react-dom";

import store from "./redux/store";
import {Provider} from "react-redux";

ReactDOM.render(
    // 此处需要用Peovider包裹App，目的是让App所有的后代容器都能收到store
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)
