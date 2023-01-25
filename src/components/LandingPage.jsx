import React from 'react'
import HomePic from '../assets/wall1.svg'


const LandingPage = () => {
  return (
    <div className="landing-page-pic-wrapper">
    <img src={HomePic} alt="Background pic" />
    <div className="landing-page-content-wrapper">
      <h1>Wildlife - Africa's Finest Attraction</h1>
      <p>
        Welcome to Africa, home of the most famous Fauna in human culture. Come tourist with us, to get an up-close view of Wildlife.
      </p>
      <a href="#">Book Now</a>
    </div>
  </div>
  )
}

export default LandingPage