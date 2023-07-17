import React from 'react'
import './AppartHeader.scss';

function AppartHeader() {
  return (
    <div className='appart__header'>
    <div className='appart__title'>
        <h1>Crazy loft on canal st-martin</h1>
        <h2>Paris,Ile de france</h2>
      <div className='appart__tags'>
        <span className='appart__tag'>Cozy</span>
        <span className='appart__tag' >Canak</span>
        <span className='appart__tag'>Paris 10</span>
      </div>  
    </div>  
        
    <div className='appart__owner'>
        <div className='appart__owner__details'>
        <h3><span>Alexandre</span>
            <span>Dumas</span>
        </h3>
        <div className='appart__owner__badge'></div>
        </div>
        <div className='appart__owner__stars'>
            <span className='on'>&#9733;</span>
            <span className='on'>&#9733;</span>
            <span className='on'>&#9733;</span>
            <span className='off'>&#9733;</span>
            <span className='off'>&#9733;</span>
        </div>
    </div>  
    </div>
  )
}

export default AppartHeader