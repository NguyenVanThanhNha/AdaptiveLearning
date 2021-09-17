import React, { Component } from "react";

export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            username: '',
            password:'',
            city:'',
            about:''
        }
    }

    // setName =(event) => {
    //     this.setState({name: event.target.value})
    // }
    // setUsername =(event) => {
    //     this.setState({username: event.target.value})
    // }
    // setCity =(event) => {
    //     this.setState({city: event.target.value})
    // }
    // setPassword =(event) => {
    //     this.setState({password: event.target.value})
    // }
    // setAbout =(event) => {
    //     this.setState({about: event.target.value})
    // }
    submitRegister = () => {
        console.log(this.state)
    }

    setParams =(event) => {
        let name = event.target.name
        let value = event.target.value

        this.setState({[name]: value})
    }
    render(){
        return( 
            <form>
                <div><input type="text" name="name" placeholder="enter your name" value={this.state.name} 
                    onChange={this.setParams}/>
                    <p>Enter: {this.state.name}</p>
                </div>
                <div><input type="text" name="username" placeholder="enter your username" value={this.state.username} 
                    onChange={this.setParams}/>
                    <p>Enter: {this.state.username}</p>
                </div>
                <div><input type="password" name="password" placeholder="enter password" value={this.state.password  }
                    onChange={this.setParams}/>
                    <p>Enter: {this.state.password}</p>
                    </div>

                <div>
                    <select value={this.state.city} name="city" onChange={this.setParams}>
                        <option value="HN"> Ha Noi</option>
                        <option value="SG"> Saigon</option>
                        <option value="Hue"> Hue</option>
                    </select>
                    <p>Enter: {this.state.city}</p>
                </div>
                <div>
                    <textarea placeholder="Enter about you" name="about" value={this.state.about} onChange={this.setParams}></textarea>
                </div>
                <div><button type="button" onClick={this.submitRegister} >Register</button></div>
            </form>
        )       
    }
}