import React from 'react'
import {Button} from '@material-ui/core'
import { auth, provider} from '../firebase'
import './Login.scss'

function Login() {
    
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message))
    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img src="src/images/pngegg.png" alt="" />
        </div>
        <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login