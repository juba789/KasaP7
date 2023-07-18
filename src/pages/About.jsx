import React from 'react'
import ImageAppartBanner from '../components/ImageAppartBanner'

import './About.scss'
import { DescriptionPanel } from '../components/DescriptionPanel'

function About() {
  return (
    <>
    <ImageAppartBanner />
    <div className='about__container'>
    <DescriptionPanel />
    <DescriptionPanel />
    <DescriptionPanel />
    <DescriptionPanel />
    </div>
    </>
  )
}

export default About