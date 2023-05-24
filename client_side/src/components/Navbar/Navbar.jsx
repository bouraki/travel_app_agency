import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div >
        <nav className="app__navbar">

            <div className="app__navbar-logo">Travely</div>

            <ul className="app__navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/discover">Discover</Link></li>
                <li><Link to="contact">Contact us</Link></li>
                <li><Link to="admin">admin</Link></li>
            </ul>

            <div className="app__navbar-button">
                <Button text='book now'  />
            </div>

        </nav>

    </div>
  )
}

export default Navbar