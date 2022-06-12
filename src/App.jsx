import { useState, useEffect } from 'react'
import Chat from './components/Chat'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import { selectUser } from './features/userSlice'
import {useSelector, useDispatch} from 'react-redux'
import { auth } from './firebase'
import { login, logout } from './features/userSlice'


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=> {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        //logged out
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar />
        <Chat/>
        </>
      ): (
        <Login/>
      )}
      
      
    </div>
  )
}

export default App
