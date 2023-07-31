import React from 'react'
import './Appart.scss'
import { Link } from 'react-router-dom'

function Appart(props) {
return (
  
  <Link to={`/flat/${props.id}`} state={{ appartId: props.id }}>
    
  <div className='appart'>
  <img src={props.imageUrl} alt=""/>
  
  <div className='apartment__subtitle'>{props.title}</div>
  </div>
  </Link>
  )
}



export default Appart