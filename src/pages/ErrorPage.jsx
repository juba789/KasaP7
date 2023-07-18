import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'
import Navbar from '../components/Navbar'
import Main from '../layout/Main'



function ErrorPage() {
  return (
    <>
    <Navbar/>
    <Main>
    <div className='error-page'>
    <h1>404</h1> 
    <h2>oups,la page que vous demandez n'existe pas</h2>
    <Link to='/'>Retournez sur la page d'accueil</Link>
    </div>
    </Main>
        
   
    </>
  )
}

export default ErrorPage