import React, { Component} from "react";

export default class ListUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: [{ id: 1, name: "Nha", age: 20},
                    {id: 2, name: "Tram", age: 19 },
                    {id: 3, name: "Ngoc", age: 19}]
        }
    }
    render(){
        // let numberArray = this.state.numbers.map((item) => {
        //     return <li key={item}> {item} </li>
        // })

        return <ul>{
            this.state.users.map((u) => {
            return <UserInfo user={u} key={u.id} />
            })
        }
        </ul>
    }
}

function UserInfo(props){
    return <div>
        <p>ID: {props.user.id}</p>
        <p>Name: {props.user.name}</p>
        <p>Age: {props.user.age}</p>
    </div>
}