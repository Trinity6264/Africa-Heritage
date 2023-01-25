import React from 'react'
import MapPic from '../assets/map.png'
import LionLogo from '../assets/simba.svg'

const WildLife = () => {
  return (
    <div className="wildlife" id='wildlife'>
        <div className="dot-wrapper">
          <div className="dot-1"></div>
          <div className="dot-2"></div>
          <div className="dot-3"></div>
        </div>
        <div className="second-page-content">
          <div className="content-text">
            <h1>
              Africa's <br /> Finest Attraction
            </h1>
            <p>
              Wildlife refers to undomesticated animal
              species, but has come to include all organisms
              that grow or live wild in an area without being
              introduced by humans. Wildlife was also
              synonymous to game: those birds and mammals
              that were hunted for sport. Wildlife can be found
              in all ecosystems.
            </p>
            <p>
              Humans have historically tended to separate
              civilization from wildlife in a number of ways,
              including the legal, social, and moral senses.
              Some animals, however, have adapted to
              suburban environments.
            </p>
          </div>
          <div className="content-logo">
            <img src={MapPic} alt="Map picture" />
          </div>
        </div>
        <div className="wildlife-logo">
          <div className="lion-logo-wrapper">
            <img src={LionLogo} alt="Simba logo" />
          </div>
          <div className='lion-ball'></div>
        </div>
      </div>
  )
}

export default WildLife