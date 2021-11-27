import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
function Login() {
    const [user, setuser] = useState({
        email: "",
        password: ""
    })
    const onChnageInput = (e) => {
        const { name, value } = e.target
        setuser({ ...user, [name]: value })
    }
    const loginSubmit = async e => {
        e.preventDefault()
        try {
          const token = await  fetch("http://localhost:8080/user/login", { method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...user }) }).then(res => res.json()).then(responce => responce ).catch(error => error)
            // localStorage.setItem('firstLogin', true)
            if(token) {
                localStorage.setItem('accessToken', token.accessToken)
                window.location.href = "/";
            }
        } catch (error) {
            alert(error.responce.data.message)
        }
    }
    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login </h2>
                <input type='email' name="email" required placeholder="Email" value={user.email} onChange={onChnageInput} />
                <input type='password' name="password" required placeholder="password" autoComplete="on" value={user.password} onChange={onChnageInput} />
                <div className="row">
                    <button type="submite">Login</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
