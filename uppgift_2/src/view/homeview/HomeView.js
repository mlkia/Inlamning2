import React, { useContext } from 'react'
import './HomeView.css'
import { UserContext } from '../../utils/context/UserContext'

export const HomeView = () => {

    const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    return loggedInUser
        ? <div className="homeContainer">
            <h1>Welcome: {loggedInUser}</h1>
            <h1>Home Page</h1>
          </div>
        : <div className="homeContainer">
            <h1>Home Page</h1>
          </div>
    
}
