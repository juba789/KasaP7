import React from 'react'
import './AppartPage.scss'

import ImageAppartBanner from '../components/ImageAppartBanner'
import AppartHeader from '../components/AppartHeader'
import { DescriptionPanel } from '../components/DescriptionPanel'


function AppartPage() {
  return (
<div className='appart-page'>
     <ImageAppartBanner/>
     <AppartHeader/>
    <div className='appart__description__area'>
     <DescriptionPanel/>
     <DescriptionPanel/>
     </div>
    </div> 
    
  )
}

export default AppartPage