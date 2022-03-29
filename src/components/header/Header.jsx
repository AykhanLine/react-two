import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './header.scss';


const Header = () => {
  return (
    <header>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav className="nav-menu">
          <ul className='list-unstyled d-flex m-0'>
          <li><NavLink activeClassname="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassname="active" to="/haqqimizda">About</NavLink></li>
            <li><NavLink activeClassname="active" to='/KontaktSehifesi'>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
