import React from 'react'
import './Appart.scss'
import { Link } from 'react-router-dom'

function Appart() {
  return (
    <Link to='/flat'>
  <div className='appart'><div className='apartment__subtitle'>Titre de la location</div></div>
  </Link>
  )
}

export default Appart