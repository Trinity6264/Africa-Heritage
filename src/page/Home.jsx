import React from 'react'
import '../style/home_style.css'



import LandingPage from '../components/LandingPage'
import WildLife from '../components/WildLife'

import Reservations from '../components/Reservations'

import ForestBg from '../assets/forest.jpg'

const Home = () => {

  

  return (
    <section className='home'>
      <LandingPage />
      <WildLife />
      <Reservations />
      <footer id='contact'>
        <img src={ForestBg} alt="Forest background" />
      </footer>
    </section>
  )
}

export default Home
