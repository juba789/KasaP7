import React from 'react'
import './AppartPage.scss'
import { AppartDescription } from '../components/AppartDescription'
import AppartBanner from '../components/AppartBanner'
import AppartHeader from '../components/AppartHeader'


function AppartPage() {
  return (
<div className='appart-page'>
     <AppartBanner/>
     <AppartHeader/>
    <div className='appart__description__area'>
     <AppartDescription />
     <AppartDescription />
     </div>
    </div> 
    
  )
}

export default AppartPage