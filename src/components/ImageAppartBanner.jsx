import React from 'react'
import './ImageAppartBanner.scss'

function ImageAppartBanner(props) {
  return (
    <div className='image__appart__banner'>
        <img src={props.imageUrl}   alt=''/>
    </div>
  )
}

export default ImageAppartBanner