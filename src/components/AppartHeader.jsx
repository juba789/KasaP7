import React from 'react'
import './AppartHeader.scss';

function AppartHeader(props) {

  const {name}=props.flat.host
  const [firstName,lastName]=name.split(" ");
 
  return (
    <div className='appart__header'>
    <div className='appart__title'>
        <h1>{props.flat.title}</h1>
        <h2>{props.flat.location}</h2>
      <div className='appart__tags'>
        {props.flat.tags.map((tag)=>(<span key={tag}>{tag}</span>))}
      </div>  
    </div>  
        
    <div className='appart__owner'>
        <div className='appart__owner__details'>
        <h3><span>{firstName}</span>
            <span>{lastName}</span>
        </h3>
        <div className='appart__owner__badge'>
          <img src={props.flat.host.picture} />
        </div>
       
        </div>
        <div className='appart__owner__stars'>
         { [1,2,3,4,5].map((num)=>(
            <span key={num} className={props.flat.rating>= num? "on" : ""}>&#9733;</span>
          ))}
          </div>
    </div>  
    </div>
  )
}

export default AppartHeader