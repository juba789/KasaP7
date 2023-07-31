/*
import React, { useEffect, useState } from 'react'
import './AppartPage.scss'

import ImageAppartBanner from '../components/ImageAppartBanner'
import AppartHeader from '../components/AppartHeader'
import { DescriptionPanel } from '../components/DescriptionPanel'
import { useParams } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import { Link } from 'react-router-dom'




function AppartPage() {
const { appartId } = useParams();
console.log(appartId)
//const location =useLocation();
 const [flat,setFlat]= useState(null);



 useEffect(fetchAppartData,[]);
 const jsonPath = `${window.location.origin}/db.json`
 console.log(jsonPath)
  function fetchAppartData (){
  
    fetch(jsonPath) 
    .then((res)=>res.json(res))
    .then((flats)=>{
      console.log(flats)
      const flat= flats.find(flat=>flat.id===appartId);
      console.log("le flat",flat)
      console.log("l'ID de l'url",appartId)
      console.log("l'ID du flat",flat.id)
        setFlat(flat);
       
      
      
     
    })
    .catch(console.error)
  
  }
  console.log(flat)
  console.log(appartId)

  
  if (!flat ) {
    console.log(flat)
   return <div>Chargement en cours...</div>; 
  }
 


  return (
<div className='appart-page'>
     <ImageAppartBanner  pictures={flat?.pictures}/>
     <AppartHeader flat={flat} />
    <div className='appart__description__area'>
     <DescriptionPanel  title ="Description" content={flat.description} />
     <DescriptionPanel title ="Equipements" content={flat.equipments.map((eq,i)=><li key={i}>{eq}</li>)} />
     </div>
    </div> 
    
  )
}

export default AppartPage

*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AppartPage.scss';
import ImageAppartBanner from '../components/ImageAppartBanner';
import AppartHeader from '../components/AppartHeader';
import { DescriptionPanel } from '../components/DescriptionPanel';
import { Navigate } from 'react-router-dom';

function AppartPage() {
  const { appartId } = useParams();
  const [flat, setFlat] = useState(null);
  const [loading, setLoading] = useState(true);
  const jsonPath = `${window.location.origin}/db.json`;

  useEffect(() => {
    fetchAppartData();
  }, []);

  function fetchAppartData() {
    fetch(jsonPath)
      .then((res) => res.json())
      .then((flats) => {
        const foundFlat = flats.find((flat) => flat.id === appartId);
        setFlat(foundFlat);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Retirer setLoading(false) du bloc catch
      });
  }

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (!flat) {
    
      
        
        return <Navigate to="*" />;
     
    
  }

  return (
    <div className="appart-page">
      <ImageAppartBanner pictures={flat?.pictures} />
      <AppartHeader flat={flat} />
      <div className="appart__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => <li key={i}>{eq}</li>)}
        />
      </div>
    </div>
  );
}

export default AppartPage;
