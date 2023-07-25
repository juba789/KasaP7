import React from 'react'
import ImageAppartBanner from '../components/ImageAppartBanner'

import './About.scss'
import { DescriptionPanel } from '../components/DescriptionPanel'

function About() {
  return (
    <>
    <ImageAppartBanner />
    <div className='about__container'>
    <DescriptionPanel title="Fiabilité" content="c'est très important"/>
    <DescriptionPanel title="Respect" content="c'est très important"/>
    <DescriptionPanel title="Service" content="c'est très important"/>
    <DescriptionPanel title="Responsabilité"content="c'est très important" />
    </div>
    </>
  )
}

export default About