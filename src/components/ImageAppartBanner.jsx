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

  return (
    <div className='image__appart__banner'>
     <div className='image__container'>
      {pictures.map((pic,i)=>(
     <img  key={pic}  src={pic}  alt='' className={getClassName(i)}></img>
        ))}
      </div>
      <button className='btn btn-next'>
      <i class="fas fa-chevron-left" onClick={moveToNext}></i>
      </button>
      <button className='btn btn-previous'>
      <i class="fas fa-chevron-right" onClick={moveToPrevious}></i>
      </button>
    </div>
  )
}

export default ImageAppartBanner