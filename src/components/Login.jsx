import React from 'react'
import './Login.css'
import person from '../assets/person.png'
import pass from '../assets/pass.png'
import mail from '../assets/mail.png'
import { useState } from 'react'

const Login = () => {

    const [action, setAction] = useState("Login");

  return (
    <div className='cont'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:
            <div className="input">
                <img src={person} alt=""/>
                <input type="text" placeholder="Name"/>
            </div>}
            <div className="input">
                <img src={mail} alt=""/>
                <input type="email" placeholder="Email Id"/>
            </div>
            <div className="input">
                <img src={pass} alt=""/>
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Login;
