import React, { Component } from "react";

export default class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text: 'Hello',
            count : 0
        }
    }

    countUp = () =>{
        // var c = this.state.count
        // c++
        // this.setState({count : c})
        this.setState((prevState) => {
            return {count : prevState.count + 1}
        })
    }

    render(){
        return(
            <div>
                <p>Welcome {this.props.user.id} - {this.props.user.name}</p>
                <p>{this.state.text}</p>
                <p>{this.state.count}</p>
                <button onClick={()=> {
                    this.setState({ text:'change me!'})
                }}>Change text </button>

                <button onClick={this.countUp}>Count up </button>
                <Logout/>
            </div>
        )
    }
}

class Logout extends Component {
    render(){
        return(
            <a href="#" >Logout</a>
        )
    }
}