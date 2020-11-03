import React, { useContext, useState, useEffect } from 'react'
import './HomeView.css'
import { UserContext } from '../../utils/context/UserContext'
import Axios from 'axios'

export const HomeView = () => {
    const [data, setData] = useState()
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)
    const [search, setSearch]= useState()
    
    const fetchDataFromExternalAPI = () => {
        Axios.get (`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        .then((Response) => setData(Response.data))
        .catch((error) => console.log(error))
    }

    const disPlayData = () => {
      if (data) {
        return <div>
        <h3>Id: {data.id}</h3>
        <h3>name: {data.name}</h3>
        <h3>Height: {data.height} m</h3>
        <h3>Weight: {data.weight} g</h3>
        <h3>Type: {data.types[0].type.name}</h3>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${data.id}.png`} alt=""/>
        </div>
      }
    }
    
    const makeAPIButton =() =>{
      return <div>
        <span>Search Pokémon Characters </span>
        <br/>
        <input onChange={(event) => setSearch(event.target.value)}></input>

        <button onClick={() => fetchDataFromExternalAPI()}>Search</button>
          {disPlayData()}
      </div>
    }

    return loggedInUser
    
        ? <div className="homeContainer">
            <h1>Welcome: {loggedInUser}</h1>
            <h1>Home Page</h1>
            {makeAPIButton()}
          </div>
        : <div className="homeContainer">
            <h1>Home Page</h1>
            {makeAPIButton()}
          </div>

    
  }
