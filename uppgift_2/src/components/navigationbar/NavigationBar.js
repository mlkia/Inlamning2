import React, {useState, useContext } from 'react'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'
import { Profile } from '../profile/Profile'

export const NavigationBar = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)
    

    const displayUserEmailIfAuthenticated = () => {
        return loggedInUser
            ? <div className="signin"> <Profile /> </div>
            : <button className="signbutton" onClick={() => history.push("/signin")}> Sign In</button>
    }

    return (
        <div className="navigationBarContainer">
            <input className="search"></input>
              <i className='fas'>&#xf002;</i>
            <h1 className="navigationBarLogotype" onClick={() => history.push("/")}>MasterChef</h1>
            {displayUserEmailIfAuthenticated()}
        </div >
    )
}