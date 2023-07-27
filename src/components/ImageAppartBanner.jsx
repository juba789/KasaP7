import React, { useState } from 'react'
import './ImageAppartBanner.scss'

function ImageAppartBanner(props) {
 const pictures =props.pictures
const [currentPicture,setcurrentPicture] =useState(0);

const getClassName=(i)=>{
  if(i===currentPicture) return "show";
  return "";
}
const moveToNext=()=>{
  setcurrentPicture((currentPicture + 1) % pictures.length); 
}
const moveToPrevious = () => {
  if (currentPicture === 0) {
    // Si currentPicture est déjà à zéro, on affiche la dernière image
    setcurrentPicture(pictures.length - 1);
  } else {
    // Sinon, on décrémente simplement currentPicture
    setcurrentPicture(currentPicture - 1);
  }
};
const getPositionText = () => {
  return `${currentPicture + 1}/${pictures.length}`;
};
// Vérifier si la longueur de la liste pictures est égale à 1
const shouldShowButtons = pictures.length !== 1;

  return (
    <div className='image__appart__banner'>
     <div className='image__container'>
      {pictures.map((pic,i)=>(
     <img  key={pic}  src={pic}  alt='' className={getClassName(i)}></img>
        ))}
      </div>
      <div className="image__position">{getPositionText()}</div>
      {shouldShowButtons && (
        <>
        <div className="image__position">{getPositionText()}</div>
        <button className='btn btn-next' onClick={moveToNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <button className='btn btn-previous' onClick={moveToPrevious}>
          <i className="fas fa-chevron-left"></i>
        </button>
        </>
    )}
      
    </div>
  )
}

export default ImageAppartBanner