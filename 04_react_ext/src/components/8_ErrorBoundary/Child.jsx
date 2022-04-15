import React, {Component} from 'react';

class Child extends Component {
    state = {
        // users:[
        //     {id:'001',name:'jack',age:18},
        //     {id:'002',name:'tom',age:19},
        //     {id:'003',name:'peiqi',age:23},
        // ]
        users:'abc'

    }

    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.users.map((userObj)=>{
                        return <h4 key={userObj.id}>{userObj.id}----{userObj.name}----{userObj.age}</h4>
                    })
                }
            </div>
        );
    }
}

export default Child;