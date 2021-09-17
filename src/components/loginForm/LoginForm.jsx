import React, { useState } from 'react';

function LoginForm(props){
    const [username, setusername] = useState("admin")
    const [password, setpassword] = useState("")

    return(
        <form>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(event)=>{
                    setusername(event.target.value)
                }}/>
                <p>Ban nhap vao la {username}</p>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(event)=>{
                    setpassword(event.target.value)}}/>
                {password.length < 8 && <p>Vui long nhap mat khau</p>}
            </div>
            <div>
                <button onClick={props.hi}>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;