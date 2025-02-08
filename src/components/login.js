import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div>    
        <form className='formcontainer'>
            <div className='inputtype'><label>Name :</label>
            <input type = "text "/></div>
            <div className='inputtype'> <label>Password :</label>
            <input type = "text "/></div>
            <button>login</button>
           
        </form>
    </div>
  )
}

export default Login
