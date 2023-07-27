import React from 'react'
import "./HomePage.scss"
import Banner from '../layout/Banner' 
import AppartGrid from '../components/AppartGrid'




function HomePage() {
  return (
    <>
    
    <Banner imageUrl='homeBanner.png' title='Chez vous, partout et ailleurs' />
    <AppartGrid/>
    
    </>
  )
}

export default HomePage