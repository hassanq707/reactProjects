import React, { useCallback, useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const{user} = useContext(UserContext)
  return (
    <h1>welcome {user}</h1>
  )
}

export default Profile


