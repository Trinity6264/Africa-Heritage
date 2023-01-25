import React from 'react'
import '../style/home_style.css'

import HomePic from '../assets/wall1.svg'

const Home = () => {
  return (
    <section className='home'>
      <div className="landing-page-pic-wrapper">
        <img src={HomePic} alt="" srcset="" />
        {/* <div className="landing-page-content-wrapper">
          <h1>Wildlife - Africa's Finest Attraction</h1>
          <p>
          Welcome to Africa, home of the most famous Fauna in human culture. Come tourist with us, to get an up-close view of Wildlife.
          </p>
        </div> */}
      </div>
    </section>
  )
}

export default Home