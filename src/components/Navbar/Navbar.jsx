import React from 'react'
import './Nav.css'

//logo 
import Logo from '../../assets/Images/food-logo.png'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
    <div className="container">
      <a> <img className='logo' src={Logo} alt="Logo" /> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto ">
            {/* Home */}
          <li className="nav-item ">
            <Link className="nav-link active" aria-current="page" to='/Home' >Home</Link>
          </li>

          {/* About */}
          <li className="nav-item">
          <Link className="nav-link " aria-current="page" to='/About' >About</Link>
          </li> 

          <li className="nav-item">
          <Link className="nav-link " aria-current="page" to='/Pos' >Explorer Food</Link>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" >Reviews</a>
          </li>
        </ul>
      </div>
    </div> 
  </nav>
  )
}

export default Navbar
