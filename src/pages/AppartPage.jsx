import React, { useEffect, useState } from 'react'
import './AppartPage.scss'

import ImageAppartBanner from '../components/ImageAppartBanner'
import AppartHeader from '../components/AppartHeader'
import { DescriptionPanel } from '../components/DescriptionPanel'
import { useLocation } from 'react-router-dom'


function AppartPage() {
const location =useLocation();
 const [flat,setFlat]= useState();

 useEffect(fetchAppartData,[]);

  function fetchAppartData (){
    fetch("db.json")
    .then((res)=>res.json(res))
    .then((flats)=>{
      const flat= flats.find(flat=>flat.id===location.state.appartId);
      setFlat(flat);
     
    })
    .catch(console.error)
  }
  if (!flat) {
    return <div>Chargement en cours...</div>; 
  }
 
  return (
<div className='appart-page'>
     <ImageAppartBanner  imageUrl={flat?.cover}/>
     <AppartHeader flat={flat} />
    <div className='appart__description__area'>
     <DescriptionPanel  title ="Description" content={flat.description} />
     <DescriptionPanel title ="Equipements" content={flat.equipments.map((eq)=><li>{eq}</li>)} />
     </div>
    </div> 
    
  )
}

export default AppartPage