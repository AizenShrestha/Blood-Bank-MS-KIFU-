'use client'
import React, { useState } from 'react'
import './styling.css';



const LoginSignup = () => {

    const [action,setAction] = useState("Sign up");
  return (
    <div className='container'>
    <div className='header'>
    <div className='text'>{action}</div>
    <div className='underline'></div>
    <br/>
    </div>
    <div className='inputs'>
        {action==='Login'?<div></div>:<div className='input'>
        <img src='email_icon' alt=''/>
            <input type='Email' placeholder='Email'/>
        </div>}
        <div className='input'>
        <img src='phone_icon' alt=''/>
            <input type='phone number' placeholder='Phone Number'/>
        </div>
        <br/>
        
        <br/>
        <div className='input'>
        <img src='password_icon' alt=''/>
            <input type='Password' placeholder='Password'/>
        </div>
    </div>
    <br/>
    <div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>
    <div className='submit-container'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction('Login')}}>Login</div>
    </div>
    </div>
  )
}

export default LoginSignup