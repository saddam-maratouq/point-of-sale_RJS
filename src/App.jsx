import react from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'

import  ExplolerFood from './pages/Exploler food/ExplolerFood' 
//routes 
import {   Routes , Route  } from "react-router-dom";
import About from './pages/About/About'



function App() { 
 

  return (
    <div className="App">
    <Navbar/> 
  
  <Routes> 
  <Route exact  path="/" element={<Home />} />
  <Route exact  path="/Home" element={<Home />} />
  <Route  exact   path="/About" element={<About/>} />
  <Route exact  path="/Pos" element={<ExplolerFood/>} />
  </Routes>
 
    </div>
  )
}

export default App;



