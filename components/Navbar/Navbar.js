import './Navbar.css'
import React from 'react'

const Navbar= ()=> {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
            <h1>E-Dulces</h1>
        </div>
        <div className="navbar-opc">
            <button className="navbar-button">Postres</button> 
            <button className="navbar-button">Bebidas</button>
        </div>
      </nav>
    )
}
export default Navbar