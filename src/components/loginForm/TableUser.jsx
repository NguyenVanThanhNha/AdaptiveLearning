import React, { Component} from "react";

export default class TableUser extends Component {
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

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((u)=> {
                            return <UserInfo user={u} key={u.id}/>
                        })
                    }
                </tbody>
            </table>
        )
    }
}

function UserInfo(props){
    return <tr>
        <td>ID: {props.user.id}</td>
        <td>Name: {props.user.name}</td>
        <td>Age: {props.user.age}</td>
    </tr>
}