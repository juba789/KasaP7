import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
 /*  <nav className='navbar' >
    <NavLink to='/'>
      <div className='navbar__logo'>
        <img src='logo.png' alt='Logo'/>
    </div>
    </NavLink>
        <NavLink to='/'><div>Accueil</div></NavLink>
        <NavLink to='/about'>
        <div>A propos</div>
        </NavLink>
   </nav>
 */ <nav className='navbar'>
    <div className='navbar__logo'>
      <NavLink to='/'>
        <img src="/LOGOKASA.png" />
      </NavLink>
    </div>
    <div className="navig">
      <div className="accueil">
        <NavLink to='/'>
          Accueil
        </NavLink>
      </div>
      <div className="apropos">
        <NavLink to='/about'>
          A propos
        </NavLink>
      </div>
    </div>
  </nav>  
  )
}

export default Navbar