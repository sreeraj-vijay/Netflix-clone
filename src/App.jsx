import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Row-post/Rowpost'
import  { orginals,actions,horror,comdedy,romance,documentari } from './urls'


function App() {
  return (
    <div className='main'>
    <NavBar/>
    <Banner/>
    <Rowpost title="NetFlix Orginals" url={orginals}/>
    <Rowpost title="Actions" url={actions} isSmall/>
    <Rowpost title="ComedyMovies" url={comdedy} isSmall/>
    <Rowpost title="HorrorMovies" url={horror} isSmall/>
    <Rowpost title="RomanceMovies" url={romance} isSmall/>
    <Rowpost title="Documentaries" url={documentari} isSmall/>

    </div>
    
  )
}

export default App
