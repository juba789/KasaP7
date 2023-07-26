import React from 'react'
import ImageAppartBanner from '../components/ImageAppartBanner'
import Banner from '../layout/Banner'

import './About.scss'
import { DescriptionPanel } from '../components/DescriptionPanel'

function About() {
  return (
    <>
    <Banner imageUrl='BannerApropos.png' title='' />
    <div className='about__container'>
    <DescriptionPanel title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
    <DescriptionPanel title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de note plateforme."/>
    <DescriptionPanel title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
    <DescriptionPanel title="Responsabilité"content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
    </div>
    </>
  )
}

export default About