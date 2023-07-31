import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src='/logo-black.png' alt='logo' />
        </div>
        <div className='footer__text'>
         &copy;2020 kase.All rights reserved
        </div>
    </div>
  )
}

export default Footer