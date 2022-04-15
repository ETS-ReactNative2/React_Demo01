import React from 'react';
import App from './App';
import ReactDOM from "react-dom";
import store from "./redux/store";


store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
})
