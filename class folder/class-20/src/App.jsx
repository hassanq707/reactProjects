import React, { useEffect } from 'react'
import Signup from './pages/Signup'
import './App.css'
import { Router_App } from './config/Router_App'
import { onAuthStateChanged} from 'firebase/auth'
import { auth } from './config/firebase-config'
import { set_user_auth } from './store/slices/user_data_slice'
import { useDispatch } from 'react-redux'

const App = () => {

  const dispatch = useDispatch()


  useEffect(() => {

  
  const check_user = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        console.log('user hai', uid)
        dispatch(set_user_auth(true))

      } else {
        dispatch(set_user_auth(false))
        console.log('user available nh hai', user)
      }
    });
  }

  check_user()
},[])

  return (
   <Router_App />
  )
}

export default App








