import React from 'react'
import {useState} from 'react'
import axios from 'axios'



function Login({token, setToken}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const loginHandler = () =>{
        setError("")
        setPassword("")
        setUsername("")
       axios({
        url: "https://fakestoreapi.com/auth/login",
        method: "POST",
        data: {
            username: username,
            password: password,
        },
       }).then(res => {
            console.log(res.data.token);
            setToken(res.data.token);
            localStorage.setItem("userToken", res.data.token);
       }).catch(err => {
            console.log(err);
            setError(err.response.data);
       })
    }


  return (
    <div className="login">
        <div className="login-input">
            <h1>Login to continue</h1>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
            <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
            {error && <small className="error-placeholder">{error}</small>}
            <button className="login-button" onClick={loginHandler}>Login</button>
        </div>
    </div>
  )
}

export default Login