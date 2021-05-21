import React,{ useState } from 'react'
import './login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {

    const [getData, setgetData] = useState(false)

    const handleLogin = () => {
        setgetData()
    }

    return (
      
        <div className="form_container">
            <div className="form_des">
                <h1>Welcome</h1>
            </div>
            <div className="form_header">
                <h1>Login</h1>
                <form method="POST">
                        <div className="inputbox">
                            <i className="far fa-envelope"></i>
                            <input type="email" value="" name="email"
                                placeholder="Enter Email" />                          
                        </div>
                        <div className="inputbox">
                            <i className="far fa-lock"></i>
                            <input type="password" value="" name="password"
                                placeholder="Enter Password" />                          
                        </div>
                    <input type="Submit" value="Login" />
                </form>
                <p><a href="#">Forgot Password?</a></p>
                <p><NavLink to="/register">Not Registered?</NavLink></p>
                
            </div>
        </div>
      
    )
}

export default Login
