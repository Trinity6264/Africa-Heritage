import React from 'react'
import '../style/home_style.css'



import LandingPage from '../components/LandingPage'
import WildLife from '../components/WildLife'
import Reservations from '../components/Reservations'
import FooterPage from '../components/FooterPage'


const Home = () => {



  return (
    <section className='home'>
      <LandingPage />
      <WildLife />
      <Reservations />
      <FooterPage />
    </section>
  )
}

export default Home
