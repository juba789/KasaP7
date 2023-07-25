import React from 'react'
import './ImageAppartBanner.scss'

function ImageAppartBanner(props) {
  const imageUrl =props.imageUrl ?  props.imageUrl : "https://picsum.photos/1920/1080";
  return (
    <div className='image__appart__banner'>
        <img src="BannerApropos.png"   alt=''/>
    </div>
  )
}

export default ImageAppartBanner