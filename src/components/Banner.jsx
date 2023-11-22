import React from 'react'
import './Banner.scss'

function Banner(props) {
  const bannerStyle = {
    backgroundImage: `url(${props.imageUrl})`,
  };

  return (
    <div className='banner' style={bannerStyle}>
      <h2>{props.title}</h2>
    </div>
  );
}


export default Banner