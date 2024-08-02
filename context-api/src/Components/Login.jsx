import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

  const[username,setUsername] = useState('')  
  const {setUser} = useContext(UserContext)

  const handleSubmit = () => {
    setUser(username)
    setUsername('')
  }

  return (
    <>
    <input 
    type='text'
    value={username}
    placeholder='Enter your name'
    onChange={(e) => setUsername(e.target.value)}
    />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login




