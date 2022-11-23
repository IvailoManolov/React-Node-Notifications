import React from 'react'
import './Login.css';

const Login = ({setUsername,userName,setUser}) => {
  return (
    <div className='login'>
        <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={() => setUser(userName)}> Login </button>
    </div>
  )
}

export default Login