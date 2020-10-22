import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './SignInView.css'
import { UserContext } from '../../utils/context/UserContext'

export const SignInView = () => {
    const history = useHistory();
    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState()
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    const login = () => {
        setLoggedinUser(loginEmail)
        localStorage.setItem('email', loginEmail)
        alert(loginEmail + " Has logged in")
        history.push('/home')
    }

    return (
        <div className="loginstyle">
            <h4>Sign in to Student Guide</h4>
            <span>Email:</span> <br />
            <input onChange={e => setLoginEmail(e.target.value)} /> <br />
            <span>Password:</span> <br />
            <input onChange={e => setLoginPassword(e.target.value)} /> <br />
            <button onClick={() => login()}>Login</button>
        </div>
    )
}